import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import { ThemeContextProvider } from '@/hooks/useTheme';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Users List',
  description: 'Project for list users from a mocked api',
  icons: {
    icon: ['./favicon.ico', 'image/x-icon'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
