import { Formik, Field, FormikProps } from "formik";
import * as yup from "yup";
import { useState, Dispatch, SetStateAction } from "react";
import TextInput from "components/TextInput";
import styled from "styled-components";
import InlineInputGroup from "styled-components/InlineInputGroup";
import ButtonGroup from "styled-components/ButtonGroup";
import Button from "styled-components/Button";
import Select from "components/Select/Select";
import CheckBoxGroup from "components/CheckBoxGroup";
import Label from "styled-components/Label";
import CheckBoxLabel from "styled-components/CheckBoxLabel";
import TextArea from "components/TextArea";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  business: "",
  comments: "",
};

enum FormInputs {
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  phone = "phone",
  business = "business",
  comments = "comments",
}

const Form = styled.form`
  legend {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--brand);
    margin-bottom: 1.5rem;
  }
`;

const validationSchema = yup.object({
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please provide a contact email address"),
  phone: yup.string().required("Please provide a contact number"),
  business: yup.string().required("Please enter your business name"),
  comments: yup.string().required("Please enter a message"),
});

export default function QuoteForm({
  updateParent,
  showError,
}: {
  updateParent: Dispatch<SetStateAction<boolean>>;
  showError: Dispatch<SetStateAction<boolean>>;
}) {
  const initialValues = initialState;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const res = await fetch("/api/sendMessage", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "content-type": "application/json",
            },
          });

          if (res.status >= 200 && res.status < 300) {
            setSubmitting(false);
            updateParent(true);
          } else {
            setSubmitting(false);
            updateParent(false);
            showError(true);
          }
        } catch (err) {
          setSubmitting(false);
          updateParent(false);
          showError(true);
        }
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <fieldset disabled={formik.isSubmitting}>
            <InlineInputGroup>
              <Field
                id={FormInputs.firstName}
                name={FormInputs.firstName}
                label="First Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                errors={formik.errors.firstName}
                touched={formik.touched.firstName}
                component={TextInput}
              />
              <Field
                id={FormInputs.lastName}
                name={FormInputs.lastName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                label="Last Name"
                errors={formik.errors.lastName}
                touched={formik.touched.lastName}
                component={TextInput}
              />
            </InlineInputGroup>
            <InlineInputGroup>
              <Field
                id={FormInputs.email}
                name={FormInputs.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                label="Email"
                errors={formik.errors.email}
                touched={formik.touched.email}
                component={TextInput}
              />
              <Field
                id={FormInputs.phone}
                name={FormInputs.phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phone}
                label="Phone"
                errors={formik.errors.phone}
                touched={formik.touched.phone}
                component={TextInput}
              />
            </InlineInputGroup>
            <Field
              id={FormInputs.business}
              name={FormInputs.business}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.business}
              label="Business Name"
              errors={formik.errors.business}
              touched={formik.touched.business}
              component={TextInput}
            />
            <Field
              id={FormInputs.comments}
              name={FormInputs.comments}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.comments}
              label="Comments"
              errors={formik.errors.comments}
              touched={formik.touched.comments}
              component={TextArea}
              placeholder="Type your message here..."
            />
            <ButtonGroup>
              <Button
                type="submit"
                primary
                disabled={
                  !formik.dirty || !formik.isValid || formik.isSubmitting
                }
                style={{ width: "min(100%, 450px)" }}
              >
                Send Message
              </Button>
            </ButtonGroup>
          </fieldset>
        </Form>
      )}
    </Formik>
  );
}
