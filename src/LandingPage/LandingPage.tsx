import FAQ from "./FAQ/FAQ";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import styles from "./LandingPage.module.css"

const LandingPage = () => {
  return ( 
    <div className={styles.landingPage}>
      <Hero />
      <Features />
      <FAQ />
    </div>
   );
}
 
export default LandingPage;