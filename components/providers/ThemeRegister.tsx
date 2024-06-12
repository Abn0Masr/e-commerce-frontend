"use client";

import React, { useMemo } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useLocale } from "next-intl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { colors } from "@/theme";

const ThemeRegister = ({ children }: { children: React.ReactNode }) => {
  const locale = useLocale();

  const cacheRtl = useMemo(
    () =>
      createCache({
        key: "muirtl",
        stylisPlugins: [rtlPlugin],
        prepend: true,
      }),
    []
  );

  const cacheLtr = useMemo(
    () =>
      createCache({
        key: "muiltr",
        stylisPlugins: [],
        prepend: true,
      }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        direction: locale === "ar" ? "rtl" : "ltr",
        typography: {
          fontFamily: "inherit",
          allVariants: {
            textTransform: "none",
          },
        },
        components: {
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                "& fieldset": {
                  borderColor: colors.secondary,
                },
                "&:hover": {
                  borderColor: colors.secondary_dark,
                },
                unicodeBidi: "plaintext",
              },
              input: {
                unicodeBidi: "plaintext",
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                backgroundColor: colors.secondary,
                color: colors.white,
                "&:hover": { backgroundColor: colors.secondary_light },
                unicodeBidi: "plaintext",
                textTransform: "none",
                fontFamily: "inherit",
              },
            },
          },
        },
      }),
    [locale]
  );

  return (
    <AppRouterCacheProvider options={{ key: "css" }}>
      <CacheProvider value={locale === "ar" ? cacheRtl : cacheLtr}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeRegister;
