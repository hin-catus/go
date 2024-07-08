import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const WishlistCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="items"
          source="items"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <BooleanInput label="status" source="status" />
        <BooleanInput label="private" source="privateField" />
      </SimpleForm>
    </Create>
  );
};
