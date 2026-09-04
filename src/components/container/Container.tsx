import cx from "classnames";

import { ContainerProps } from "./types";

export const Container = (props: ContainerProps): React.ReactNode => {
  const { className, children } = props;
  return (
    <main
      className={cx("w-full overflow-x-hidden d-flex flex-column", className)}
    >
      {children}
    </main>
  );
};
