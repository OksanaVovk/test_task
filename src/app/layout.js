"use client";
import "./globals.css";
import { Providers } from "@/redux/posts/Providers";
import Header from "../components/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, useEffect, useMemo } from "react";

export default function RootLayout({ children }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("themeMode");
      if (savedMode) {
        setMode(savedMode); // Якщо в localStorage є збережений режим, встановлюємо його
      }
    }
  }, []);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (mode === "light" || mode === "dark")
    ) {
      localStorage.setItem("themeMode", mode); // Зберігаємо обраний режим у localStorage
    }
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#2196f3",
          },
        },
      }),
    [mode]
  );

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
