import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import styles from '~/styles/main.css'
import type { ReactElement } from 'react'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'GiveGrats',
  viewport: 'width=device-width,initial-scale=1'
})

export const links = (): [{}] => {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function App (): ReactElement {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
