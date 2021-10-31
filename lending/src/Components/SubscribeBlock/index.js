import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import ChipIcon from "../../Images/chipIcon";
import Button from "../Button";
import PeopleIcon from "../../Images/peopleIcon";

const SubscribeBlock = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <span className={classes.blue}>Subscribe</span> for just $9.99 per month
        <br />
        or $4.99 only by invite 5 friends
      </div>
      <div className={classes.text}>
        Test the effectiveness of the instrument personally and increase the
        likelihood of successfully writing an essay by yourself
      </div>
      <div className={classes.buttonsWrap}>
        <Button color="blue" label="Subscribe" filled={true} margin={10} />
        <Button color="blue" label="Invite" />
      </div>
      <PeopleIcon className={classes.icon} />
    </div>
  );
};

export default injectStyles(styles)(SubscribeBlock);
