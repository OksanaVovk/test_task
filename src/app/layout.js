"use client";
import "./globals.css";
import { Providers } from "@/redux/posts/Providers";
import Header from "../components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { getTheme } from "@/theme/theme";

export default function RootLayout({ children }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.style.setProperty("--background", "#0a0a0a");
      root.style.setProperty("--foreground", "#ededed");
    } else {
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#171717");
    }
  }, [mode]);

  const theme = getTheme(mode);

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Providers>
            <Header setMode={setMode} mode={mode} />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
