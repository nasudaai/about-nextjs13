import styles from '../styles/app.module.css';
import Link from 'next/link';
import { Fast } from '../components/utils';
//link
const MvPages = () => <Link className={styles.link} href="/page">Page in pages</Link>
//link
const SecondPageApp = ({add}) => 
<Link className={styles.link} href="/second">{add}Second page in app</Link>

export default function Page() {
  return (
    <>
      <h1>Page from app</h1>
      <MvPages />
      <SecondPageApp add={Fast()}/>
    </>
  ) 
}