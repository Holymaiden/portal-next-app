import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

interface ICarouselCaptionProps {
  captionHeader?: ReactNode;
  captionText: ReactNode;
  className?: string;
}
const CarouselCaption: FC<ICarouselCaptionProps> = (props) => {
  const { captionHeader = null, captionText, className = undefined } = props;
  return (
    <div
      className={classNames(
        className,
        "carousel-caption",
        "d-none",
        "d-md-block"
      )}
    >
      <h5>{captionHeader}</h5>
      <p>{captionText}</p>
    </div>
  );
};
CarouselCaption.propTypes = {
  captionHeader: PropTypes.node,
  captionText: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CarouselCaption;
