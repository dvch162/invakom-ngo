import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Footer.module.css';
import logo from '@/public/logo.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* <div className={styles.col}>
          <div>
            <Image src={logo} alt="Logo" />
          <h3>Громадська організація «Одеське обласне об’єднання
працездатних інвалідів «Інваком»</h3>
            </div>
          <ul>
            <li><Link href="/edrpou">ЄДРПОУ 43165052</Link></li>
          </ul>
        </div> */}
        <div className={`${styles.col} ${styles.logo}`}>
          <Image src={logo} alt="Logo of Non-goverment organization" className={styles['image']} />
          <h3>Громадська організація
          «Одеське обласне об’єднання
          працездатних інвалідів «Інваком»</h3>
          <ul>
            <li><Link href="/edrpou">ЄДРПОУ 43165052</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Про нас</h3>
          <ul>
          <li><Link href="/StatuteDocs">Статутні документи</Link></li>
            <li><Link href="/FinStat">Фінансова звітність</Link></li>
            <li><Link href="/Reports">Звіти про результати діяльності</Link></li>
          
          </ul>
        </div>
        <div className={styles.col}>
          <h3>Захист прав</h3>
          <ul>
            <li><Link href="/photos">Фотоархів</Link></li>
            <li><Link href="/help">Адресна допомога</Link></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3>Новини</h3>
          <ul>
            <li><Link href="/news">Останні новини</Link></li>
            <li><Link href="/articles">Статті</Link></li>
            <li><Link href="/expertise">Громадська експертиза</Link></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h3>Партнери</h3>
          <ul>
            <li><Link href="/partners">Наші партнери</Link></li>
            <li><Link href="/privacy">Політика конфіденційності</Link></li>
            <li><Link href="/processing">Правила обробки персональних даних</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
