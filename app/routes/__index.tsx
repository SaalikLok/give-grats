import { Outlet } from '@remix-run/react'
import type { ReactElement } from 'react'
import SiteFooter from '~/components/SiteFooter'

export default function Index (): ReactElement {
  return (
    <main className='thatch-container--super-narrow'>
      <h1 className='title'>GiveGrats 🎁</h1>

      <Outlet />

      <SiteFooter />
    </main>
  )
}
