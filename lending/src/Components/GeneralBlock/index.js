import React from "react";
import injectStyles from "react-jss";
import { styles } from "./styles";

import BlockWithTitle from "../BlockWithTitle";
import SimpleBlock from "../SimpleBlock";
import ThermometerIcon from "../../Images/thermometr";
import Bg2Icon from "../../Images/bg-2";
import Bg3Icon from "../../Images/bg-3";
import TabsIcon from "../../Images/tabsIcon";
import HireIcon from "../../Images/hiresIcon";
import Bg4Icon from "../../Images/bg-4";
import EditModeIcon from "../../Images/editModeIcon";
import Bg5Icon from "../../Images/bg-5";
import SummaryIcon from "../../Images/summaryIcon";
import Bg6Icon from "../../Images/bg-6";
import FeedbackIcon from "../../Images/feedbackIcon";
import Bg7Icon from "../../Images/bg-7";
import ChipBlock from "../ChipBlock";
import SubscribeBlock from "../SubscribeBlock";
import AboutUsBlock from "../AboutUsBlock";

const GeneralBlock = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <BlockWithTitle />
      <SimpleBlock
        title="Reviews and scores an essay draft in seconds"
        text="On average, it will take no more than 10 seconds to fully check your essay, after which you will see the full description"
        icon={<ThermometerIcon />}
        bgIcon={<Bg2Icon className={classes.bg1} />}
      />
      <SimpleBlock
        title="Assesses essay structure, flow, syntax, grammar"
        text="The tool covers the most significant sections that affect the quality of writing an essay"
        icon={<TabsIcon />}
        bgIcon={<Bg3Icon className={classes.bg2} />}
        reverse={true}
      />
      <SimpleBlock
        title="Gives instant feedback along with examples & lessons"
        text="You can immediately see an example of how to make changes more correctly. If you wish, you can take a short course prepared for you by the chсkr team"
        icon={<HireIcon />}
        bgIcon={<Bg4Icon className={classes.bg3} />}
      />
      <SimpleBlock
        title="Tailors feedback based on where the main gaps are"
        text="In a special section, you can see a short description of your work, which will be analyzed individually for you."
        icon={<FeedbackIcon />}
        bgIcon={<Bg7Icon className={classes.bg6} />}
        reverse={true}
      />
      <ChipBlock />
      <SimpleBlock
        title="Allows live editing and instant feedback on changes"
        text="You can at any time make changes to your essay right in the program and check how your score has changed"
        icon={<EditModeIcon />}
        bgIcon={<Bg5Icon className={classes.bg4} />}
        reverse={true}
      />
      <SimpleBlock
        title="Synthesizes feedback into a succinct summary report"
        text="You get the same final report as if your work was checked by a person with the proper level of education."
        icon={<SummaryIcon />}
        bgIcon={<Bg6Icon className={classes.bg5} />}
      />
      <SubscribeBlock />
      <AboutUsBlock />
    </div>
  );
};

export default injectStyles(styles)(GeneralBlock);
