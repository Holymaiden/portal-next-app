import React, { forwardRef, ReactNode } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "@/common/components/elements/icon/Icon";
import Popovers from "@/common/components/elements/bootstrap/Popovers";
import { TColor } from "@/common/types/color-type";

interface ITimelineItemProps {
  children: ReactNode;
  className?: string;
  color?: TColor;
  label: string;
}

export const TimelineItem = forwardRef<HTMLDivElement, ITimelineItemProps>(
  (
    { className = undefined, color = "primary", label, children, ...props },
    ref
  ) => {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <div
        ref={ref}
        className={classNames("timeline-item", className)}
        {...props}
      >
        <div className="timeline-label text-truncate d-inline-block fw-bold">
          <Popovers desc={label} trigger="hover">
            <span>{label}</span>
          </Popovers>
        </div>
        <div className="timeline-badge">
          <Icon icon="Circle" color={color} size="lg" />
        </div>
        <div className="timeline-content ps-3">{children}</div>
      </div>
    );
  }
);
TimelineItem.displayName = "TimelineItem";
TimelineItem.propTypes = {
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
  label: PropTypes.string.isRequired,
};

interface ITimelineProps {
  children: ReactNode;
  className?: string;
}
const Timeline = forwardRef<HTMLDivElement, ITimelineProps>(
  ({ className = undefined, children, ...props }, ref) => {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <div ref={ref} className={classNames("timeline", className)} {...props}>
        {children}
      </div>
    );
  }
);
Timeline.displayName = "Timeline";
Timeline.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Timeline;
