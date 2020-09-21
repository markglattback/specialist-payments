export type FormState = {
  stage: FormStages;
  partOneState: PartOneState;
  partTwoState: PartTwoState;
};

export enum FormStages {
  STAGE_ONE = "stage1",
  STAGE_TWO = "stage2",
}

export type PartOneState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  business: string;
};

export enum PartOneInputs {
  firstName = "first-name",
  lastName = "last-name",
  email = "email",
  phone = "phone",
  business = "business-name",
}

export type PartTwoState = {
  customerType: string;
  businessType: string;
  turnover: string;
  paymentTypes: PaymentTypes;
  comments: string;
};

export enum PartTwoInputs {
  customerType = "customer-type",
  businessType = "business-type",
  turnover = "turnover",
  paymentTypes = "payment-types",
  comments = "comments",
}

export enum CheckBoxInputs {
  cardMachine = "pt-card-machine",
  website = "pt-website",
  phone = "pt-phone",
  email = "pt-email",
}

export type PaymentTypes = {
  cardMachine: boolean;
  website: boolean;
  phone: boolean;
  email: boolean;
};

export type Action =
  | { type: "reset" }
  | { type: "next" }
  | { type: "back" }
  | { type: PartOneInputs | PartTwoInputs; value: string }
  | { type: CheckBoxInputs; checked: boolean };
