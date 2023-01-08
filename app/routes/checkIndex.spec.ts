import { expect, test } from 'vitest'

const aThing = (): Number => {
  return 2
}

test('aThing, a dummy function', () => {
  expect(aThing()).toBeGreaterThan(1)
  expect(aThing()).toEqual(2)
})
