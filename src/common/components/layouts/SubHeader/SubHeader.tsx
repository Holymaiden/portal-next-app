"use client";

import React, { FC, ReactNode, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useMeasure } from "react-use";
import useRoot from "@/common/hooks/useRoot";

interface ISubHeaderLeftProps {
  children: ReactNode;
  className?: string;
}
export const SubHeaderLeft: FC<ISubHeaderLeftProps> = ({
  children,
  className = "portal-root",
}) => {
  return (
    <div className={classNames("subheader-left", "col-sm", className)}>
      {children}
    </div>
  );
};
SubHeaderLeft.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

interface ISubHeaderRightProps {
  children: ReactNode;
  className?: string;
}
export const SubHeaderRight: FC<ISubHeaderRightProps> = ({
  children,
  className = undefined,
}) => {
  return (
    <div className={classNames("subheader-right", "col-sm-auto", className)}>
      {children}
    </div>
  );
};
SubHeaderRight.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

interface ISubheaderSeparatorProps {
  className?: string;
}
export const SubheaderSeparator: FC<ISubheaderSeparatorProps> = ({
  className = undefined,
}) => {
  return <div className={classNames("subheader-separator", className)} />;
};
SubheaderSeparator.propTypes = {
  className: PropTypes.string,
};

export interface ISubHeaderProps {
  children: ReactNode;
  className?: string;
}
const SubHeader: FC<ISubHeaderProps> = ({
  children,
  className = undefined,
}) => {
  const [ref, { height }] = useMeasure<HTMLDivElement>();

  const root = useRoot();
  root?.style.setProperty("--subheader-height", `${height}px`);

  useEffect(() => {
    document.body.classList.add("subheader-enabled");
    return () => {
      document.body.classList.remove("subheader-enabled");
    };
  });

  return (
    <div ref={ref} className={classNames("subheader", "row", className)}>
      {children}
    </div>
  );
};
SubHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SubHeader;
