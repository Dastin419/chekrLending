import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import ChipIcon from "../../Images/chipIcon";
import Button from "../Button";

const ChipBlock = ({ classes, refFeatures }) => {
  return (
    <div className={classes.wrapper} ref={refFeatures}>
      <div className={classes.preTitle}>artificial intelligence</div>
      <div className={classes.title}>
        Runs on proprietary <br />
        <span className={classes.blue}>machine learning</span> and NLP models
      </div>
      <div className={classes.text}>
        Artificial intelligence based on thousands of options for writing your
        essay. For almost all the comments, the program has practical advice
        that will help you in your work.
      </div>
      <ChipIcon className={classes.icon} />

      <div className={classes.buttonsWrap}>
        <Button
          color="blueOutlined"
          label="Live demo"
          icon={true}
          margin={10}
        />
        <Button color="blue" label="Try now" />
      </div>
    </div>
  );
};

export default injectStyles(styles)(ChipBlock);
