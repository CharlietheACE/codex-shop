import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "暖桌｜邻里小馆 · 时令厨房",
  description: "用当季食材和恰到好处的火候，做一桌让人想念的日常好味。",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
