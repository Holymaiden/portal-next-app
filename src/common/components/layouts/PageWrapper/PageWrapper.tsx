"use client";

import React, { forwardRef, ReactElement, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ISubHeaderProps } from "@/common/components/layouts/SubHeader/SubHeader";
import { IPageProps } from "@/common/components/layouts/Page/Page";
import AuthContext from "@/common/context/authContext";
import Mounted from "@/common/components/elements/Mounted";

interface IPageWrapperProps {
  isProtected?: boolean;
  children:
    | ReactElement<ISubHeaderProps>[]
    | ReactElement<IPageProps>
    | ReactElement<IPageProps>[];
  className?: string;
}

const PageWrapper = forwardRef<HTMLDivElement, IPageWrapperProps>(
  ({ isProtected = true, className = undefined, children }, ref) => {
    const { user } = useContext(AuthContext);

    // const navigate = useNavigate();
    useEffect(() => {
      if (isProtected && user === "") {
        // navigate(demoPages.login.path);
      }
      return () => {};
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div
        ref={ref}
        className={classNames("page-wrapper", "container-fluid", className)}
      >
        <Mounted>{children}</Mounted>
      </div>
    );
  }
);
PageWrapper.displayName = "PageWrapper";
PageWrapper.propTypes = {
  isProtected: PropTypes.bool,
  // @ts-ignore
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default PageWrapper;
