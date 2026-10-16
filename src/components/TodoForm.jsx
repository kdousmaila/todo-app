import { useState, useRef, useEffect } from 'react'

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState('')
  const inputRef = useRef(null)

  // Étape 6 : focus automatique sur le champ au chargement
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const value = text.trim()
    if (!value) return
    onAdd(value)
    setText('')
    inputRef.current?.focus() // on remet le focus après l'ajout
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nouvelle tâche…"
      />
      <button type="submit" className="btn-primary">
        Ajouter
      </button>
    </form>
  )
}
