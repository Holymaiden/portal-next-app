"use client";

import React, { FC, ReactNode, useContext } from "react";
import classNames from "classnames";
import Content from "@/common/components/layouts/Content/Content";
import WrapperOverlay from "./WrapperOverlay";
import ThemeContext from "@/common/context/themeContext";
import Footer from "@/common/components/layouts/Dashboard/Footer/Footer";
import Header from "@/common/components/layouts/Dashboard/Header/Header";

interface WrapperDashboardContainerProps {
  children: ReactNode;
  className?: string;
}
export const WrapperContainer: FC<WrapperDashboardContainerProps> = ({
  children,
  className,
  ...props
}) => {
  const { rightPanel } = useContext(ThemeContext);
  return (
    <div
      className={classNames(
        "wrapper",
        { "wrapper-right-panel-active": rightPanel },
        className
      )}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </div>
  );
};

interface WrapperDashboard {
  children: ReactNode;
}
const WrapperDashboard: FC<WrapperDashboard> = ({ children }) => {
  return (
    <>
      <WrapperContainer>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </WrapperContainer>
      <WrapperOverlay />
    </>
  );
};

export default WrapperDashboard;
