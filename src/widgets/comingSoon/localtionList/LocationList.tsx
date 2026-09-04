import { memo, useMemo } from "react";
import cx from "classnames";

import { Box } from "@components/box";
import { List } from "@components/list";
import { ListItem } from "@components/list";
import { Image } from "@components/image";
import { Heading, HEADING_VARIANTS } from "@components/heading";
import { Text } from "@//components/text";

import { LocationListDataProps } from "../types";

import { LOCATION_LIST_DATA } from "../constants";

import styles from "./styles.module.scss";

export const LocationList = memo((): React.ReactNode => {
  const locationListData: LocationListDataProps[] = useMemo(
    () => LOCATION_LIST_DATA,
    [LOCATION_LIST_DATA],
  );

  return (
    <Box className="d-flex flex-column gap-5 justify-center align-center w-full">
      <Box className="w-full d-flex flex-column gap-1">
        <Heading
          variant={HEADING_VARIANTS.H6}
          className="text-left w-full font-weight-400 text-primary"
        >
          We handle the destinations
        </Heading>
        <Heading
          variant={HEADING_VARIANTS.H6}
          className="text-left w-full font-weight-600 text-primary"
        >
          You deliver the memories.
        </Heading>
        <Box className={cx("bg-gold m-t-1", styles.borderBottom)} />
      </Box>

      <List className={cx("d-grid w-full", styles.locationList)}>
        {locationListData.map(({ id, image, name }) => (
          <ListItem
            key={id}
            className={cx("w-full position-relative", styles.locationListItem)}
          >
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-fit-cover position-relative"
            />
            <Box
              className={cx(
                "position-absolute z-fixed listItemTextBox w-full h-full d-flex flex-column align-center justify-center p-4",
                styles.listItemTextBox,
              )}
            >
              <Text
                className={cx(
                  "font-size-36 text-center w-max text-white h-max text-uppercase text-primary",
                  styles.listItemText,
                )}
              >
                {name}
              </Text>
              <Box className={cx("bg-red m-t-1", styles.borderBottom)} />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
});
