// Reglas de alerta — operativas + coherencia manifiesto
// Cada regla: { id, type, condition (descripcion), severity, message, manifestoPrinciple?, _expertIds (interno) }
export const alertRules = [
  // Operativas
  { id: "op-1", type: "deviation", condition: "milestone.daysLate > 7", severity: "yellow", message: "Hito retrasado más de una semana." },
  { id: "op-2", type: "deviation", condition: "milestone.daysLate > 21", severity: "red", message: "Hito retrasado más de 3 semanas." },
  { id: "op-3", type: "budget", condition: "budget.deviation > 0.2", severity: "yellow", message: "Presupuesto desviado más de un 20%." },
  { id: "op-4", type: "budget", condition: "budget.deviation > 0.5", severity: "red", message: "Presupuesto desviado más de un 50%." },
  { id: "op-5", type: "inactivity", condition: "flight.daysSinceActivity > 14", severity: "yellow", message: "¿Sigues volando? Llevas 14 días sin actividad." },
  { id: "op-6", type: "inactivity", condition: "flight.daysSinceActivity > 30", severity: "red", message: "Tu vuelo está parado. 30 días sin actividad." },
  { id: "op-7", type: "success", condition: "sprint.allCompleted", severity: "green", message: "Buen rumbo. Todos los hitos del sprint completados." },
  // Coherencia manifiesto
  { id: "mf-1", type: "coherence", condition: "principle1 + noTracking > 14d", severity: "yellow", message: "Aceptaste que las ideas sin ejecución son humo. Tu vuelo lleva 14 días sin actividad.", manifestoPrinciple: 1 },
  { id: "mf-2", type: "coherence", condition: "principle2 + noReview > 30d", severity: "yellow", message: "Aceptaste iterar tus ideas. Llevas 30 días sin revisar en la caja negra.", manifestoPrinciple: 2 },
  { id: "mf-4", type: "coherence", condition: "principle4 + noCriticalReview > 21d", severity: "yellow", message: "Aceptaste someter tu idea al pensamiento crítico. Llevas 21 días sin revisión crítica.", manifestoPrinciple: 4 },
  { id: "mf-5", type: "coherence", condition: "principle5 + noStarted > 14d", severity: "yellow", message: "Aceptaste no dudar en arrancar. Tienes hitos definidos pero ninguno iniciado.", manifestoPrinciple: 5 },
  { id: "mf-9", type: "coherence", condition: "principle9 + criticalNoPlanB", severity: "red", message: "Aceptaste tener siempre plan B. Tienes un hito crítico sin alternativa.", manifestoPrinciple: 9 },
  { id: "mf-10", type: "coherence", condition: "principle10 + highSpendNoMilestones", severity: "yellow", message: "Aceptaste equivocarte rápido y barato. Llevas gastado más del 30% sin completar ningún hito.", manifestoPrinciple: 10 },
]
