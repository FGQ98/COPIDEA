// Pesos del comite de 8 expertos
// LOGICA INTERNA — nunca se expone al frontend
// La torre habla como voz unica

export const baseWeights = {
  estratega: 17,
  financiera: 15,
  abogadoDiablo: 13,
  producto: 15,
  inversor: 12,
  quemado: 10,
  lateral: 9,
  etico: 9,
}

// Modificadores por eje — se suman a los pesos base
export const enfoqueModifiers = {
  equilibrado:  { estratega: 0, financiera: 0, abogadoDiablo: 0, producto: 0, inversor: 0, quemado: 0, lateral: 0, etico: 0 },
  comercial:    { estratega: -3, financiera: -2, abogadoDiablo: -4, producto: 5, inversor: 8, quemado: 0, lateral: -2, etico: -2 },
  financiero:   { estratega: -4, financiera: 9, abogadoDiablo: 0, producto: -5, inversor: 6, quemado: 0, lateral: -4, etico: -2 },
  tecnico:      { estratega: -6, financiera: -6, abogadoDiablo: -1, producto: 7, inversor: -2, quemado: 4, lateral: 5, etico: -1 },
  legal:        { estratega: -3, financiera: -3, abogadoDiablo: 9, producto: -7, inversor: -2, quemado: 2, lateral: -1, etico: 5 },
  operativo:    { estratega: -3, financiera: 0, abogadoDiablo: -1, producto: 1, inversor: -2, quemado: 8, lateral: 1, etico: -4 },
}

export const horizonteModifiers = {
  estrategico: { estratega: 8, financiera: 2, abogadoDiablo: 4, producto: -2, inversor: 4, quemado: -6, lateral: 2, etico: -2 },
  tactico:     { estratega: -4, financiera: 4, abogadoDiablo: -2, producto: 6, inversor: -4, quemado: 8, lateral: -2, etico: -2 },
}

export const sesgoModifiers = {
  expansivo:   { estratega: 4, financiera: -4, abogadoDiablo: -6, producto: 4, inversor: 8, quemado: -2, lateral: 6, etico: -4 },
  oportunista: { estratega: 0, financiera: 2, abogadoDiablo: 4, producto: 4, inversor: 6, quemado: 4, lateral: 2, etico: -2 },
  conservador: { estratega: 2, financiera: 8, abogadoDiablo: 10, producto: -2, inversor: -4, quemado: 2, lateral: -8, etico: 4 },
}
