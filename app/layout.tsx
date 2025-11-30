import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "./providers";
import { ChatProvider } from "./lib/chat-store";
import { Toaster } from "../components/ui/toaster";

export const metadata: Metadata = {
  title: "Hinex Business - Luxury Real Estate & Lifestyle",
  description:
    "Experience luxury living with Hinex Business - seven worlds of excellence from dream homes to high fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans min-h-screen flex flex-col">
        <Providers>
          <ChatProvider>
            <div>{children}</div>

            <Toaster />
          </ChatProvider>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
