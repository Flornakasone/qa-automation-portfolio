import {User, Transaction}  from './api.types'

// Utility types — nuevos tipos derivados de los que ya tenés
export type UserSummary =   Pick<User, 'id' | 'email'>
export type PartialTransaction = Partial<Transaction>
export type TransactionWithoutMetadata = Omit<Transaction, 'metadata'> 

// Type Guard — valida en runtime si un objeto es User
export function isUser(obj: unknown): obj is User {
    return(
        typeof obj === 'object' &&
        obj !== null &&
        'id' in obj &&
        'email' in obj &&
        'first_name' in obj &&
        'last_name' in obj 
    )
}

// Type Guard — valida si es Transaction
export function isTransaction(obj: unknown): obj is Transaction {
    return(
        typeof obj === 'object' &&
        obj !== null &&
        'id' in obj &&
        'amount' in obj &&
        'currency' in obj &&
        'type' in obj &&
        'status' in obj
    )
}