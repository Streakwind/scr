import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

export async function getFileLastModified(filePath: string): Promise<Date | null> {
  try {
    // Convert the URL path to the actual file path in the content directory
    const actualFilePath = filePath === '' || filePath === '/' 
      ? 'content/docs/index.mdx' 
      : `content/docs/${filePath.replace(/^\//, '')}.mdx`;
    
    const fullPath = path.join(process.cwd(), actualFilePath);
    
    // Check if file exists
    if (!existsSync(fullPath)) {
      return null;
    }
    
    // Get the last commit date for this specific file using git
    const gitCommand = `git log -1 --format=%ct "${actualFilePath}"`;
    const timestamp = execSync(gitCommand, { 
      encoding: 'utf8',
      cwd: process.cwd()
    }).trim();
    
    if (!timestamp) {
      return null;
    }
    
    // Convert Unix timestamp to Date
    return new Date(parseInt(timestamp) * 1000);
  } catch (error) {
    console.warn('Could not get git last modified date:', error);
    return null;
  }
}
