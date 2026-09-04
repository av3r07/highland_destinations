import cx from "classnames";

import { HeadingProps } from "./types";

import { HEADING_VARIANTS } from "./constants";

export const Heading = (props: HeadingProps): React.ReactNode => {
  const { variant, className, children } = props;
  switch (variant) {
    case HEADING_VARIANTS.H1:
      return <h1 className={cx("font-size-64", className)}>{children}</h1>;
    case HEADING_VARIANTS.H2:
      return <h2 className={cx("font-size-56", className)}>{children}</h2>;
    case HEADING_VARIANTS.H3:
      return <h3 className={cx("font-size-48", className)}>{children}</h3>;
    case HEADING_VARIANTS.H4:
      return <h4 className={cx("font-size-40", className)}>{children}</h4>;
    case HEADING_VARIANTS.H5:
      return <h5 className={cx("font-size-32", className)}>{children}</h5>;
    case HEADING_VARIANTS.H6:
      return <h6 className={cx("font-size-24", className)}>{children}</h6>;
  }
};
