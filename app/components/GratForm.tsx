import { Form } from '@remix-run/react'
import type { ReactElement } from 'react'

export default function GratForm (): ReactElement {
  return (
    <Form reloadDocument method='post' className='grat-form'>
      <textarea placeholder='Grateful for...' name='grat' id='grat' cols={30} rows={10} />
      <button type='submit'>Give</button>
    </Form>
  )
}
