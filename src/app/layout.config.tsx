import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ThemeLogo } from '@/components/logo';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2">
        <ThemeLogo />
        <span className="font-semibold">SeattleCR</span>
      </div>
    ),
    transparentMode: 'top',
    url: '/',
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Exercises',
      url: '/exercises',
      active: 'nested-url',
    },
    {
      text: 'Contact',
      url: '/contact',
      active: 'nested-url',
    },
  ],
};