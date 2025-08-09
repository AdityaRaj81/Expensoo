import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  transactions: [],
  loading: false,
  error: null,
  totalIncome: 0,
  totalExpenses: 0,
  currentBalance: 0,
}

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload
      // Calculate totals
      const income = action.payload
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0)
      const expenses = action.payload
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0)
      
      state.totalIncome = income
      state.totalExpenses = expenses
      state.currentBalance = income - expenses
    },
    addTransaction: (state, action) => {
      state.transactions.unshift(action.payload)
      // Recalculate totals
      const income = state.transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0)
      const expenses = state.transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0)
      
      state.totalIncome = income
      state.totalExpenses = expenses
      state.currentBalance = income - expenses
    },
    updateTransaction: (state, action) => {
      const index = state.transactions.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.transactions[index] = action.payload
        // Recalculate totals
        const income = state.transactions
          .filter(t => t.type === 'income')
          .reduce((sum, t) => sum + t.amount, 0)
        const expenses = state.transactions
          .filter(t => t.type === 'expense')
          .reduce((sum, t) => sum + t.amount, 0)
        
        state.totalIncome = income
        state.totalExpenses = expenses
        state.currentBalance = income - expenses
      }
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(t => t.id !== action.payload)
      // Recalculate totals
      const income = state.transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0)
      const expenses = state.transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0)
      
      state.totalIncome = income
      state.totalExpenses = expenses
      state.currentBalance = income - expenses
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
  },
})

export const {
  setLoading,
  setTransactions,
  addTransaction,
  updateTransaction,
  deleteTransaction,
  setError,
  clearError,
} = transactionSlice.actions

export default transactionSlice.reducer