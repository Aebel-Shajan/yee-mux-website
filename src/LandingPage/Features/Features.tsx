import { Panel, PanelGroup } from "react-resizable-panels";
import styles from "./Features.module.css"
import CustomPanel from "../../CustomPanel/CustomPanel";
import ResizeHandle from "../../ResizeHandle/ResizeHandle";
import preview1 from "../../assets/preview-1.png"
import preview2 from "../../assets/preview-2.png"
import preview3 from "../../assets/preview-3.png"


const Features = () => {
  return (
    <div 
    className={styles.features}
    id="features"
    
    >
      <div className={styles.title}>
        Features
      </div>
      <PanelGroup direction="vertical">
        <Panel>
          <PanelGroup direction="horizontal">
            <CustomPanel>
              Why do 1 thing when you can do many thing
            </CustomPanel>
            <ResizeHandle />
            <CustomPanel>
              <img src={preview1} />
            </CustomPanel>
          </PanelGroup>
        </Panel>
        <ResizeHandle />
        <Panel>
          <PanelGroup direction="horizontal">

            <CustomPanel>
              <img src={preview2} />
            </CustomPanel>
            <ResizeHandle />
            <CustomPanel>
              Embed multiple youtube videos
            </CustomPanel>
          </PanelGroup>
        </Panel>
        <ResizeHandle />
        <Panel>
          <PanelGroup direction="horizontal">
            <CustomPanel>
              Why do 1 thing when you can do many thing
            </CustomPanel>
            <ResizeHandle />
            <CustomPanel>
              <img src={preview3} />
            </CustomPanel>
          </PanelGroup>
        </Panel>
        <ResizeHandle />

      </PanelGroup>
    </div>
  );
}

export default Features;