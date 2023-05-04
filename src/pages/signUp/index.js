import styles from "./LoginScreen.module.scss";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import netflixLoginLogo from "../../assets/netflix-logo.png";
import SignUpScreen from "../../components/Login/Access/SignUpScreen";

export default function LoginScreenPage() {

  return (
    <div className={styles.loginScreen__container}>      
      <div className={styles.loginScreen}>
        <div className={styles.loginScreen__background}>
          <Link  href='/'>
            <Image
              className={styles.loginScreen__logo}
              src={netflixLoginLogo}
              alt="netflix login logo"
              placeholder="blur"
            />
          </Link>       
          <Link
            href="/signIn"
            className={styles.loginScreen__button}          
          >
            Sign In
          </Link>
        </div>

        <div className={styles.loginScreen__body}>        
            <SignUpScreen />    
        </div>

        <div className={styles.loginScreen__footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
