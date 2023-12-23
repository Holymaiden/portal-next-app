"use client";

import React, { useContext, useState } from "react";
import classNames from "classnames";
import Brand from "@/common/components/layouts/Brand/Brand";
import Navigation, {
  NavigationLine,
} from "@/common/components/layouts/Navigation/Navigation";
import User from "@/common/components/layouts/User/User";
import {
  componentPagesMenu,
  dashboardPagesMenu,
  demoPagesMenu,
  pageLayoutTypesPagesMenu,
} from "@/common/menu/menu";
import ThemeContext from "@/common/context/themeContext";
import Card, { CardBody } from "@/common/components/elements/bootstrap/Card";

import Icon from "@/common/components/elements/icon/Icon";
import Button from "@/common/components/elements/bootstrap/Button";
import useDarkMode from "@/common/hooks/useDarkMode";
import Aside, {
  AsideBody,
  AsideFoot,
  AsideHead,
} from "@/common/components/layouts/Aside/Aside";

const Sidebar = () => {
  const { asideStatus, setAsideStatus } = useContext(ThemeContext);

  const [doc, setDoc] = useState(
    (typeof window !== "undefined" &&
      localStorage.getItem("portal_asideDocStatus") === "true") ||
      false
  );

  const { darkModeStatus } = useDarkMode();

  return (
    <Aside>
      <AsideHead>
        <Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
      </AsideHead>
      <AsideBody>
        <Navigation menu={dashboardPagesMenu} id="aside-dashboard" />
        {!doc && (
          <>
            <NavigationLine />
            <Navigation menu={demoPagesMenu} id="aside-demo-pages" />
            <NavigationLine />
            <Navigation menu={pageLayoutTypesPagesMenu} id="aside-menu" />
          </>
        )}

        {doc && (
          <>
            <NavigationLine />
            <Navigation menu={componentPagesMenu} id="aside-menu-two" />
            <NavigationLine />
          </>
        )}

        {asideStatus && doc && (
          <Card className="m-3 ">
            <CardBody className="pt-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/hand.png" alt="Hand" width={130} height={130} />
              <p
                className={classNames("h4", {
                  "text-dark": !darkModeStatus,
                  "text-light": darkModeStatus,
                })}
              >
                Everything is ready!
              </p>
              <Button
                color="info"
                isLight
                className="w-100"
                onClick={() => {
                  localStorage.setItem("portal_asideDocStatus", "false");
                  setDoc(false);
                }}
              >
                Demo Pages
              </Button>
            </CardBody>
          </Card>
        )}
      </AsideBody>
      <AsideFoot>
        <nav aria-label="aside-bottom-menu">
          <div className="navigation">
            <div
              role="presentation"
              className="navigation-item cursor-pointer"
              onClick={() => {
                localStorage.setItem("portal_asideDocStatus", String(!doc));
                setDoc(!doc);
              }}
              data-tour="documentation"
            >
              <span className="navigation-link navigation-link-pill">
                <span className="navigation-link-info">
                  <Icon
                    icon={doc ? "ToggleOn" : "ToggleOff"}
                    color={doc ? "success" : undefined}
                    className="navigation-icon"
                  />
                  <span className="navigation-text">Documentation</span>
                </span>
                <span className="navigation-link-extra">
                  <Icon
                    icon="Circle"
                    className={classNames(
                      "navigation-notification",
                      "text-success",
                      "animate__animated animate__heartBeat animate__infinite animate__slower"
                    )}
                  />
                </span>
              </span>
            </div>
          </div>
        </nav>
        <User />
      </AsideFoot>
    </Aside>
  );
};

export default Sidebar;
