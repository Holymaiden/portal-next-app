import { Metadata, NextPage } from "next";

import PageWrapper from "@/common/components/layouts/PageWrapper/PageWrapper";
import DashboardModules from "@/modules/dashboard/components/Page";

const PAGE_TITLE = "Dashboard";
const PAGE_DESCRIPTION =
  "Dashboard for your property. View your property overview and manage your property. View your property overview and manage your property. View your property overview and manage your property.";

export const metadata: Metadata = {
  title: `${PAGE_TITLE} | Portal Property`,
  description: PAGE_DESCRIPTION,
};

const Dashboard: NextPage = () => {
  return (
    <PageWrapper>
      <DashboardModules />
    </PageWrapper>
  );
};

export default Dashboard;
