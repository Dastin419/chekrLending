import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import BlockWithTitle from "../BlockWithTitle";
import SimpleBlock from "../SimpleBlock";
import SimpleBlock2 from "../SimpleBlock2";

const GeneralBlock = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <BlockWithTitle />
      <SimpleBlock />
      <SimpleBlock2 />
    </div>
  );
};

export default injectStyles(styles)(GeneralBlock);
