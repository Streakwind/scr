import { Edit } from 'lucide-react';

interface PageFooterProps {
  filePath: string;
  lastModified?: Date | null;
  githubRepo?: string;
}

export function PageFooter({ 
  filePath, 
  lastModified, 
  githubRepo = 'Streakwind/scr' // Replace with your actual repo
}: PageFooterProps) {
  // Convert the URL path to the actual file path
  const actualFilePath = filePath === '' || filePath === '/' 
    ? 'index.mdx' 
    : `${filePath.replace(/^\//, '')}.mdx`;
    
  const githubUrl = `https://github.com/${githubRepo}/edit/main/content/docs/${actualFilePath}`;
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="border-t border-border pt-6 mt-12 text-sm">
      <div className="flex flex-col items-center gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:!text-blue-800 dark:hover:!text-blue-200 transition-colors decoration-none underline-none"
          style={{ textDecoration: 'none', color: '#3B82F6' }}
        >
          <Edit className="w-4 h-4" />
          Contribute to this page on GitHub
        </a>
        
        {lastModified && (
          <div className="text-muted-foreground">
            Last updated: {formatDate(lastModified)}
          </div>
        )}
      </div>
    </div>
  );
}
