export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
  {
    id: 'gemini-2.0-flash-exp',
    name: 'PATOOWORLD',
    provider: 'Gemini',
    providerId: 'google'
  },
  {
  id: 'gemini-1.5-pro-002',
  name: '99PACE',
  provider: 'Gemini',
  providerId: 'google'
  },
]
