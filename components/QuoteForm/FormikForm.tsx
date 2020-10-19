import { Formik, Field, useFormikContext } from "formik";
import * as yup from "yup";
import { useState } from "react";
import TextInput from "components/TextInput";
import styled from "styled-components";
import Button from "styled-components/Button";
import Select from "components/Select/Select";
import CheckBoxGroup from "components/CheckBoxGroup";
import CheckBox from "components/CheckBox";
import Label from "styled-components/Label";
import CheckBoxLabel from "styled-components/CheckBoxLabel";

const initialPartOneState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  business: "",
};

enum PartOneInputs {
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  phone = "phone",
  business = "business",
}

const initialPartTwoState = {
  customerType: "",
  businessType: "",
  turnover: "",
  paymentTypes: [],
  comments: "",
};

enum PartTwoInputs {
  customerType = "customerType",
  businessType = "businessType",
  turnover = "turnover",
  paymentTypes = "paymentTypes",
  comments = "comments",
}

export enum FormStages {
  STAGE_ONE = "stage1",
  STAGE_TWO = "stage2",
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
  customerType: yup.string().required("Please select an option"),
});

function NextStageButton() {
  const {} = useFormikContext();
}

export default function QuoteForm() {
  const [stage, setStage] = useState<FormStages>(FormStages.STAGE_ONE);

  const initialValues = {
    ...initialPartOneState,
    ...initialPartTwoState,
  };

  function handleSubmit() {}

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          {stage === FormStages.STAGE_ONE && (
            <fieldset>
              <legend>Your Details</legend>
              <Field
                id={PartOneInputs.firstName}
                name={PartOneInputs.firstName}
                label="First Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
                errors={formik.errors.firstName}
                touched={formik.touched.firstName}
                component={TextInput}
              />
              <Field
                id={PartOneInputs.lastName}
                name={PartOneInputs.lastName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
                label="Last Name"
                errors={formik.errors.lastName}
                touched={formik.touched.lastName}
                component={TextInput}
              />
              <Field
                id={PartOneInputs.email}
                name={PartOneInputs.email}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                label="Email"
                errors={formik.errors.email}
                touched={formik.touched.email}
                component={TextInput}
              />
              <Field
                id={PartOneInputs.phone}
                name={PartOneInputs.phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.phone}
                label="Phone"
                errors={formik.errors.phone}
                touched={formik.touched.phone}
                component={TextInput}
              />
              <Field
                id={PartOneInputs.business}
                name={PartOneInputs.business}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.business}
                label="Business"
                errors={formik.errors.business}
                touched={formik.touched.business}
                component={TextInput}
              />
              <Button
                type="button"
                onClick={() => {
                  if (formik.isValid) setStage(FormStages.STAGE_TWO);
                }}
                disabled={!formik.dirty || !formik.isValid}
              >
                Next
              </Button>
            </fieldset>
          )}
          {stage === FormStages.STAGE_TWO && (
            <fieldset>
              <legend>Your Business</legend>
              <Field
                id={PartTwoInputs.customerType}
                name={PartTwoInputs.customerType}
                label="Customer Type"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.customerType}
                errors={formik.errors.customerType}
                touched={formik.touched.customerType}
                component={Select}
                options={[
                  { value: "New", displayValue: "I am a new customer" },
                  {
                    value: "Switching",
                    displayValue: "I want to switch from my current provider",
                  },
                ]}
                placeholder="Please select an option..."
              />
              <Field
                id={PartTwoInputs.businessType}
                name={PartTwoInputs.businessType}
                label="Business Type"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.businessType}
                errors={formik.errors.businessType}
                touched={formik.touched.businessType}
                component={Select}
                options={[
                  { value: "Permanent", displayValue: "Permanent" },
                  { value: "Temporary", displayValue: "Temporary" },
                  { value: "Seasonal", displayValue: "Seasonal" },
                ]}
                placeholder="Please select an option..."
              />
              <Field
                id={PartTwoInputs.turnover}
                name={PartTwoInputs.turnover}
                label="Monthly Turnover"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.turnover}
                errors={formik.errors.turnover}
                touched={formik.touched.turnover}
                component={Select}
                options={[
                  { value: "1k", displayValue: "Up to £1,000" },
                  { value: "10k", displayValue: "Up to £10,000" },
                  { value: "50k", displayValue: "Up to £50,000" },
                  { value: "100k", displayValue: "Up to £100,000" },
                  { value: "500k", displayValue: "Up to £500,000" },
                  { value: "1m", displayValue: "Up to £1,000,000" },
                  { value: "unknown", displayValue: "I'm not sure" },
                ]}
                placeholder="Please select an option..."
              />
              <Label htmlFor={PartTwoInputs.paymentTypes}>
                Payment Types
                <CheckBoxGroup>
                  <CheckBoxLabel htmlFor="Card Readers">
                    <Field
                      type="checkbox"
                      name={PartTwoInputs.paymentTypes}
                      value="Card Readers"
                    />
                    Card Readers
                  </CheckBoxLabel>
                  <CheckBoxLabel htmlFor="Payment Gateways">
                    <Field
                      type="checkbox"
                      name={PartTwoInputs.paymentTypes}
                      value="Payment Gateways"
                    />
                    Payment Gateways
                  </CheckBoxLabel>
                  <CheckBoxLabel htmlFor="Payment Links">
                    <Field
                      type="checkbox"
                      name={PartTwoInputs.paymentTypes}
                      value="Payment Links"
                    />
                    Payment Links
                  </CheckBoxLabel>
                  <CheckBoxLabel htmlFor="Phone Payments">
                    <Field
                      type="checkbox"
                      name={PartTwoInputs.paymentTypes}
                      value="Phone Payments"
                    />
                    Phone Payments
                  </CheckBoxLabel>
                </CheckBoxGroup>
              </Label>
              {<div>{JSON.stringify(formik.values)}</div>}
              {<div>{JSON.stringify(formik.touched)}</div>}
            </fieldset>
          )}
        </Form>
      )}
    </Formik>
  );
}
