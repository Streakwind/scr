'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

export function ThemeLogo() {
  const { resolvedTheme } = useTheme();

  return resolvedTheme === 'light' ? (
    <Image
      src="/lightmode.png"
      alt="SeattleCR Logo"
      width={24}
      height={24}
    />
  ) : (
    <Image
      src="/darkmode.png"
      alt="SeattleCR Logo"
      width={24}
      height={24}
    />
  );
}
