import { createEvent, createStore } from 'stadux'
import { act, renderHook } from '@testing-library/react-hooks'
import { useStore } from '../index'

test('should be able to watch store change', () => {
  const increment = createEvent('increment')
  const decrement = createEvent('decrement')
  const resetCounter = createEvent('reset counter')
  const counter = createStore(0)
    .on(increment, state => state + 1)
    .on(decrement, state => state - 1)
    .reset(resetCounter)

  const { result } = renderHook(() => useStore(counter))
  expect(result.current).toBe(0)

  act(() => increment())
  expect(result.current).toBe(1)

  act(() => increment())
  expect(result.current).toBe(2)

  act(() => decrement())
  expect(result.current).toBe(1)

  act(() => resetCounter())
  expect(result.current).toBe(0)
})
