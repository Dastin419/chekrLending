import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import PlusIcon from "../../Images/plus";
import StickyHeadTable from "../Table";

const sliceText = str => `${str.substring(0, 113)}...`;

const MyEssayTab = ({ classes, columns = [], rows = [] }) => {
  return (
    <div className={classes.content}>
      <div className={classes.wrapperCard}>
        <div className={classes.card}>
          <div className={classes.emptyCard}>
            <PlusIcon />
            <div className={classes.cardTitle}>New essay</div>
          </div>
        </div>
        <div className={classes.card}>
          {sliceText(
            "When I was very little, I caught the travel bug. It staarted after my grandparents first brought me to their home"
          )}
        </div>
        <div className={classes.card}>
          {sliceText(
            "It began with French, which taught me the importance of pronunciation. I remember once asking a store owner in Paris"
          )}
        </div>
      </div>
      <StickyHeadTable columns={columns} rows={rows} />
    </div>
  );
};

export default injectStyles(styles)(MyEssayTab);
