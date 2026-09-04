import cx from "classnames";

import { SectionProps } from "./types";

export const Section = (props: SectionProps): React.ReactNode => {
  const { className, children } = props;
  return <section className={cx("w-full p-6", className)}>{children}</section>;
};
