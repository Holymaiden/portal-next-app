import WrapperDashboard from "@/common/components/layouts/WrapperDashboard/Wrapper";
import Sidebar from "@/common/components/layouts/Dashboard/Sidebar/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <WrapperDashboard>{children}</WrapperDashboard>
    </>
  );
};

export default DashboardLayout;
