import clsx from "clsx";
import React, { useMemo } from "react";

interface FlexContainerProps extends React.HTMLAttributes<HTMLElement> {
  component?: React.ElementType;
  flexDirection?: "row" | "col";
  flex?: 0 | "0A" | 1 | "1A" | "none";
  justify?: "center" | "start" | "end" | "between";
  align?: React.CSSProperties["alignItems"];
  fw?: boolean;
  fh?: boolean;
}

const FlexContainer: React.FC<FlexContainerProps> = ({
  children,
  component: Component = "div",
  flexDirection = "row",
  flex = "none",
  justify = "start",
  align = "start",
  className,
  fw = false,
  fh = false,
  ...props
}) => {
  const classes = useMemo(
    () =>
      clsx(
        `FlexContainer-base Flex-${flexDirection} Flex-${flex} FlexAIJC-${align}-${justify}`,
        { fw, fh },
        className
      ),
    [flexDirection, align, justify, flex, fw, fh, className]
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default FlexContainer;
