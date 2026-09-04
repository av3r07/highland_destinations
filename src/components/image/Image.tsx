import cx from "classnames";

import { Imageprops } from "./types";

export const Image = (props: Imageprops): React.ReactNode => {
  const { className, src, alt } = props;

  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={cx("w-auto h-auto", className)}
    />
  );
};
