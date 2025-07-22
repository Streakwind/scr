export function parsePageMetadata(content: string) {
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  
  if (!frontmatterMatch) {
    return {};
  }
  
  const frontmatter = frontmatterMatch[1];
  const metadata: { author?: string } = {};
  
  // Parse author - try both with and without quotes
  const authorMatch = frontmatter.match(/^author:\s*(.+)$/m);
  if (authorMatch) {
    metadata.author = authorMatch[1].trim().replace(/['"]/g, '');
  }
  
  return metadata;
}

// Parse individual author to extract name and optional GitHub username
export function parseAuthor(authorString: string) {
  // Support formats like "Name (@username)" or "Name (username)" or just "Name"
  const match = authorString.match(/^(.+?)\s*\(@?([a-zA-Z0-9_-]+)\)$/) || 
                authorString.match(/^(.+?)\s*\(([a-zA-Z0-9_-]+)\)$/);
  
  if (match) {
    return {
      name: match[1].trim(),
      github: match[2].trim()
    };
  }
  
  return {
    name: authorString.trim(),
    github: null
  };
}
