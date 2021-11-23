import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";
import ChipIcon from "../../Images/chipIcon";
import Button from "../Button";
import PeopleIcon from "../../Images/peopleIcon";
import img1 from "./../../Images/ceoImg.png";
import img2 from "./../../Images/cofounderImg.png";
import img3 from "./../../Images/productDesignerImg.png";
import CheckIcon from "../../Images/check";

const personItems = [
  {
    name: "Nicolas Berthozat,",
    job: "CEO",
    img: img1
  },
  {
    name: "Sara Offset,",
    job: "Cofounder",
    img: img2
  },
  {
    name: "Jesica Roberts,",
    job: "Product Designer",
    img: img3
  }
];

const PersonItem = ({ classes, name, job, img }) => {
  return (
    <div className={classes.itemWrap}>
      <img className={classes.img} alt="" src={img} />
      <div className={classes.descriptionWrap}>
        <div className={classes.name}>{name}</div>
        <div className={classes.job}>{job}</div>
      </div>
    </div>
  );
};

const AboutUsBlock = ({ classes, refAbout }) => {
  return (
    <div ref={refAbout} className={classes.wrapper}>
      <div className={classes.subWrapper}>
        <div className={classes.peopleBlock}>
          <div className={classes.preTitle}>OUR VISION</div>
          <div className={classes.title}>
            Provide the opportunity for everyone to independently influence
            their future with the help of modern technologies
          </div>
          <div className={classes.imgWrapper}>
            {personItems.map(item => (
              <PersonItem
                key={item.name}
                name={item.name}
                job={item.job}
                img={item.img}
                classes={classes}
              />
            ))}
          </div>
        </div>
        <div className={classes.textBlock}>
          <div className={classes.lineWrapp}>
            <div className={classes.line} />
          </div>
          <div className={classes.text}>
            We started this company because we believe that humans shouldn’t
            have to struggle to use the data that drives our work forwards. At
            Flatfile, we’re creating beautiful, human-centric experiences to
            remove the barriers between people and data. We’re automating every
            repetitive and painstaking process involved in teaching machines
            what data is and where it should go. As a team, we follow a first
            principles approach to problem solving and employees are empowered
            to make decisions with total ownership over the areas in which they
            lead.
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div>
          <div className={classes.leftBlockTitle}>
            We`re here to help{" "}
            <div style={{ marginLeft: 20 }}>
              <div className={classes.lineBottom} />
            </div>
          </div>
          <div className={classes.leftBlockSubtitle}>
            Contact us any time, Monday throuth Friday.
          </div>
        </div>
        <div className={classes.rightBlock}>
          <CheckIcon />
          <div className={classes.email}>hello@chckr.info</div>
        </div>
      </div>
    </div>
  );
};

export default injectStyles(styles)(AboutUsBlock);
