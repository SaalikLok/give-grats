import { Link, useLoaderData } from '@remix-run/react'
import type { ReactElement } from 'react'
import { getRandomGratitude } from '~/models/gratitude.server'

export async function loader (): Promise<string> {
  return await getRandomGratitude()
}

export default function Grat (): ReactElement {
  const gratitude = useLoaderData<typeof loader>()
  console.log(`IN ROUTE: ${gratitude}`)
  return (
    <div>
      <div className='gratitude-box'>
        <p>{gratitude}</p>
      </div>

      <Link to='/'>Give a Grat</Link>
    </div>
  )
}
