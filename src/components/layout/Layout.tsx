import { useMemo } from "react";
import cx from "classnames";

import { Section } from "@components/section";
import { Wrapper } from "@components/wrapper";

import { LayoutProps } from "./types";

import { LAYOUT_CONSTANTS } from "./contants";

import styles from "./styles.module.scss";

export const Layout = (props: LayoutProps): React.ReactNode => {
  const {
    variant,
    isWrappedConent,
    sectionClassName,
    wrapperClassName,
    children,
  } = props;

  const variantStyles = useMemo(() => {
    switch (variant) {
      case LAYOUT_CONSTANTS.FULL:
        return styles.gridFull;
      case LAYOUT_CONSTANTS.HALF:
        return styles.gridHalf;
      case LAYOUT_CONSTANTS.LEFT:
        return styles.gridLeft;
      case LAYOUT_CONSTANTS.RIGHT:
        return styles.gridRight;
      default:
        return styles.gridFull;
    }
  }, [variant]);

  if (isWrappedConent) {
    return (
      <Section className={sectionClassName}>
        <Wrapper className={cx(wrapperClassName, variantStyles)}>
          {children}
        </Wrapper>
      </Section>
    );
  }

  return (
    <Section className={cx(sectionClassName, variantStyles)}>
      {children}
    </Section>
  );
};
