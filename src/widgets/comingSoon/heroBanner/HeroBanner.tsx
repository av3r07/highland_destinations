import cx from "classnames";

import { Box } from "@components/box";
import { Image } from "@components/image";
import { Link } from "@//components/Link";

import Phone from "@icons/Phone";
import Mail from "@icons/Mail";

import { CONTACT_INFO } from "../constants";

import styles from "./styles.module.scss";

export const HeroBanner = (): React.ReactNode => {
  return (
    <Box
      className={cx(
        "d-flex flex-column align-center justify-between gap-4",
        styles.herobannerBox,
      )}
    >
      <Image
        src="/images/logo.png"
        alt="Logo"
        className={cx("w-max-content", styles.heroBannerImage)}
      />
      <Box className="d-flex flex-column align-center justify-between gap-1">
        <Box
          className={cx(
            "d-flex align-center gap-1 w-full",
            styles.contactInfoBox,
          )}
        >
          <Box
            className={cx(
              "d-flex align-center justify-center",
              styles.circledIconBox,
            )}
          >
            <Phone />
          </Box>
          <Link
            className="font-size-16 font-weight-500 text-primary"
            href={CONTACT_INFO.callAt}
            openInNewTab
          >
            {CONTACT_INFO.phoneNumber}
          </Link>
        </Box>
        <Box
          className={cx(
            "d-flex align-center gap-1 w-full",
            styles.contactInfoBox,
          )}
        >
          <Box
            className={cx(
              "d-flex align-center justify-center",
              styles.circledIconBox,
            )}
          >
            <Mail />
          </Box>
          <Link
            className="font-size-16 font-weight-500 text-primary"
            href={CONTACT_INFO.mailTo}
          >
            {CONTACT_INFO.email}
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
