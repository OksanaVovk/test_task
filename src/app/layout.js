import "./globals.css";
import { Providers } from "@/redux/posts/Providers";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
