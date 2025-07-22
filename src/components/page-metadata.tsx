import { parseAuthor } from '@/lib/frontmatter-utils';

interface PageMetadataProps {
  author?: string;
}

export function PageMetadata({ author }: PageMetadataProps) {
  if (!author) {
    return null;
  }

  // Check if there are multiple authors (look for commas)
  const authors = author.split(',').map(a => a.trim()).filter(a => a.length > 0);
  const isPlural = authors.length > 1;
  const label = isPlural ? 'Authors:' : 'Author:';

  // Parse each author to extract name and GitHub username
  const parsedAuthors = authors.map(parseAuthor);

  return (
    <div className="mb-2 text-sm">
      <div className="text-muted-foreground">
        <span className="font-medium">{label}</span>{' '}
        {parsedAuthors.map((author, index) => (
          <span key={index}>
            {author.github ? (
              <a 
                href={`https://github.com/${author.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-muted-foreground"
              >
                {author.name}
              </a>
            ) : (
              author.name
            )}
            {index < parsedAuthors.length - 1 && ', '}
          </span>
        ))}
      </div>
    </div>
  );
}
