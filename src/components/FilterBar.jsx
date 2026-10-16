const FILTERS = [
  { key: 'all', label: 'Toutes' },
  { key: 'active', label: 'Actives' },
  { key: 'done', label: 'Terminées' },
]

export default function FilterBar({ filter, onChange }) {
  return (
    <div className="filter-bar">
      {FILTERS.map((f) => (
        <button
          key={f.key}
          className={filter === f.key ? 'pill active' : 'pill'}
          onClick={() => onChange(f.key)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
