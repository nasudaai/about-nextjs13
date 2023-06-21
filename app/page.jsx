import Link from 'next/link'
const MvPages = () => <Link href="/page">Page in pages</Link>

export default function Page() {
  return (
    <>
      <h1>Page from app</h1>
      <MvPages />
    </>
  ) 
}