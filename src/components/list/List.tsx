import cx from "classnames";

import { ListProps } from "./types";

export const List = (props: ListProps): React.ReactNode => {
  const { className, children } = props;
  return (
    <ul className={cx("d-flex flex-column gap-2", className)}>{children}</ul>
  );
};
