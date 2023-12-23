import Button from "@/common/components/elements/bootstrap/Button";
import FormGroup from "@/common/components/elements/bootstrap/forms/FormGroup";
import Input from "@/common/components/elements/bootstrap/forms/Input";

interface IProps {
  handleOnClick: () => void;
}

const SignUpForm = ({ handleOnClick }: IProps) => {
  return (
    <form className="row g-4">
      <div className="col-12">
        <FormGroup id="signup-email" isFloating label="Your email">
          <Input type="email" autoComplete="email" />
        </FormGroup>
      </div>
      <div className="col-12">
        <FormGroup id="signup-name" isFloating label="Your name">
          <Input autoComplete="given-name" />
        </FormGroup>
      </div>
      <div className="col-12">
        <FormGroup id="signup-surname" isFloating label="Your surname">
          <Input autoComplete="family-name" />
        </FormGroup>
      </div>
      <div className="col-12">
        <FormGroup id="signup-password" isFloating label="Password">
          <Input type="password" autoComplete="password" />
        </FormGroup>
      </div>
      <div className="col-12">
        <Button color="info" className="w-100 py-3" onClick={handleOnClick}>
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
