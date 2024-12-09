import { Panel, PanelGroup } from "react-resizable-panels";
import CustomPanel from "../../CustomPanel/CustomPanel";
import styles from "./Hero.module.css";
import ResizeHandle from "../../ResizeHandle/ResizeHandle";

const Hero = () => {
  return (
    <div 
    className={styles.hero}
    id="home"
    >
      <PanelGroup direction="horizontal">
        <Panel>

          <PanelGroup direction="vertical">
            <CustomPanel>
              Mutlitask from the sidepanel
            </CustomPanel>
            <ResizeHandle />
            <CustomPanel>
              Download the extension now
            </CustomPanel>
          </PanelGroup>
        </Panel>


        <ResizeHandle />
        <CustomPanel>
          <img src="https://i.imgur.com/e0Zingp.gif" />
        </CustomPanel>
      </PanelGroup>
    </div >
  );
}

export default Hero;