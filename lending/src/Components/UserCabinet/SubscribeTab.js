import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import StickyHeadTable from "../Table";
import classNames from "classnames";

const SubscribeTab = ({ classes, columns = [], rows = [] }) => {
  return (
    <div className={classes.content}>
      <div className={classes.simpleText}>$9.99 per month</div>
      <a className={classes.link} href="/">
        Cancel my subscription
      </a>

      <div className={classes.simpleText}>
        Next payment will be October 22, 2021
      </div>
      <div className={classes.subtitle}>Payment data</div>
      <div className={classes.wrapperPayment}>
        <div className={classNames(classes.simpleText)}>
          1533 •••• •••• 2588
        </div>
        <div className={classNames(classes.datePaid, classes.simpleText)}>
          06/24
        </div>
      </div>
      <div className={classes.subtitle}>Payment history</div>
      <StickyHeadTable columns={columns} rows={rows} />
    </div>
  );
};

export default injectStyles(styles)(SubscribeTab);
