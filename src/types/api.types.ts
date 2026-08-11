export interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface Support {
  url: string
  text: string
}

export interface ApiResponse<T> {
  data: T
  support: Support
}

//Dominio financiero (portfolio propio)
export interface Transaction {
  id: string
  amount: number
  currency: 'ARS' | 'USD'
  type: 'credit' | 'debit'
  status: 'pending' | 'settled' | 'failed' | 'reversed'
  timestamp: string // ISO 8601 format      
  accountId: string
  metadata?: Record<string, unknown> // Optional field for additional information
}

export interface ReconciliationResult {
  transactionId: string
  expectedAmount: number
  actualAmount: number
  discrepancy: number
  status: 'match' | 'mismatch' | 'missing'
  checkedAt: string
}

// Interface for paginated list response with page, per_page, total, total_pages and data array
export interface PaginatedResponse<T> {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: T[]
  support: Support
  _meta?: Record<string, unknown>
}