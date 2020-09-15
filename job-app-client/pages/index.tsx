import Head from 'next/head';
import styles from '../styles/pages/index.module.scss';
import { lightBlueBG } from '../util/inline-styles';
// @ts-ignore
import Typewriter from 'typewriter-effect';

const typewriterOptions = {
  strings: ['Product Designer.', 'Software Engineer.', 'HR Manager.', 'Data Scientist.', 'Account Manager.', 'DevOps Engineer.', 'UX Researcher.'],
  autoStart: true,
  loop: true,
  delay: 120,
  deleteSpeed: 50
}

export default function Index() {
  return (
    <div className={styles.IndexPageContainer}>
      <Head>
        <title>Jaba</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{lightBlueBG}</style>
      </Head>
      <div className={styles.LogoContainer}>
        <img className={styles.LogoContainerLogo} src="/jaba-logo-blue.png" alt="Jaba logo"/>
        <h1 className={styles.LogoContainerTitle}>Jaba</h1>
      </div>
      <h6 className={styles.TaglineText}>
        Find your next great&nbsp;
        <span className={styles.Bold}>
          <Typewriter className={styles.Typewriter} options={typewriterOptions}/>
        </span>
      </h6>
      
      <form className={styles.AuthForm}>
        <h3 className={styles.AuthFormTitleText}>Let’s get started</h3>
        <input className={styles.AuthInput} placeholder="Work Email" type="text"></input>
        <input className={styles.AuthInput} placeholder="Password" type="password"></input>
        <div className={styles.AuthSubmitButtonsContainer}>
          <button className={[styles.AuthButton, styles.ButtonPrimary].join(' ')}>Sign Up</button>
          <button className={[styles.AuthButton, styles.ButtonSecondary].join(' ')}>Log In</button>
        </div>
      </form>
    </div>
  )
}
