import type { Metadata } from "next";
import "./globals.scss";

import { getOS } from "@/common/helpers/helpers";
import { AuthContextProvider } from "@/common/context/authContext";
import { ThemeContextProvider } from "@/common/context/themeContext";
import ThemeProvider from "./ThemeProv";
import App from "@/common/components/layouts/App/App";

export const metadata: Metadata = {
  title: "Portal Property",
  description: "Portal Property",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  getOS();

  return (
    <html lang="en">
      <body className="modern-design subheader-enabled">
        <AuthContextProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <App>{children}</App>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
