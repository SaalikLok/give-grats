import type { ActionFunction } from '@remix-run/node'
import { Form } from '@remix-run/react'
import type { ReactElement } from 'react'
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
  return (
    <main className='thatch-container'>
      <h1 className='title'>GiveGrats 🎁</h1>

      <Form method='post' className='grat-form'>
        <textarea placeholder='Grateful for...' name='grat' id='grat' cols={30} rows={10} />
        <button type='submit'>Give</button>
      </Form>

      <HowTo />
      <SiteFooter />
    </main>
  )
}
