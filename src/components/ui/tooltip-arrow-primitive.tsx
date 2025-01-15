import React from "react";
import { Arrow } from "@radix-ui/react-tooltip";

const TooltipArrowPrimitive = () => {
  const arrowRef = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    const spanArrow = arrowRef.current?.parentElement;

    const observer = new MutationObserver(() => {
      if (!spanArrow) return;

      const style = window.getComputedStyle(spanArrow);

      // Get our custom tooltip component by its id
      const tooltipArrow = document.getElementById("tooltip-arrow");

      // Assign the left value as the style attribute
      tooltipArrow?.setAttribute("style", `left: ${style.left};`);
    });

    if (spanArrow) {
      observer.observe(spanArrow, {
        attributes: true, // Observe changes to attributes
        attributeFilter: ["style"], // Only look for changes to the style attribute
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return <Arrow ref={arrowRef} id="primitive-arrow" className="opacity-0" />;
};

export default TooltipArrowPrimitive;
