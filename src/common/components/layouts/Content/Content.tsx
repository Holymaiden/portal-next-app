import React, { FC, ReactNode } from "react";
import Card, { CardBody } from "@/common/components/elements/bootstrap/Card";
import PageWrapper from "@/common/components/layouts/PageWrapper/PageWrapper";
import Page from "@/common/components/layouts/Page/Page";
import SubHeader from "@/common/components/layouts/SubHeader/SubHeader";

const LOADING = (
  <PageWrapper>
    <SubHeader>
      <div />
    </SubHeader>
    <Page>
      <div className="row h-100">
        <div className="col-lg-6">
          <Card stretch>
            <CardBody>
              <div />
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card stretch="semi">
            <CardBody>
              <div />
            </CardBody>
          </Card>
          <Card stretch="semi">
            <CardBody>
              <div />
            </CardBody>
          </Card>
        </div>
      </div>
    </Page>
  </PageWrapper>
);

interface IContent {
  children: ReactNode;
}
const Content: FC<IContent> = ({ children }) => {
  return <main className="content">{children}</main>;
};

export default Content;
