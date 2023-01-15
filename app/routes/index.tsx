import type { ActionFunction } from '@remix-run/node'
import type { ReactElement } from 'react'
import { useState } from 'react'
import GratForm from '~/components/GratForm'
import HowTo from '~/components/HowTo'
import SiteFooter from '~/components/SiteFooter'
import { createGratitude } from '~/models/gratitude.server'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const grat = formData.get('grat')?.toString()
  if (grat !== undefined) {
    await createGratitude(grat)
  }

  console.log({ grat })
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
    <main className='thatch-container--super-narrow'>
      <h1 className='title'>GiveGrats 🎁</h1>

      {display}

      <p className='display-text' onClick={() => setDisplayForm(!displayForm)}>{displayText}</p>

      <SiteFooter />
    </main>
  )
}
