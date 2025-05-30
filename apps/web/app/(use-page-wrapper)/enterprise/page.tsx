import { _generateMetadata } from "app/_utils";

import EnterprisePage from "@components/EnterprisePage";

export const generateMetadata = async () =>
  await _generateMetadata(
    (t) => t("create_your_org"),
    (t) => t("create_your_org_description")
  );

const ServerPageWrapper = async () => {
  return <EnterprisePage />;
};

export default ServerPageWrapper;
