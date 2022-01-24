import React, { useRef, useContext } from "react";
import { SkeletonContext } from "./context";
import { useDimensions } from "./use-dimensions";
import { LoadingBlock } from "./block";
import { SkeletonProps } from "./types";

export const Skeleton: React.FC<SkeletonProps> = ({
  children: defaultChildren,
  isLoading: customLoading = false,
}) => {
  const skeletonCtx = useContext(SkeletonContext);
  const isLoading = skeletonCtx.isLoading || customLoading;
  const elementRef = useRef<HTMLElement | null>(null);

  const children = Array.isArray(defaultChildren)
    ? defaultChildren
    : [defaultChildren];

  const { hasMeasured, dimensions } = useDimensions(elementRef);

  const renderContent = () => {
    if (hasMeasured && isLoading) {
      return children.map((_, i) => {
        const { fill, ...rest } = dimensions[i];
        return <LoadingBlock key={i} style={rest} fill={fill} />;
      });
    }

    return children;
  };

  return <div ref={elementRef as any}>{renderContent()}</div>;
};
