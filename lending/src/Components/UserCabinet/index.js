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

const TABS = {
  REVIEW_MY_ESSAY: { id: "REVIEW_MY_ESSAY", text: "Review my essay" },
  MY_ESSAY: { id: "MY_ESSAY", text: "My essays" },
  SUBSCRIBE: { id: "SUBSCRIBE", text: "Subscribe" },
  PROFILE: { id: "PROFILE", text: "Profile" }
};

const sliceText = str => `${str.substring(0, 113)}...`;

const columns = [
  { id: "date", label: "Date" },
  { id: "time", label: "Time" },
  {
    id: "overallScore",
    label: "Overall Score",
    align: "right"
  }
];

const rows = [
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

const UserCabinet = ({ classes, setIsProfile }) => {
  const [currentTab, setCurrentTab] = useState(TABS.MY_ESSAY.id);

  const getContent = tab => {
    switch (tab) {
      case TABS.MY_ESSAY.id:
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

      default: {
        return <div>{tab}</div>;
      }
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.leftBlock}>
        <div className={classes.title}>
          {TABS[currentTab].text}
          {getContent(currentTab)}
        </div>
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
        <div className={classNames(classes.tabBlock, classes.hover)}>
          <Link onClick={() => setIsProfile(false)} to={PATH.default}>
            Back
          </Link>
        </div>
        <div className={classNames(classes.tabBlock, classes.hover)}>
          Log out <LogOutIcon style={{ marginLeft: 10 }} />
        </div>
      </div>
    </div>
  );
};

export default injectStyles(styles)(UserCabinet);
