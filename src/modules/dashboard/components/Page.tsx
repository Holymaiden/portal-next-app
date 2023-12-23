"use client";

import Page from "@/common/components/layouts/Page/Page";
import SubHeaderDashboard from "./SubHeader";
import { useTour } from "@reactour/tour";
import { useContext, useEffect } from "react";
import ThemeContext from "@/common/context/themeContext";
import DashboardAlert from "./Alert";
import DashboardUserCard from "./UserCard";
import DashboardMarketingTeam from "./MarketingTeam";
import DashboardDesignTeam from "./DesignTeam";
import DashboardIncome from "./Income";
import DashboardTopSeller from "./TopSeller";

const DashboardModules = () => {
  const { mobileDesign } = useContext(ThemeContext);
  /**
   * Tour Start
   */
  const { setIsOpen } = useTour();
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("tourModalStarted") !== "shown" &&
      !mobileDesign
    ) {
      setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("tourModalStarted", "shown");
      }, 3000);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SubHeaderDashboard />
      <Page container="fluid">
        <div className="row">
          <div className="col-12">
            <DashboardAlert />
          </div>

          <div className="col-xl-4">
            <DashboardUserCard />
          </div>
          <div className="col-xl-4">
            <DashboardMarketingTeam />
          </div>
          <div className="col-xl-4">
            <DashboardDesignTeam />
          </div>

          <div className="col-xxl-6">
            <DashboardIncome />
          </div>

          <div className="col-xxl-8">
            <DashboardTopSeller />
          </div>
        </div>
      </Page>
    </>
  );
};

export default DashboardModules;
