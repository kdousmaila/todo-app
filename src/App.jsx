import { useReducer, useState, useMemo, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import useLocalStorage from './hooks/useLocalStorage'
import TodoForm from './components/TodoForm'
import FilterBar from './components/FilterBar'
import TodoList from './components/TodoList'

const INITIAL_TODOS = [
  { id: 1, text: 'Revoir useState', done: true },
  { id: 2, text: 'Coder le reducer', done: false },
  { id: 3, text: 'Ajouter useLocalStorage', done: false },
]

export default function App() {
  // Persistance : on lit/écrit les tâches dans localStorage
  const [stored, setStored] = useLocalStorage('todos', INITIAL_TODOS)

  // Étape 3 : état géré avec useReducer
  const [todos, dispatch] = useReducer(todoReducer, stored)

  // Chaque changement des tâches est sauvegardé
  useEffect(() => {
    setStored(todos)
  }, [todos, setStored])

  // Étape 4 : filtre avec useState
  const [filter, setFilter] = useState('all')

  // Étape 4 : liste visible avec useMemo
  const visibleTodos = useMemo(() => {
    if (filter === 'active') return todos.filter((t) => !t.done)
    if (filter === 'done') return todos.filter((t) => t.done)
    return todos
  }, [todos, filter])

  // Étape 6 : compteur de tâches restantes
  const remaining = useMemo(
    () => todos.filter((t) => !t.done).length,
    [todos]
  )

  return (
    <main className="page">
      <section className="card">
        <h1>Mes tâches</h1>
        <TodoForm onAdd={(text) => dispatch({ type: 'ADD', text })} />
        <FilterBar filter={filter} onChange={setFilter} />
        <TodoList
          todos={visibleTodos}
          onToggle={(id) => dispatch({ type: 'TOGGLE', id })}
          onDelete={(id) => dispatch({ type: 'DELETE', id })}
        />
        <p className="remaining">
          {remaining} tâche{remaining > 1 ? 's' : ''} restante
          {remaining > 1 ? 's' : ''}
        </p>
      </section>
    </main>
  )
}
