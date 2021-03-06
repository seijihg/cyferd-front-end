import { Field, FieldProps, Form, Formik } from "formik";
import React, { FC } from "react";
import * as Yup from "yup";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import styled from "styled-components";
import { H1 } from "./DescSection";

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("Required field."),
  password: Yup.string().required("Required field."),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
  dob: Yup.string().required("Required field."),
  age: Yup.number()
    .min(18, "Minimum 18 years old.")
    .required("Required field."),
  acceptTerms: Yup.bool().oneOf([true], "Must accept terms and conditions."),
});

const InputStyled = styled.input`
  padding: 0.5rem;
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
  }
`;

const H1Login = styled.h1`
  ${H1}
  padding: 0;
`;

const LoginForm: FC = () => {
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
        }}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div>
              <H1Login>Good to see you again</H1Login>
              <p style={{ marginBottom: "2rem 0" }}>
                Sign in for member-only services and access to your personal
                profile.
              </p>
            </div>
            <div>
              <Field name="name" placeholder="your name" as={InputStyled} />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div>
              <Field
                name="password"
                type="password"
                placeholder="password"
                as={InputStyled}
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
            <div>
              <Field
                name="passwordConfirm"
                type="password"
                placeholder="retype password"
                as={InputStyled}
              />
              {errors.passwordConfirm && touched.passwordConfirm ? (
                <div>{errors.passwordConfirm}</div>
              ) : null}
            </div>
            <div>
              <Field name="dob" type="date" placeholder="date of birth">
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
            </div>
            <div>
              <Field name="age" placeholder="age" as={InputStyled} />
              {errors.age && touched.age ? <div>{errors.age}</div> : null}
            </div>
            <div>
              <Field name="acceptTerms" type="checkbox" />
              {errors.acceptTerms && touched.acceptTerms ? (
                <div>{errors.acceptTerms}</div>
              ) : null}
            </div>
            <button type="submit">Submit</button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </WindowLogin>
  );
};

export default LoginForm;
