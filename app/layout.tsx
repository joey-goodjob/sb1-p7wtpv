import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Body Roundness Index (BRI) Calculator | 精准评估您的健康状况',
  description: '使用我们的Body Roundness Index (BRI) Calculator进行快速、准确的健康评估。获取个性化建议，追踪进展，改善您的整体健康状况。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}