import Link from 'next/link';
import {Fast} from '../components/utils';
import styles from '../styles/app.module.css';
const BackToPagesRoot = ({add}) =>
<Link href="/page" className={styles.link}>{add}Back to Pages root</Link>

export default function SecondPagePages() {
  return (
    <div>
      <h1>Second page in pages</h1>
      <BackToPagesRoot add={Fast()}/>
    </div>
  )
}
