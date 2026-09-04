import { LAYOUT_CONSTANTS } from "./contants";

export type LayoutProps = {
  variant: LAYOUT_CONSTANTS;
  isWrappedConent?: boolean;
  sectionClassName?: string;
  wrapperClassName?: string;
  children?: React.ReactNode;
};
