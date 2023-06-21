import Link from 'next/link';
import {Fast} from '../../components/utils';
import styles from '../../styles/app.module.css';

const BackAppRoot = ({add}) => <Link href="/" className={styles.link}>{add}app root</Link>

export default function SecondPage() {
  return (
    <div>
      <h1>Second page in app</h1>
      <BackAppRoot add={Fast()} />
    </div>
  )
}