import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoiceLog – AI Summaries of Discord Voice Calls",
  description: "Records Discord voice channels and generates AI meeting summaries with action items for engineering teams and community managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="499a8443-04f3-4177-aa2f-2a00df815f8b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
