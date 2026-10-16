import { useState, useEffect } from 'react'

// Hook personnalisé : useState + useEffect synchronisés avec localStorage
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key)
      return saved !== null ? JSON.parse(saved) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // stockage indisponible : on ignore
    }
  }, [key, value])

  return [value, setValue]
}
