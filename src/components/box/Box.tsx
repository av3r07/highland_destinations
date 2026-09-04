import { BoxProps } from "./types";

export const Box = (props: BoxProps): React.ReactNode => {
  const { className, children } = props;
  return <div className={className}>{children}</div>;
};
