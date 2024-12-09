import styles from "./FAQ.module.css"

const FAQ = () => {
  return (
    <div
      id="faq"
      className={styles.faq}>
      <div className={styles.title}>
        FAQ
      </div>

      <div className={styles.faqContainer}>

        <details name="faq">
          <summary>What is Yee Mux?</summary>
          <p>Yee Mux is a Chrome extension designed to revolutionize your multitasking experience. Inspired by the popular terminal multiplexer tmux, Yee Mux allows you to split your browser’s sidepanel into multiple functional zones using iframes. Perfect for students, professionals, and casual browsers who want to streamline their workflow without juggling multiple tabs.</p>
        </details>

        <details name="faq">
          <summary>How can Yee Mux improve my multitasking in Chrome?</summary>
          <p>Yee Mux transforms your sidepanel into a productivity hub. Access tools like a clock, Wikipedia, notes, YouTube videos, and even games—all without switching tabs. You can focus on your tasks without interruptions, keeping everything you need in one place.</p>
        </details>

        <details name="faq">
          <summary>What features does Yee Mux offer for sidepanel multitasking?</summary>
          <ul>
            <li><strong>Clock:</strong> Stay on schedule while working.</li>
            <li><strong>Wikipedia Access:</strong> Quickly look up information on the sidepanel.</li>
            <li><strong>Real-Time Notes:</strong> Take notes without leaving your browser.</li>
            <li><strong>Embedded YouTube Videos:</strong> Watch and work at the same time.</li>
            <li><strong>Subway Surfers:</strong> Take a fun break right in the sidepanel.</li>
            <li><strong>Prebuilt Layouts:</strong> Load custom layouts to arrange your sidepanel for maximum productivity.</li>
          </ul>
        </details>

        <details name="faq">
          <summary>Is Yee Mux free for Chrome users?</summary>
          <p>Yes, Yee Mux is 100% free to use, making it an accessible solution for anyone looking to boost their productivity.</p>
        </details>

        <details name="faq">
          <summary>Why make this?</summary>
          <div>
            I was having trouble with procrastination 😞. I would spend hours watching youtube shorts/ instagram on my phone ☹️.
            With this extension I can watch tiktok, youtube, instagram all at the same time without having to look at my phone. Problem solved 😀
          </div>
        </details>
      </div>

    </div>
  );
}

export default FAQ;
