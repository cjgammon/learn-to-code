import { useCallback, useEffect, useState } from 'react'

// Stores the set of solved puzzle ids in localStorage so progress (and the
// unlock gating) survives a page refresh. No backend needed.

const STORAGE_KEY = 'code-quest-progress-v1'

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function useProgress() {
  const [solved, setSolved] = useState(load)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(solved))
    } catch {
      // localStorage might be unavailable (private mode) — progress just won't
      // persist, which is fine.
    }
  }, [solved])

  const markSolved = useCallback((id) => {
    setSolved((prev) => (prev.includes(id) ? prev : [...prev, id]))
  }, [])

  const isSolved = useCallback((id) => solved.includes(id), [solved])

  const resetProgress = useCallback(() => setSolved([]), [])

  return { solved, markSolved, isSolved, resetProgress }
}
