import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import type { ReactElement } from 'react'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'GiveGrats',
  viewport: 'width=device-width,initial-scale=1'
})

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