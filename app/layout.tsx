import { Container } from "@components/container";

import type { Metadata } from "next";

import "@styles/global.scss";

export const metadata: Metadata = {
  title: "Highland Destinations",
  description: "Explore Highland destinations.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
