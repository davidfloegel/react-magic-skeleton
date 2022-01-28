import React from "react";
import "./block.css";

interface LoadingBlockProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  fill?: boolean;
}

export const LoadingBlock: React.FC<LoadingBlockProps> = ({
  children,
  fill,
  ...rest
}) => (
  <div
    className={`react-magic-skeleton-loading-block ${
      !fill ? "react-magic-skeleton-loading-block-transpsarent" : null
    }`}
    {...rest}
  >
    {children}
  </div>
);
