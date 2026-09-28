import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";





export const metadata: Metadata = {
  title: "ByteSpace",
  description: "Created By ByteSpace developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full")}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
