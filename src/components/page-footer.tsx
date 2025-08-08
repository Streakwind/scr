import { Edit, Github, Instagram, Youtube } from 'lucide-react';

interface PageFooterProps {
  filePath: string;
  lastModified?: Date | null;
  githubRepo?: string;
  showSocialFooter?: boolean; // New prop to control whether to show full footer
}

export function PageFooter({ 
  filePath, 
  lastModified, 
  githubRepo = 'Streakwind/scr', // Replace with your actual repo
  showSocialFooter = false
}: PageFooterProps) {
  const currentYear = new Date().getFullYear();
  
  // Convert the URL path to the actual file path
  const actualFilePath = filePath === '' || filePath === '/' 
    ? 'index.mdx' 
    : `${filePath.replace(/^\//, '')}.mdx`;
    
  const githubUrl = `https://github.com/${githubRepo}/edit/main/content/docs/${actualFilePath}`;
  
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/Streakwind/scr',
      icon: Github,
      hoverColor: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/your-handle', // Replace with your actual Instagram
      icon: Instagram,
      hoverColor: 'hover:text-pink-600'
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@your-channel', // Replace with your actual YouTube
      icon: Youtube,
      hoverColor: 'hover:text-red-600'
    }
  ];
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="border-t border-border pt-6 mt-12">
      {/* GitHub contribute section - only for docs pages */}
      {!showSocialFooter && (
        <div className="flex flex-col items-center gap-3 text-sm mb-8">
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
      )}

      {/* Simple social footer for homepage */}
      {showSocialFooter && (
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 gap-8">
            <p className="text-muted-foreground text-sm">
              © 2024 - {currentYear} SeattleCR. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-2 rounded-lg bg-muted/50 border border-border hover:border-border/80 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.hoverColor}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
