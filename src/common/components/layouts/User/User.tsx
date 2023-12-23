import React, { useContext, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useWindowSize } from "react-use";
import { demoPagesMenu } from "@/common/menu/menu";
import useDarkMode from "@/common/hooks/useDarkMode";
import Collapse from "@/common/components/elements/bootstrap/Collapse";
import { NavigationLine } from "@/common/components/layouts/Navigation/Navigation";
import Icon from "@/common/components/elements/icon/Icon";
import useNavigationItemHandle from "@/common/hooks/useNavigationItemHandle";
import AuthContext from "@/common/context/authContext";

import ThemeContext from "@/common/context/themeContext";

const User = () => {
  const { width } = useWindowSize();
  const { setAsideStatus } = useContext(ThemeContext);
  const { userData, setUser } = useContext(AuthContext);

  const router = useRouter();

  const handleItem = useNavigationItemHandle();
  const { darkModeStatus, setDarkModeStatus } = useDarkMode();

  const [collapseStatus, setCollapseStatus] = useState<boolean>(false);

  return (
    <>
      <div
        className={classNames("user", { open: collapseStatus })}
        role="presentation"
        onClick={() => setCollapseStatus(!collapseStatus)}
      >
        <div className="user-avatar">
          {!!userData?.src && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={userData?.src as string}
              alt="Avatar"
              width={128}
              height={128}
            />
          )}
        </div>
        <div className="user-info">
          <div className="user-name d-flex align-items-center">
            {`${userData?.name} ${userData?.surname}`}
            <Icon icon="Verified" className="ms-1" color="info" />
          </div>
          <div className="user-sub-title">{userData?.position}</div>
        </div>
      </div>

      <Collapse isOpen={collapseStatus} className="user-menu">
        <nav aria-label="aside-bottom-user-menu">
          <div className="navigation">
            <div
              role="presentation"
              className="navigation-item cursor-pointer"
              onClick={() =>
                router.push(
                  `/`,
                  // @ts-ignore
                  handleItem()
                )
              }
            >
              <span className="navigation-link navigation-link-pill">
                <span className="navigation-link-info">
                  <Icon icon="AccountBox" className="navigation-icon" />
                  <span className="navigation-text">Profile</span>
                </span>
              </span>
            </div>
            <div
              role="presentation"
              className="navigation-item cursor-pointer"
              onClick={() => {
                setDarkModeStatus(!darkModeStatus);
                handleItem();
              }}
            >
              <span className="navigation-link navigation-link-pill">
                <span className="navigation-link-info">
                  <Icon
                    icon={darkModeStatus ? "DarkMode" : "LightMode"}
                    color={darkModeStatus ? "info" : "warning"}
                    className="navigation-icon"
                  />
                  <span className="navigation-text">
                    {darkModeStatus ? "menu:DarkMode" : "menu:LightMode"}
                  </span>
                </span>
              </span>
            </div>
          </div>
        </nav>
        <NavigationLine />
        <nav aria-label="aside-bottom-user-menu-2">
          <div className="navigation">
            <div
              role="presentation"
              className="navigation-item cursor-pointer"
              onClick={() => {
                if (setUser) {
                  setUser("");
                }
                if (
                  width < Number(process.env.NEXT_PUBLIC_MOBILE_BREAKPOINT_SIZE)
                ) {
                  setAsideStatus(false);
                }
                router.push(`/login`);
              }}
            >
              <span className="navigation-link navigation-link-pill">
                <span className="navigation-link-info">
                  <Icon icon="Logout" className="navigation-icon" />
                  <span className="navigation-text">Logout</span>
                </span>
              </span>
            </div>
          </div>
        </nav>
      </Collapse>
    </>
  );
};

export default User;
