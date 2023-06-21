import Link from "next/link"
const MvApp = () => <Link href="/">Page in app</Link>

export default function Page() {
  return (
    <>
      <h1>Page from pages</h1>
      <MvApp />    
    </>
  )
}