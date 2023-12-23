import Button, {
  ButtonGroup,
} from "@/common/components/elements/bootstrap/Button";
import SubHeader, {
  SubHeaderLeft,
  SubheaderSeparator,
} from "@/common/components/layouts/SubHeader/SubHeader";

const SubHeaderDashboard = () => {
  return (
    <SubHeader>
      <SubHeaderLeft>
        <span className="h4 mb-0 fw-bold">Overview</span>
        <SubheaderSeparator />
        <ButtonGroup>
          <Button color="success">Weekly</Button>
        </ButtonGroup>
      </SubHeaderLeft>
    </SubHeader>
  );
};

export default SubHeaderDashboard;
