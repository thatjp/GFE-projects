import styles from './Link.module.css'

interface LinkProps {
  linkRoute: string;
  linkText: string;
  ariaLabel: string
}

const Link = ({linkText, linkRoute, ariaLabel}: LinkProps) => {
  return (
    <div className={styles.link} >
      <a aria-label={ariaLabel} className={styles.linkText} href={linkRoute}>{linkText}</a> 
      <img src="/images/arrow-right-line.svg" alt="arrow svg" />
    </div>
  )
}

export default Link;