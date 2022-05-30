import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

export type LayoutPage<T = {}> = NextPage<T> & {
  getLayout: (page: ReactElement) => ReactNode
}
