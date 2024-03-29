import type { Metadata } from 'next';

import { ThemeContextProvider, UsersContextProvider } from '@/hooks';
import './global.css';

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
        <ThemeContextProvider>
          <UsersContextProvider>{children}</UsersContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
