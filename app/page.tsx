import { Layout, LAYOUT_CONSTANTS } from "@components/layout";
import { HeroBanner } from "@widgets/comingSoon/heroBanner";
import { LocationList } from "@widgets/comingSoon/localtionList";

export default function Home() {
  return (
    <>
      <Layout isWrappedConent variant={LAYOUT_CONSTANTS.FULL}>
        <HeroBanner />
      </Layout>
      <Layout
        isWrappedConent
        variant={LAYOUT_CONSTANTS.FULL}
        sectionClassName="p-x-6 p-y-8"
      >
        <LocationList />
      </Layout>
    </>
  );
}
