import styles from '../styles/app.module.css'
import Link from "next/link"
import { Fast } from '../components/utils';

/*
const Fast = () => {
  return <span style={{color: 'blue'}}>fast: </span>
}
*/

const MvApp = () => <Link href="/" className={styles.link}>Page in app</Link>

const SecondPagePages = ({add}) =>
<Link href="/secondpage" className={styles.link}>{add}Second page in pages</Link>
export default function Page() {
  return (
    <>
      <h1>Page from pages</h1>
      <MvApp />    
      <SecondPagePages add={Fast()}/>
    </>
  )
}