import { Panel, PanelGroup } from "react-resizable-panels";
import CustomPanel from "../../CustomPanel/CustomPanel";
import styles from "./Hero.module.css";
import ResizeHandle from "../../ResizeHandle/ResizeHandle";

const Hero = () => {
  return (
    <div className={styles.hero}>
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
          Video goes here
        </CustomPanel>
      </PanelGroup>
    </div >
  );
}

export default Hero;