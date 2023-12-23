"use client";

import Button from "@/common/components/elements/bootstrap/Button";
import Card, { CardBody } from "@/common/components/elements/bootstrap/Card";
import Page from "@/common/components/layouts/Page/Page";
import useDarkMode from "@/common/hooks/useDarkMode";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SignUpHeader from "./Header";
import Alert from "@/common/components/elements/bootstrap/Alert";
import USERS from "@/common/data/userDummyData";
import SignUpForm from "./Form";
import Logo from "@/common/components/elements/Logo";
import { useCallback } from "react";

const PageLogin = () => {
  const router = useRouter();

  const { darkModeStatus } = useDarkMode();

  const handleOnClick = useCallback(() => router.push("/"), [router]);

  return (
    <Page className="p-0">
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-xl-4 col-lg-6 col-md-8 shadow-3d-container">
          <Card className="shadow-3d-dark" data-tour="login-page">
            <CardBody>
              <div className="text-center my-5">
                <Link
                  href="/"
                  className={classNames(
                    "text-decoration-none  fw-bold display-2",
                    {
                      "text-dark": !darkModeStatus,
                      "text-light": darkModeStatus,
                    }
                  )}
                >
                  <Logo width={200} />
                </Link>
              </div>
              <div
                className={classNames("rounded-3", {
                  "bg-l10-dark": !darkModeStatus,
                  "bg-dark": darkModeStatus,
                })}
              >
                <div className="row row-cols-2 g-3 pb-3 px-3 mt-0">
                  <div className="col">
                    <Button
                      color={darkModeStatus ? "light" : "dark"}
                      isLight={true}
                      className="rounded-1 w-100"
                      size="lg"
                      onClick={() => {
                        router.push("/login");
                      }}
                    >
                      Login
                    </Button>
                  </div>
                  <div className="col">
                    <Button
                      color={darkModeStatus ? "light" : "dark"}
                      isLight={false}
                      className="rounded-1 w-100"
                      size="lg"
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>

              <SignUpHeader />

              <Alert isLight icon="Lock" isDismissible>
                <div className="row">
                  <div className="col-12">
                    <strong>Username:</strong> {USERS.JOHN.username}
                  </div>
                  <div className="col-12">
                    <strong>Password:</strong> {USERS.JOHN.password}
                  </div>
                </div>
              </Alert>

              <SignUpForm handleOnClick={handleOnClick} />
            </CardBody>
          </Card>
          <div className="text-center">
            <Link href="/" className="text-decoration-none me-3 link-dark">
              Privacy policy
            </Link>
            <Link
              href="/"
              className="link-light text-decoration-none link-dark"
            >
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default PageLogin;
