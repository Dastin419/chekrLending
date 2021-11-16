import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";

import injectStyles from "react-jss";
import { styles } from "./styles";
import Button from "../Button";
import CustomSwitch from "../Switch";
import Input from "../InputModal/Input";

const ProfileTab = ({ classes, userData, onSubmitProfileUserData }) => {
  const [isError, setIsError] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: userData.email,
    password: ""
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onSubmit = values => {
    onSubmitProfileUserData({
      mail: values.email,
      password: values.password,
      name: values.firstName,
      surname: values.lastName
    });
    console.log({
      mail: values.email,
      password: values.password,
      name: values.firstName,
      surname: values.lastName
    });
    setIsEditMode(true);
  };
  const callbackError = error => {
    setIsError(error);
  };

  return (
    <div className={classes.content}>
      <div className={classes.subWrapper}>
        <div>
          <Input
            placeholder="Name"
            label="First Name"
            isRequired={false}
            required={false}
            value={values.firstName}
            handleChange={handleChange}
            type="firstName"
            callbackError={callbackError}
            disabled={!isEditMode}
          />
          <Input
            placeholder="Surname"
            label="Last Name"
            isRequired={false}
            required={false}
            value={values.lastName}
            handleChange={handleChange}
            type="lastName"
            callbackError={callbackError}
            disabled={!isEditMode}
          />
          <Input
            placeholder="mail@website.com"
            label="Email"
            isRequired={false}
            required={false}
            value={values.email}
            handleChange={handleChange}
            type="email"
            callbackError={callbackError}
            disabled={!isEditMode}
          />
          <Input
            placeholder="pass"
            label="Password"
            isRequired={false}
            required={false}
            value={values.password}
            handleChange={handleChange}
            type="password"
            callbackError={callbackError}
            disabled={!isEditMode}
          />

          {/*<Input*/}
          {/*  handleChange={handleChange}*/}
          {/*  type="firstName"*/}
          {/*  value={values.firstName}*/}
          {/*  label="First Name"*/}
          {/*  disabled={!isEditMode}*/}
          {/*  required={false}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  handleChange={handleChange}*/}
          {/*  type="lastName"*/}
          {/*  value={values.lastName}*/}
          {/*  label="Last Name"*/}
          {/*  disabled={!isEditMode}*/}
          {/*  required={false}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  handleChange={handleChange}*/}
          {/*  type="email"*/}
          {/*  value={values.email}*/}
          {/*  label="Email"*/}
          {/*  disabled={!isEditMode}*/}
          {/*  required={false}*/}
          {/*/>*/}
          {/*<Input*/}
          {/*  handleChange={handleChange}*/}
          {/*  type="password"*/}
          {/*  value={values.password}*/}
          {/*  label="Password"*/}
          {/*  disabled={!isEditMode}*/}
          {/*  required={false}*/}
          {/*/>*/}
          <div className={classes.buttonWrap}>
            {isEditMode ? (
              <Button
                color="blue"
                label="Save"
                onClick={() => {
                  onSubmit(values);
                }}
                disabled={Boolean(isError) || !isEditMode}
              />
            ) : null}
          </div>
        </div>
        <div className={classes.checkBoxWrap}>
          <div className={classes.checkBoxLabel}>Edit mode</div>
          <CustomSwitch checked={isEditMode} setChecked={setIsEditMode} />
        </div>
      </div>
    </div>
  );
};

export default injectStyles(styles)(ProfileTab);
