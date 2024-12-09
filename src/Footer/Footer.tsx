import { RiBlueskyLine, RiGithubLine } from "react-icons/ri";
import styles from "./Footer.module.css"
import { SiChromewebstore } from "react-icons/si";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import { useState } from "react";
import { MdFeedback } from "react-icons/md";

const Footer = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  return (
    <div
      className={styles.footer}
    >
      <a
        href="https://bsky.app/profile/aebel.bsky.social"
        target="_blank"
      >
        <RiBlueskyLine />
        Blue sky
      </a>

      <a
        href="https://github.com/aebel-shajan"
        target="_blank"
      >
        <RiGithubLine />
        Github
      </a>

      <a
        href="https://chromewebstore.google.com/search/aebel"
        target="_blank"
      >
        <SiChromewebstore />
        Check out my other extensions
      </a>

      <button
      onClick={() => setShowFeedback(true)}
      >
        <MdFeedback />
        Contact
      </button>

      {
        showFeedback &&
        <FeedbackForm
          onClose={() => setShowFeedback(false)} />
      }
    </div>
  );
}

export default Footer;