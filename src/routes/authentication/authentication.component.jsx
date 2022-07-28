import LogInForm from "../../components/log-in-form/log-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <LogInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
