import { useState } from "react";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss'

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields,  [name]: value})
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  }
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput required type='email' label='Email' name='email' value={email} onChange={handleChange}></FormInput>
        <FormInput required type='password' label='Password' name='password' value={password} onChange={handleChange}></FormInput>
        <div className="buttons-container">
          <Button type='submit'>Sign In</Button>
          <Button onClick={ signInWithGoogle } buttonType='google'>Google sign in</Button>
        </div>
      </form>
    </div>
  )
};

export default SignInForm;