"use client";

import React, { FC, ReactNode, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link";
import TagWrapper from "@/common/components/elements/TagWrapper";
import Icon from "@/common/components/elements/icon/Icon";
import { TColor } from "@/common/types/color-type";
import { TIcons } from "@/common/types/icons-type";

interface IAlertHeadingProps extends Record<string, any> {
  children: ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null;
}
export const AlertHeading: FC<IAlertHeadingProps> = ({
  className = undefined,
  children,
  tag = "h4",
  ...props
}) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TagWrapper
      tag={tag}
      className={classNames("alert-heading", className)}
      {...props}
    >
      {children}
    </TagWrapper>
  );
};
AlertHeading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
};

interface IAlertLinkProps extends Record<string, any> {
  className?: string;
  children: ReactNode;
  href?: string | undefined;
  to?: string | null;
}
export const AlertLink: FC<IAlertLinkProps> = ({
  className = undefined,
  children,
  href = undefined,
  to = null,
  ...props
}) => {
  const LINK_CLASSES = classNames("alert-link", className);
  if (to) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Link href={to} className={LINK_CLASSES} {...props}>
        {children}
      </Link>
    );
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a href={href} className={LINK_CLASSES} {...props}>
      {children}
    </a>
  );
};
AlertLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  to: PropTypes.string,
};

interface IAlertProps extends Record<string, any> {
  className?: string;
  children: ReactNode;
  color?: TColor;
  isDismissible?: boolean;
  isOutline?: boolean;
  isLight?: boolean;
  shadow?: null | "sm" | "md" | "lg" | "3d";
  icon?: TIcons;
  rounded?: null | "default" | 0 | 1 | 2 | 3 | "pill";
  borderWidth?: null | 0 | 1 | 2 | 3 | 4 | 5;
}

const Alert: FC<IAlertProps> = ({
  children,
  className = undefined,
  color = "primary",
  isDismissible = false,
  isLight = false,
  isOutline = false,
  shadow = null,
  icon = undefined,
  rounded = null,
  borderWidth = null,
  ...props
}) => {
  const [status, setStatus] = useState<boolean>(true);
  if (status) {
    return (
      <div
        className={classNames(
          "alert",
          {
            [`alert-${color}`]: color && !(isLight || isOutline),
            "alert-dismissible": isDismissible,
            fade: isDismissible,
            show: isDismissible,
            [`alert-light-${color}`]: isLight,
            [`alert-outline-${color}`]: isOutline,
            [`shadow${shadow !== "md" ? `-${shadow}` : ""}`]:
              !!shadow && shadow !== "3d",
            [`border-${borderWidth}`]: borderWidth || borderWidth === 0,
            [`rounded${rounded !== "default" ? `-${rounded}` : ""}`]:
              rounded || rounded === 0,
            [`shadow-3d-${color}`]: shadow === "3d",
          },
          className
        )}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        role="alert"
      >
        {icon ? (
          <>
            <div className="alert-icon">
              <Icon icon={icon} />
            </div>
            <div className="alert-text">{children}</div>
          </>
        ) : (
          children
        )}
        {isDismissible && (
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => setStatus(false)}
          />
        )}
      </div>
    );
  }
  return null;
};
Alert.propTypes = {
  borderWidth: PropTypes.oneOf([null, 0, 1, 2, 3, 4, 5]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "light",
    "dark",
  ]),
  icon: PropTypes.string,
  isDismissible: PropTypes.bool,
  /**
   * Light background color
   */
  isLight: PropTypes.bool,
  /**
   * borderWidth must not be 0 to be IsOutline
   */
  isOutline: PropTypes.bool,
  shadow: PropTypes.oneOf([null, "sm", "md", "lg", "3d"]),
  rounded: PropTypes.oneOf([null, "default", 0, 1, 2, 3, "pill"]),
};

export default Alert;
