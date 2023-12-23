import React from "react";
import classNames from "classnames";
import Footer from "@/common/components/layouts/Footer/Footer";
import useDarkMode from "@/common/hooks/useDarkMode";

const DefaultFooter = () => {
  const { darkModeStatus } = useDarkMode();

  return (
    <Footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <span className="fw-light">Copyright © 2023 - Version 1.0.0</span>
          </div>
          <div className="col-auto">
            <a
              href="/pages"
              className={classNames("text-decoration-none", {
                "link-dark": !darkModeStatus,
                "link-light": darkModeStatus,
              })}
            >
              <small className="fw-bold">Fihaa App</small>
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default DefaultFooter;
