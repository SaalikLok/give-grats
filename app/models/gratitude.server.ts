import type { Gratitude } from '@prisma/client'
import { prisma } from '~/db.server'

export async function createGratitude (content: string): Promise<Gratitude> {
  return await prisma.gratitude.create({ data: { content } })
}

export function getRandomGratitude (): string {
  let grat = ''

  prisma.gratitude.findMany({ take: 10 }).then(grats => {
    const gratsContents = grats.map(grat => grat.content)
    grat = randomGrat(gratsContents)
  }).catch(err => {
    console.error(err)
    return 'uh oh, something went wrong!'
  })

  return grat
}

export function randomGrat (grats: string[]): string {
  return grats[Math.floor(Math.random() * grats.length)]
}
