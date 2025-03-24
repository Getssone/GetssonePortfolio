"use client";

import React, { forwardRef } from "react";
import { Flex } from ".";
import styles from "./Card.module.scss";

interface CardProps extends React.ComponentProps<typeof Flex> {
  children?: React.ReactNode;
  hover?: boolean;
}
const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, style, className, hover, ...rest }, ref) => {
    return (
      <Flex
        ref={ref}
        background="surface"
        transition="macro-medium"
        border="neutral-medium"
        cursor="interactive"
        className={`${hover ? styles.card : ''}`}

        {...rest}
      >
        {children}
      </Flex>
    );
  },
);

Card.displayName = "Card";
export { Card };
