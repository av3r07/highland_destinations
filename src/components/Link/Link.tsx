import { useMemo } from "react";

import { LinkProps } from "./types";

import { TARGET } from "./contants";

export const Link = (props: LinkProps): React.ReactNode => {
  const { className, openInNewTab, children, href } = props;

  const target = useMemo(
    () => (openInNewTab ? TARGET.BLANK : TARGET.SELF),
    [openInNewTab],
  );

  return (
    <a className={className} target={target} href={href}>
      {children}
    </a>
  );
};
