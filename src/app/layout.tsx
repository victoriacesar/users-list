import type { Metadata } from 'next';

import { ThemeContextProvider } from '@/hooks/useTheme';

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
      <body>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
