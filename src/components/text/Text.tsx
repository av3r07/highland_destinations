import cx from "classnames";

import { TextProps } from "./types";

import { TEXT_VARIANTS } from "./constants";

export const Text = (props: TextProps): React.ReactNode => {
  const { variant, className, children } = props;
  switch (variant) {
    case TEXT_VARIANTS.XS:
      return <p className={cx("font-size-10", className)}>{children}</p>;
    case TEXT_VARIANTS.S:
      return <p className={cx("font-size-12", className)}>{children}</p>;
    case TEXT_VARIANTS.M:
      return <p className={cx("font-size-14", className)}>{children}</p>;
    case TEXT_VARIANTS.L:
      return <p className={cx("font-size-16", className)}>{children}</p>;
    case TEXT_VARIANTS.XL:
      return <p className={cx("font-size-18", className)}>{children}</p>;
    case TEXT_VARIANTS["2XL"]:
      return <p className={cx("font-size-20", className)}>{children}</p>;
    case TEXT_VARIANTS["3XL"]:
      return <p className={cx("font-size-24", className)}>{children}</p>;
    default:
      return <p className={cx("font-size-14", className)}>{children}</p>;
  }
};
