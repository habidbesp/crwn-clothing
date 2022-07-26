import { useState, FormEvent, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AuthErrorCodes, AuthError } from "firebase/auth";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

import { LogInContainer, ButtonsContainer } from "./log-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const LogInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const logInGoogleUser = async () => {
    dispatch(googleSignInStart());
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.USER_DELETED:
          alert("Cannot find your email, please sign up");
          break;
        case AuthErrorCodes.INVALID_PASSWORD:
          alert("Wrong password for this email");
          break;
        default:
          console.error("log in user encountered an error", error);
          break;
      }
    }
  };

  return (
    <LogInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={logInGoogleUser}
          >
            Sign in with google
          </Button>
        </ButtonsContainer>
      </form>
    </LogInContainer>
  );
};

export default LogInForm;
