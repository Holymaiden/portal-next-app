"use client";

import React, { FC, ReactNode, useContext } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Content from "@/common/components/layouts/Content/Content";
import WrapperOverlay from "./WrapperOverlay";
import ThemeContext from "@/common/context/themeContext";

interface IWrapperContainerProps {
  children: ReactNode;
  className?: string;
}
export const WrapperContainer: FC<IWrapperContainerProps> = ({
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

interface IWrapper {
  children: ReactNode;
}
const Wrapper: FC<IWrapper> = ({ children }) => {
  return (
    <>
      <WrapperContainer>
        <Content>{children}</Content>
      </WrapperContainer>
      <WrapperOverlay />
    </>
  );
};

export default Wrapper;
