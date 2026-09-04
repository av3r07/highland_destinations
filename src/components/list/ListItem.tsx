import cx from "classnames";
import { ListItemProps } from "./types";

export const ListItem = (props: ListItemProps): React.ReactNode => {
  const { className, children } = props;
  return <li className={cx("w-full h-full", className)}>{children}</li>;
};
