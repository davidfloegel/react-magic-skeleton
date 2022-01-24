import { useState, useLayoutEffect } from "react";

export const useDimensions = (elementRef: any) => {
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
