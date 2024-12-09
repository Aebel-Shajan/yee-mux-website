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
        <Panel defaultSize={40}>

          <PanelGroup direction="vertical">
            <CustomPanel>
              <div className={styles.heroText}>
                <h3>
                  Multitask directly from the sidepanel
                </h3>
                <p>
                  Enhance your productivity by browsing multiple websites without switching tabs. 
                </p>
              </div>
            </CustomPanel>
            <ResizeHandle />
            <CustomPanel defaultSize={30}>
              <a 
              href="https://chromewebstore.google.com/detail/yee-mux/fjieejlgkgfmcoelccgobbpcngpnaoph"
              target="_blank">
                Download the extension now
              </a>
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