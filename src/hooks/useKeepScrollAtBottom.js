import { useEffect } from 'react'

export default (ref, dependencies) => {
  // Always scrolls to bottom.
  useEffect(
    () =>
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        behavior: 'smooth',
      }),
    dependencies,
  )
}
