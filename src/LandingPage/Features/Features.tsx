import { Panel, PanelGroup } from "react-resizable-panels";
import styles from "./Features.module.css"
import CustomPanel from "../../CustomPanel/CustomPanel";
import ResizeHandle from "../../ResizeHandle/ResizeHandle";
import preview1 from "../../assets/preview-1.png"
import preview2 from "../../assets/preview-2.png"
import preview3 from "../../assets/preview-3.png"


const Features = () => {
  const previewSize = 40
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
              <div className={styles.featureContainer}>
                <h4>
                  Embed multiple youtube videos
                </h4>
                <p>
                  With Yeemux you can embed multiple playlists, videos and livestreams 
                  in chromes sidepanel.
                </p>
              </div>
            </CustomPanel>
            <ResizeHandle />
            <CustomPanel defaultSize={previewSize}>
              <img src={preview1} />
            </CustomPanel>
          </PanelGroup>
        </Panel>
        <ResizeHandle />
        <Panel>
          <PanelGroup direction="horizontal">
            <CustomPanel defaultSize={previewSize}>
              <img src={preview2} />
            </CustomPanel>
            <ResizeHandle />
            <CustomPanel>
            <div className={styles.featureContainer}>
                <h4>
                  Stay on top of things
                </h4>
                <p>
                  Keep up to date with the current happenings while also doing your work
                </p>
              </div>
            </CustomPanel>
          </PanelGroup>
        </Panel>
        <ResizeHandle />
        <Panel>
          <PanelGroup direction="horizontal">
            <CustomPanel>
            <div className={styles.featureContainer}>
                <h4>
                  Open Yeemux in a new tab
                </h4>
                <p>
                  10x your productivity by opening Yeemux in a new tab and managing your tasks efficiently.
                  Seamlessly switch between your work and entertainment without losing focus.
                </p>
              </div>
            </CustomPanel>
            <ResizeHandle />
            <CustomPanel defaultSize={previewSize}>
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