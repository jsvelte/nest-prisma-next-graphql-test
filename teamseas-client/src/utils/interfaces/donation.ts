export interface Donation {
  id?: number
  count: number
  displayName: string
  email: string
  message?: string | null
  team?: string | null
  mobile?: string | null
  createdAt: string
}
