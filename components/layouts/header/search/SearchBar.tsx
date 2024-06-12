"use client";

import { useAppSelector } from "@/redux/hooks";
import { cn } from "@/utils/cn";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { KeyboardEvent, useEffect, useRef, useState } from "react";

const SearchBar = () => {
  const t = useTranslations();

  const name = useAppSelector((state) => state.auth.user?.profile.userName);

  const containerRef = useRef<HTMLDivElement>(null);

  const [fouces, setFouces] = useState<boolean>(false);
  const [style, setStyle] = useState<React.CSSProperties | null>(null);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [res, setRes] = useState<[] | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const handleStyle = () => {
      const { width, left, top } = container.getBoundingClientRect();
      setStyle({
        position: "fixed",
        width: `${width}px`,
        left: `${left}px`,
        top: `calc(${top}px + 40px`,
        zIndex: 10,
      });
    };

    handleStyle();

    window.addEventListener("resize", handleStyle);
    return () => window.removeEventListener("resize", handleStyle);
  }, [fouces]);

  const handleOpen = () => setFouces(true);
  const handleClose = () => setFouces(false);

  const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, 100);
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {fouces && <div className="fixed inset-0 z-10" onClick={handleClose} />}
      <div
        ref={containerRef}
        className={cn(
          "FlexContainer-base Flex-1 Flex-row md-fh h-[40px] bg-background mx-4 ",
          fouces ? "rounded-t-md" : "rounded-md"
        )}
      >
        <input
          type="text"
          className="w-full h-full bg-transparent outline-none border-none px-2 z-10 rounded-[inherit]"
          onFocus={handleOpen}
          onKeyUp={handleSearch}
          placeholder={t("Components.searchBar.placeholder", { name })}
        />
      </div>
      {fouces && style && (
        <div
          style={style}
          className={cn(
            "FlexContainer-base FlexAIJC-start-center md-fh p-4 bg-white drop-shadow-md rounded-b-md"
          )}
        >
          {!res && !loading && (
            <Typography variant="h6" className="text-black/50">
              {t("Globals.noResult")}
            </Typography>
          )}
          {loading && (
            <Typography variant="h6" className="text-black/50">
              {t("Globals.loading")}
            </Typography>
          )}
        </div>
      )}
    </>
  );
};

export default SearchBar;
