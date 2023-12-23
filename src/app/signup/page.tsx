import { Metadata, NextPage } from "next";

import PageWrapper from "@/common/components/layouts/PageWrapper/PageWrapper";
import SignUpModule from "@/modules/signup";

const PAGE_TITLE = "Sign Up";
const PAGE_DESCRIPTION =
  "Portal Property is a property management system that helps you manage your properties and tenants.";

export const metadata: Metadata = {
  title: `${PAGE_TITLE} | Portal Property`,
  description: PAGE_DESCRIPTION,
};

const SignUp: NextPage = () => {
  return (
    <PageWrapper isProtected={false} className="bg-light">
      <SignUpModule />
    </PageWrapper>
  );
};

export default SignUp;
