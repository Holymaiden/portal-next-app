import Alert, {
  AlertHeading,
} from "@/common/components/elements/bootstrap/Alert";

const DashboardAlert = () => {
  return (
    <Alert
      icon="Verified"
      isLight
      color="primary"
      borderWidth={0}
      className="shadow-3d-primary"
      isDismissible
    >
      <AlertHeading tag="h2" className="h4">
        Congratulations! 🎉
      </AlertHeading>
      <span>You have reached your monthly sales targets.</span>
    </Alert>
  );
};

export default DashboardAlert;
