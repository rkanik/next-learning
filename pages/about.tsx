import { ReactElement } from 'react'
import { DefaultLayout } from '../components/layouts'
import type { LayoutPage } from '../types'

const About: LayoutPage = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

About.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default About
