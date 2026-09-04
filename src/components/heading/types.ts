import { HEADING_VARIANTS } from "./constants";

export type HeadingProps = {
  variant: HEADING_VARIANTS;
  className?: string;
  children?: React.ReactNode;
};
