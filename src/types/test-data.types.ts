import type { Transaction, User } from './api.types'

export type CreateUserPayload = Omit<User, 'id' | 'avatar'>

export type PartialTransaction = Partial<Transaction>

export class TransactionBuilder {
  private transaction: PartialTransaction = {}

  withAmount(amount: number): this {
    this.transaction.amount = amount
    return this
  }

  withCurrency(currency: Transaction['currency']): this {
    this.transaction.currency = currency
    return this
  }

  withStatus(status: Transaction['status']): this {
    this.transaction.status = status
    return this
  }

  withAccountId(accountId: string): this {
    this.transaction.accountId = accountId
    return this
  }

  build(): Transaction {
    if (
      this.transaction.amount === undefined ||
      !this.transaction.currency ||
      !this.transaction.status ||
      !this.transaction.accountId
    ) {
      throw new Error('TransactionBuilder: faltan campos requeridos')
    }

    return {
      id: crypto.randomUUID(),
      amount: this.transaction.amount,
      currency: this.transaction.currency,
      type: this.transaction.type ?? 'credit',
      status: this.transaction.status,
      timestamp: new Date().toISOString(),
      accountId: this.transaction.accountId,
      metadata: this.transaction.metadata,
    }
  }
}
      
// Factory that generates realistic Argentine financial transaction test data with random but valid amounts in ARS 
export function generateRandomTransaction(): Transaction {
  const amount = parseFloat((Math.random() * 10000).toFixed(2)) // Random amount between 0 and 10,000 ARS
  const currency: Transaction['currency'] = 'ARS'
  const type: Transaction['type'] = Math.random() > 0.5 ? 'credit' : 'debit'
  const statuses: Transaction['status'][] = ['pending', 'settled', 'failed', 'reversed']
  const status = statuses[Math.floor(Math.random() * 4)]
  const timestamp = new Date(Date.now() - Math.floor(Math.random() * 1000000000)).toISOString() // Random timestamp in the past
  const accountId = crypto.randomUUID()

  return {
    id: crypto.randomUUID(),
    amount,
    currency,
    type,
    status,
    timestamp,
    accountId,
    metadata: {
      description: `Random ${type} transaction`,
      reference: `REF-${crypto.randomUUID().slice(0, 8)}`,
    },
  }
}   