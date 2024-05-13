import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chat with doctor app',
  description: 'You can chat with a doctor online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
