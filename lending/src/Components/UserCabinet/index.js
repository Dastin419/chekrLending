import React, { useState } from "react";
import injectStyles from "react-jss";
import classNames from "classnames";
import { styles } from "./styles";
import ProfileIcon from "../../Images/profileIcon";
import LogOutIcon from "../../Images/logOut";
import { Link } from "react-router-dom";
import { PATH } from "../../App";
import PlusIcon from "../../Images/plus";
import StickyHeadTable from "../Table";
import MyEssayTab from "./MyEssayTab";
import SubscribeTab from "./SubscribeTab";
import ProfileTab from "./ProfileTab";

const TABS = {
  REVIEW_MY_ESSAY: { id: "REVIEW_MY_ESSAY", text: "Review my essay" },
  MY_ESSAY: { id: "MY_ESSAY", text: "My essays" },
  SUBSCRIBE: { id: "SUBSCRIBE", text: "Subscribe" },
  PROFILE: { id: "PROFILE", text: "Profile" }
};

const columnsMyEssayTab = [
  { id: "date", label: "Date" },
  { id: "time", label: "Time" },
  {
    id: "overallScore",
    label: "Overall Score",
    align: "right"
  }
];

const columnsSubscribeTab = [
  { id: "date", label: "Date" },
  { id: "time", label: "Time" },
  { id: "amount", label: "Amount" },
  {
    id: "method",
    label: "Method",
    align: "right"
  }
];

const rowsMyEssayTab = [
  { date: "22.22.2021", time: "11:00", overallScore: 12 },
  { date: "17.22.2021", time: "19:00", overallScore: 84 },
  { date: "17.22.2021", time: "13:00", overallScore: 44 },
  { date: "15.22.2021", time: "15:00", overallScore: 51 },
  { date: "14.22.2021", time: "19:00", overallScore: 11 },
  { date: "13.22.2021", time: "15:00", overallScore: 45 },
  { date: "12.22.2021", time: "14:00", overallScore: 64 },
  { date: "11.22.2021", time: "13:00", overallScore: 74 },
  { date: "10.22.2021", time: "11:00", overallScore: 34 },
  { date: "09.22.2021", time: "10:00", overallScore: 53 }
];

const rowsSubscribeTab = [
  {
    date: "22.22.2021",
    time: "11:00",
    amount: "$9.99",
    method: "Credit card 1533 •••• •••• 2558 "
  },
  {
    date: "17.22.2021",
    time: "19:00",
    amount: "$9.99",
    method: "Credit card 1533 •••• •••• 2558"
  }
];

const UserCabinet = ({
  classes,
  setIsProfile,
  userData,
  onSubmitProfileUserData
}) => {
  const [currentTab, setCurrentTab] = useState(TABS.MY_ESSAY.id);

  const getContent = tab => {
    switch (tab) {
      case TABS.MY_ESSAY.id:
        return (
          <MyEssayTab
            classes={classes}
            columns={columnsMyEssayTab}
            rows={rowsMyEssayTab}
          />
        );
      case TABS.SUBSCRIBE.id:
        return (
          <SubscribeTab
            clasess={classes}
            rows={rowsSubscribeTab}
            columns={columnsSubscribeTab}
          />
        );
      case TABS.PROFILE.id:
        return (
          <ProfileTab
            onSubmitProfileUserData={onSubmitProfileUserData}
            userData={userData}
            classes={classes}
          />
        );
      default: {
        return <div>{tab}</div>;
      }
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.leftBlock}>
        <div className={classes.title}>{TABS[currentTab].text}</div>
        {getContent(currentTab)}
      </div>
      <div className={classes.rightBlock}>
        <div className={classes.tabBlock}>
          <ProfileIcon style={{ marginRight: 10 }} /> dastin419@gmail.com
        </div>
        <div className={classes.line} />
        <div
          onClick={() => setCurrentTab(TABS.MY_ESSAY.id)}
          className={classNames(classes.tabBlock, classes.hover, {
            [classes.active]: currentTab === TABS.MY_ESSAY.id
          })}
        >
          {TABS.MY_ESSAY.text}
        </div>
        <div
          onClick={() => setCurrentTab(TABS.SUBSCRIBE.id)}
          className={classNames(classes.tabBlock, classes.hover, {
            [classes.active]: currentTab === TABS.SUBSCRIBE.id
          })}
        >
          {TABS.SUBSCRIBE.text}
        </div>
        <div
          onClick={() => setCurrentTab(TABS.PROFILE.id)}
          className={classNames(classes.tabBlock, classes.hover, {
            [classes.active]: currentTab === TABS.PROFILE.id
          })}
        >
          {TABS.PROFILE.text}
        </div>
        <div className={classes.line} />
        <Link
          className={classNames(classes.tabBlock, classes.hover)}
          onClick={() => setIsProfile(false)}
          to={PATH.default}
        >
          Back
        </Link>
        <div className={classNames(classes.tabBlock, classes.hover)}>
          Log out <LogOutIcon style={{ marginLeft: 10 }} />
        </div>
      </div>
    </div>
  );
};

export default injectStyles(styles)(UserCabinet);
