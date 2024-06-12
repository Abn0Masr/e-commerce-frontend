"use client";

import React, { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { useQuery } from "@tanstack/react-query";
import { cart } from "@/redux/slices/cartSlice";
import { currentUser } from "@/redux/slices/authSlice";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(cart());
  }, [dispatch]);

  useQuery({
    queryKey: ["user"],
    queryFn: () => dispatch(currentUser()).unwrap(),
    gcTime: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
    retryOnMount: false,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return <>{children}</>;
};

export default UserProvider;
