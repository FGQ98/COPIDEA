// Calculo de media ponderada del vuelo
// peso 1-5 por hito, score 0-100 por hito
export function calculateHealthScore(milestones) {
  const scored = milestones.filter(m => m.score != null)
  if (scored.length === 0) return null

  const totalWeight = scored.reduce((sum, m) => sum + (m.weight || 1), 0)
  const weightedSum = scored.reduce((sum, m) => sum + (m.score * (m.weight || 1)), 0)

  return Math.round(weightedSum / totalWeight)
}
