import { expect, test } from 'vitest'

const aThing = () => {
  return 1
}

test('aThing, a dummy function', () => {
  expect(aThing()).toBeGreaterThan(0)
  expect(aThing()).toEqual(1)
})
