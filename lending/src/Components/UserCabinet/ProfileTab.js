import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";

import injectStyles from "react-jss";
import { styles } from "./styles";
import Input from "./../Input";
import Button from "../Button";
import CustomSwitch from "../Switch";

const ProfileTab = ({ classes }) => {
  const [values, setValues] = useState({
    firstName: "Dima",
    lastName: "Lazarenko",
    email: "dastin419@gmail.com",
    password: "2483SdasdaAW"
  });

  const [isEditMode, setIsEditMode] = useState(false);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onClick = () => {
    setIsEditMode(true);
  };

  return (
    <div className={classes.content}>
      <div className={classes.subWrapper}>
        <div>
          <Input
            handleChange={handleChange}
            type="firstName"
            value={values.firstName}
            label="First Name"
            disabled={!isEditMode}
          />
          <Input
            handleChange={handleChange}
            type="lastName"
            value={values.lastName}
            label="Last Name"
            disabled={!isEditMode}
          />
          <Input
            handleChange={handleChange}
            type="email"
            value={values.email}
            label="Email"
            disabled={!isEditMode}
          />
          <Input
            handleChange={handleChange}
            type="password"
            value={values.password}
            label="Password"
            disabled={!isEditMode}
          />
          <div className={classes.buttonWrap}>
            {isEditMode ? (
              <Button
                color="blue"
                filled={true}
                label="Save"
                onClick={onClick}
                disabled
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
