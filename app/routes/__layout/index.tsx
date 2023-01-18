import type { ActionFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import type { ReactElement } from 'react'
import { useState } from 'react'
import GratForm from '~/components/GratForm'
import HowTo from '~/components/HowTo'
import { createGratitude } from '~/models/gratitude.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const grat = formData.get('grat')?.toString()
  if (grat !== undefined) {
    await createGratitude(grat)
  }

  console.log(`created a gratitude: ${grat}`)
  return { ok: true }
}

export default function Index (): ReactElement {
  const [displayForm, setDisplayForm] = useState(true)

  let display
  let displayText

  if (displayForm) {
    display = <GratForm />
    displayText = "What's this about?"
  } else {
    display = <HowTo />
    displayText = 'Give a Grat'
  }

  return (
    <div>
      {display}

      <p className='display-text' onClick={() => setDisplayForm(!displayForm)}>{displayText}</p>
      <Link to='/grat'>See a Grat</Link>
    </div>
  )
}
