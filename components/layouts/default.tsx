import Link from 'next/link'
import { useEffect } from 'react'

const DefaultLayout = ({ children }: any) => {
  useEffect(() => {
    console.log('onMount::DefaultLayout')
    return () => {
      console.log('onUnMount::DefaultLayout')
    }
  }, [])

  return (
    <>
      <nav>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </li>
      </nav>

      {children}
    </>
  )
}

export { DefaultLayout }
