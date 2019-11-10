import { useEffect, useState } from 'react'
import { Store } from 'stadux'

export const useStore = <S>(store: Store<S>) => {
  const [state, updateState] = useState<S>(store.getState())
  useEffect(() => {
    return store.watch(updateState)
  }, [store])
  return state
}
