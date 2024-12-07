import styles from "./ResizeHandle.module.css"
import { PanelResizeHandle } from 'react-resizable-panels';

const ResizeHandle = () => {
  return <PanelResizeHandle className={styles.resizeHandle} />
};

export default ResizeHandle;