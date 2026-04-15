// Utilidades de fecha
export function daysSince(date) {
  if (!date) return Infinity
  const now = new Date()
  const then = date.toDate ? date.toDate() : new Date(date)
  return Math.floor((now - then) / (1000 * 60 * 60 * 24))
}

export function formatDate(date) {
  if (!date) return ''
  const d = date.toDate ? date.toDate() : new Date(date)
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
}
