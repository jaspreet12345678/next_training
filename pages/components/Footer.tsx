import Link from 'next/link';
import styles from '../styles/footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/"><Image alt="logo" sizes="100vw" src={"https://equalengineers.com/wp-content/uploads/2024/04/dummy-logo-5b.png"} width={0} height="70" style={{width:'20%'}} className="p-mr-2" /></Link>
        </div>
        <div className={styles.social}>
            <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
