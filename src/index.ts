import { useEffect, useState } from 'react'
import { BaseStore } from 'stadux'

export const useStore = <S>(store: BaseStore<S>) => {
  const [state, updateState] = useState<S>(store.getState())
  useEffect(() => {
    return store.watch(updateState)
  }, [store])
  return state
}
