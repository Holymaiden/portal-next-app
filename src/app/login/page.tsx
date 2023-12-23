import { Metadata, NextPage } from "next";

import PageWrapper from "@/common/components/layouts/PageWrapper/PageWrapper";
import LoginModule from "@/modules/login";

const PAGE_TITLE = "Login";
const PAGE_DESCRIPTION =
  "Login to your Portal Property account. Create an account if you don't have one.";

export const metadata: Metadata = {
  title: `${PAGE_TITLE} | Portal Property`,
  description: PAGE_DESCRIPTION,
};

const Login: NextPage = () => {
  return (
    <PageWrapper isProtected={false} className="bg-dark">
      <LoginModule />
    </PageWrapper>
  );
};

export default Login;
