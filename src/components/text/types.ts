import { TEXT_VARIANTS } from "./constants";

export type TextProps = {
  variant?: TEXT_VARIANTS;
  className?: string;
  children?: React.ReactNode;
};
