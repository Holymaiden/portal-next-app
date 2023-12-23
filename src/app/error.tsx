"use client";

import Button from "@/common/components/elements/bootstrap/Button";
import Page from "@/common/components/layouts/Page/Page";
import PageWrapper from "@/common/components/layouts/PageWrapper/PageWrapper";
import { Metadata } from "next";

const PAGE_TITLE = "Error";
const PAGE_DESCRIPTION = "Sorry, something went wrong. Please try again later.";

export const metadata: Metadata = {
  title: `${PAGE_TITLE} | Portal Property`,
  description: PAGE_DESCRIPTION,
};

const Error = () => {
  return (
    <PageWrapper>
      <Page>
        <div className="row d-flex align-items-center h-100">
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <div
              className="text-primary fw-bold"
              style={{ fontSize: "calc(3rem + 3vw)" }}
            >
              404
            </div>
            <div
              className="text-dark fw-bold"
              style={{ fontSize: "calc(1.5rem + 1.5vw)" }}
            >
              Page not found
            </div>
          </div>
          <div className="col-12 d-flex align-items-baseline justify-content-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/scene4.png"
              alt="Humans"
              style={{ height: "50vh" }}
            />
          </div>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <Button
              className="px-5 py-3"
              color="primary"
              isLight
              icon="HolidayVillage"
              tag="a"
              href="/"
            >
              Homepage
            </Button>
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
};

export default Error;
