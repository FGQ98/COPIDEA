// 6 presets de configuracion de cabina
// Cada preset define los 3 ejes: enfoque, horizonte, sesgo
export const cabinPresets = [
  { id: "tower", name: "Torre control", enfoque: "equilibrado", horizonte: "estrategico", sesgo: "oportunista", desc: "Análisis global equilibrado", isGuided: true },
  { id: "growth", name: "Growth mode", enfoque: "comercial", horizonte: "estrategico", sesgo: "expansivo", desc: "Aceleración" },
  { id: "dueDiligence", name: "Due Diligence", enfoque: "financiero", horizonte: "estrategico", sesgo: "conservador", desc: "Revisión exhaustiva" },
  { id: "pivot", name: "Pivot check", enfoque: "tecnico", horizonte: "tactico", sesgo: "oportunista", desc: "Cambios de dirección" },
  { id: "investment", name: "Ronda inversión", enfoque: "financiero", horizonte: "estrategico", sesgo: "expansivo", desc: "Preparar pitch" },
  { id: "crisis", name: "Crisis mode", enfoque: "operativo", horizonte: "tactico", sesgo: "conservador", desc: "Supervivencia" },
]
