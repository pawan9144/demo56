import type { ReactNode } from 'react'
import { Suspense } from 'react'
import { Loader } from '../components'

import { Footer } from './Footer'
import { Header } from './Header'

type IProps = {
  meta?: ReactNode
  children: ReactNode
}

export const Main: React.FC<IProps> = ({ meta, children }): JSX.Element => (
  <div className='w-full'>
    {meta}
    <Header />
    <Suspense fallback={<Loader />}>{children}</Suspense>
    <Footer />
  </div>
)
