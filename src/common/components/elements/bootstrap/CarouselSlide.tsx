import React, { FC, ReactNode } from "react";
import PropTypes from "prop-types";

interface ICarouselSlideProps {
  children?: ReactNode;
  background?: string;
}
const CarouselSlide: FC<ICarouselSlideProps> = ({
  children = undefined,
  background = undefined,
}) => {
  return (
    <div
      className="carousel-slide h-100 w-100"
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </div>
  );
};
CarouselSlide.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
};
export default CarouselSlide;
