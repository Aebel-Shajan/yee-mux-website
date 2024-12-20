import { Panel, PanelProps } from "react-resizable-panels";
import styles from "./CustomePanel.module.css";

interface CustomPanelProps extends PanelProps {
  children: React.ReactNode
}

const CustomPanel = (
  {
    children,
    ...props
  }: CustomPanelProps
) => {
  return (
    <Panel
      {...props}
      className={styles.panel}>
      {children}
    </Panel>
  );
}

export default CustomPanel;