import { Field, FieldProps, Form, Formik } from "formik";
import React, { FC, useState } from "react";
import * as Yup from "yup";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import styled from "styled-components";
import { H1 } from "./DescSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export interface ILoginProps {
  setLogin: (login: boolean) => void;
}

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("Required field."),
  password: Yup.string().required("Required field."),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
  dob: Yup.date().required("Input day of birth"),
  age: Yup.number()
    .typeError("Make sure its a number.")
    .min(18, "Minimum 18 years old.")
    .when("dob", (dob: Date, schema: Yup.AnySchema) => {
      return schema.test({
        test: (age: any) => {
          const todaysYear = new Date().getFullYear();
          const differenceAge = todaysYear - dob.getFullYear();
          if (differenceAge === age) {
            return true;
          }
          return false;
        },
        message: "Has to be the same age as in Day of Birth",
      });
    }),
  acceptTerms: Yup.bool().oneOf([true], "Must accept terms and conditions."),
});

const InputStyled = styled.input`
  padding: 0.6rem;
  margin: 0.5rem 0;
  width: 100%;
  font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
  font-size: 1rem;

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

const WindowLogin = styled.div`
  margin: auto;
  padding-top: 20vh;
  position: absolute;
  background: #0a0a0a75;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  form {
    margin: auto;
    background: white;
    width: fit-content;
    padding: 2rem;
    border: 2px solid #01bd80;
  }
`;

const H1Login = styled.h1`
  ${H1}
  padding: 0;
  margin-bottom: 1rem;
`;

const ErrorMess = styled.div`
  color: red;
  font-family: "Libre Franklin", "Helvetica Neue", helvetica, arial, sans-serif;
  font-size: 1rem;
  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

const styledPandSpan = `
  font-family: "Cabin", sans-serif;
  line-height: 1.5;
  font-size: 1.5rem;

  @media (max-width: 600px) {
    font-size: 0.6rem;
    padding-right: 10%;
  }
`;

const ParagraphStyled = styled.p`
  ${styledPandSpan}
`;

const SpanStyled = styled.span`
  margin: auto 0;
  margin-left: 0.5rem;
  ${styledPandSpan}
`;

const ButtonStyled = styled.button`
  margin-top: 1rem;
  padding: 0.75rem;
  color: white;
  background: #d7762a;
  width: 100%;
  font-family: "Open Sans Hebrew", Sans-serif;
  font-style: bold;
  border: none;
  cursor: pointer;
  transition: background 250ms;

  &:hover {
    background: #575757;
    transition: background 250ms;
  }
`;

const SuccessfulMess = styled.div`
  color: white;
  margin-top: 1rem;
  background: #01bd80;
  padding: 0.75rem 0;
  text-align: center;
`;

const LoginForm: FC<ILoginProps> = ({ setLogin }) => {
  const [submitted, setSubmitted] = useState<string>("");
  return (
    <WindowLogin>
      <Formik
        initialValues={{
          name: "",
          password: "",
          passwordConfirm: "",
          dob: new Date(),
          age: "",
          acceptTerms: false,
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
          actions.resetForm();
          setSubmitted("Form submitted sucessfully");
        }}
      >
        {({ values, errors, touched }) => (
          <div
            style={{
              padding: ".1rem",
              background: "white",
              margin: "auto",
              width: "fit-content",
            }}
          >
            <Form style={{ position: "relative" }}>
              <div>
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  style={{
                    position: "absolute",
                    right: "1rem",
                    cursor: "pointer",
                  }}
                  size={window.innerWidth < 600 ? "1x" : "lg"}
                  onClick={() => setLogin(false)}
                />
                <H1Login>Good to see you again</H1Login>
                <ParagraphStyled>
                  Sign in for member-only services and access to your personal
                  profile.
                </ParagraphStyled>
              </div>
              <div>
                <Field
                  name="name"
                  placeholder="your name"
                  autoComplete="username"
                  as={InputStyled}
                />
                <ErrorMess>
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </ErrorMess>
              </div>
              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  autoComplete="new-password"
                  as={InputStyled}
                />
                <ErrorMess>
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </ErrorMess>
              </div>
              <div>
                <Field
                  name="passwordConfirm"
                  type="password"
                  placeholder="retype password"
                  autoComplete="new-password"
                  as={InputStyled}
                />
                <ErrorMess>
                  {errors.passwordConfirm && touched.passwordConfirm ? (
                    <div>{errors.passwordConfirm}</div>
                  ) : null}
                </ErrorMess>
              </div>
              <div>
                <ParagraphStyled>Day of birth:</ParagraphStyled>
                <Field name="dob" type="date">
                  {(obj: FieldProps) => {
                    const { form, field } = obj;
                    return (
                      <DatePicker
                        onChange={(dob) => form.setFieldValue("dob", dob)}
                        value={field.value}
                        maxDate={new Date()}
                      />
                    );
                  }}
                </Field>
                <ErrorMess>
                  {errors.dob && touched.dob ? <div>{errors.dob}</div> : null}
                </ErrorMess>
              </div>
              <div>
                <Field name="age" placeholder="age" as={InputStyled} />
                <ErrorMess>
                  {errors.age && touched.age ? <div>{errors.age}</div> : null}
                </ErrorMess>
              </div>
              <div style={{ display: "flex", margin: " 0.5rem 0" }}>
                <div style={{ margin: "auto 0" }}>
                  <Field name="acceptTerms" type="checkbox" />
                </div>
                <SpanStyled> Terms and Coditions</SpanStyled>
              </div>
              <ErrorMess>
                {errors.acceptTerms && touched.acceptTerms ? (
                  <div>{errors.acceptTerms}</div>
                ) : null}
              </ErrorMess>
              <ButtonStyled type="submit">Submit</ButtonStyled>
              {submitted !== "" ? (
                <SuccessfulMess>{submitted}</SuccessfulMess>
              ) : null}
              {/* <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre> */}
            </Form>
          </div>
        )}
      </Formik>
    </WindowLogin>
  );
};

export default LoginForm;
