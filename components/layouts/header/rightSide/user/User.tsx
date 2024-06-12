"use client";

import { useAppSelector } from "@/redux/hooks";
import { Skeleton, Typography } from "@mui/material";
import React from "react";
import Auth from "./Auth";
import FlexContainer from "@/components/ui/FlexContainer";

const User: React.FC = () => {
  const { isLoading, user } = useAppSelector((state) => state.auth);

  return (
    <>
      <FlexContainer className="lg-fh">
        {isLoading && <Skeleton width={40} height={20} />}
        {!isLoading && !user && <Auth />}
        {!isLoading && user && (
          <Typography sx={{ lineHeight: 1 }}>
            {user.profile.firstName}
          </Typography>
        )}
      </FlexContainer>
    </>
  );
};

export default User;
