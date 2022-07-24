import LogInForm from "../../components/log-in-form/log-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication">
      <LogInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
