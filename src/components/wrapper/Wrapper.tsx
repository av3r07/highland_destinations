import cx from "classnames";

import { Box } from "../box";

import { WrapperProps } from "./types";

export const Wrapper = (props: WrapperProps): React.ReactNode => {
  const { className, children } = props;
  return (
    <Box className={cx("w-full max-w-3xl m-r-auto m-l-auto", className)}>
      {children}
    </Box>
  );
};
