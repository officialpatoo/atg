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
    provider: ',',
    providerId: 'google'
  },
  {
    id: 'llama3-groq-8b-8192-tool-use-preview',
    name: '99PACE',
    provider: ',',
    providerId: 'groq'
  },
  {
    id: process.env.NEXT_PUBLIC_AZURE_DEPLOYMENT_NAME || 'undefined',
    name: process.env.NEXT_PUBLIC_AZURE_DEPLOYMENT_NAME || 'Undefined',
    provider: 'Azure',
    providerId: 'azure'
  },
]
