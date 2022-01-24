import React from "react";
import { SkeletonContextValues, SkeletonProviderProps } from "./types";

export const SkeletonContext = React.createContext<SkeletonContextValues>({
  isLoading: false,
});

export const SkeletonProvider: React.FC<SkeletonProviderProps> = ({
  isLoading,
  children,
}) => (
  <SkeletonContext.Provider value={{ isLoading }}>
    {children}
  </SkeletonContext.Provider>
);
