import { Link, useLoaderData } from '@remix-run/react'
import type { ReactElement } from 'react'
import SiteFooter from '~/components/SiteFooter'
import { getRandomGratitude } from '~/models/gratitude.server'

export async function loader (): Promise<string> {
  return await getRandomGratitude()
}

export default function Grat (): ReactElement {
  const gratitude = useLoaderData<typeof loader>()
  return (
    <div>
      <div className='gratitude-box'>
        <p>{gratitude}</p>
      </div>

      <Link to='/'>Give a Grat</Link>
    </div>
  )
}
