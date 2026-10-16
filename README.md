# Mini-projet : Todo App (React + Hooks)

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir l'adresse affichée (par défaut http://localhost:5173).

## Composants

```
TodoApp (App.jsx)
├── TodoForm
├── FilterBar
└── TodoList
    └── TodoItem ×n
```

## Hooks utilisés

| Hook | Où | Rôle |
|------|----|------|
| `useReducer` | `App.jsx` + `todoReducer.js` | ajouter, basculer, supprimer |
| `useState` | `App.jsx`, `TodoForm.jsx` | filtre, texte du champ |
| `useMemo` | `App.jsx` | liste visible, compteur restantes |
| `useRef` | `TodoForm.jsx` | focus du champ |
| `useEffect` | `App.jsx`, `TodoForm.jsx`, `useLocalStorage.js` | sauvegarde, focus au chargement |
| `useLocalStorage` (hook perso) | `hooks/useLocalStorage.js` | garder les tâches après rechargement |

## Étapes de réalisation

1. **Initialiser** : projet Vite (template react), nettoyage de App.jsx
2. **Découper** : TodoApp, TodoForm, FilterBar, TodoList, TodoItem
3. **Gérer l'état** : useReducer (ajouter, basculer, supprimer)
4. **Filtrer** : useState pour le filtre, useMemo pour la liste visible
5. **Persister** : useLocalStorage
6. **Finitions** : useRef pour le focus, compteur de tâches restantes
