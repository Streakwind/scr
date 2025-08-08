import { source } from '@/../lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { ThemeLogo } from '@/components/logo';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <ThemeLogo />
            <span className="font-semibold">SeattleCR</span>
          </div>
        ),
        url: '/',
      }}
    >
      {children}
    </DocsLayout>
  );
}