import { Panel, PanelGroup } from "react-resizable-panels";
import styles from "./Navbar.module.css"
import ResizeHandle from "../ResizeHandle/ResizeHandle";
import logo from "../assets/icon.png"

const Navbar = () => {
  return (
    <div
      className={styles.navbar}
    >
      <PanelGroup
        direction="horizontal"
      >
        <Panel
          defaultSize={10}
          className={styles.panel}>
          <img src={logo} />
        </Panel>
        <ResizeHandle />
        <Panel className={[styles.panel, styles.title].join(' ')}>
          Yee mux
        </Panel>
        <ResizeHandle />
        <Panel
        defaultSize={20}>
          <PanelGroup direction="horizontal">
            <Panel className={styles.panel}>
              <a href="#home">
                Home
              </a>
            </Panel>
            <ResizeHandle />
            <Panel className={styles.panel}>
              <a href="#features">
                Features
              </a>
            </Panel>
            <ResizeHandle />
            <Panel className={styles.panel}>
              <a href="#faq">
                FAQ
              </a>
            </Panel>
          </PanelGroup>
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default Navbar;