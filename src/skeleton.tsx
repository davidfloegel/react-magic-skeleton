import React, { useState, useRef, useLayoutEffect, useContext } from "react";
import styled, { css, keyframes } from "styled-components";

/**
 * TODO
 * - recalculate skeleton when dom changes
 * - animate the content appearing
 */

export const SkeletonContext = React.createContext({
  isLoading: false,
});

const Wrapper = styled.div<{ fadeIn?: boolean }>`
  ${({ fadeIn }) => css`
    ${fadeIn &&
    css`
      animation: ${fadeInAnimation} 5s;
    `}
  `}
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
        background-position: 0% 0%;
  }
  100% {
        background-position: -135% 0%;
  }
`;

const Rect = styled.div<{ fill?: boolean }>`
  ${({ fill }) => css`
    background: ${fill ? "#ccc" : "transparent"};
    width: 100px;
    height: 10px;
    border-radius: 2px;

    background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
    background-size: 400% 400%;
    animation: ${pulse} 1.2s ease-in-out infinite;
  `}
`;

// TODO type this any
const useDimensions = (elementRef: any) => {
  const [dim, setDim] = useState({
    hasMeasured: false,
    dimensions: [{ fill: true, width: 0, height: 0 }],
  });

  useLayoutEffect(() => {
    if (elementRef && elementRef.current) {
      const childNodes = [...elementRef.current.childNodes];

      const dimensions = childNodes.map((node, i) => {
        const { width, height } =
          elementRef.current.childNodes[i].getBoundingClientRect();

        // assume the child node is always the first
        const computed = window.getComputedStyle(childNodes[i]);

        let displayProps = {};

        if (computed.display !== "inline") {
          displayProps = {
            display: computed.display,
          };

          // add vertical-align to avoid layout shift.
          // todo check for other display options?
          if (
            computed.display === "inline-block" ||
            computed.display.includes("flex")
          ) {
            displayProps = {
              ...displayProps,
              verticalAlign: "top",
            };
          }
        }

        const radius = parseFloat(computed.borderRadius)
          ? computed.borderRadius
          : undefined;

        return {
          fill: node.dataset.skeletonFill === "false" ? false : true,
          width,
          height,
          margin: computed.margin,
          padding: computed.padding,
          borderRadius: radius,
          ...displayProps,
        };
      });

      setDim({
        hasMeasured: true,

        dimensions,
      });
    }
  }, [elementRef]);

  return dim;
};

interface SkeletonProps {
  isLoading?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  children: defaultChildren,
  isLoading: customLoading,
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
        return <Rect key={i} style={rest} fill={fill} />;
      });
    }

    return children;
  };

  return (
    <>
      <Wrapper ref={elementRef as any}>{renderContent()}</Wrapper>
    </>
  );
};

