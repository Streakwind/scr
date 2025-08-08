import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'SeattleCR',
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