import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import transactionService from '../../services/transactionService'

const initialState = {
  transactions: [],
  loading: false,
  error: null,
  totalIncome: 0,
  totalExpenses: 0,
  currentBalance: 0,
  dashboardData: {
    totalIncome: 0,
    totalExpenses: 0,
    balance: 0,
    recentTransactions: [],
    monthlyData: [],
    categoryData: []
  }
};

// ✅ Async thunk for dashboard data
export const fetchDashboardData = createAsyncThunk(
  'transactions/fetchDashboardData',
  async (_, { rejectWithValue }) => {
    try {
      const data = await transactionService.getDashboardData()
      return data
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch dashboard data')
    }
  }
)

// const transactionSlice = createSlice({
//   name: 'transactions',
//   initialState,
//   reducers: {
//     setLoading: (state, action) => {
//       state.loading = action.payload
//     },
//     setTransactions: (state, action) => {
//       state.transactions = action.payload
//       // Calculate totals
//       const income = action.payload
//         .filter(t => t.type === 'income')
//         .reduce((sum, t) => sum + t.amount, 0)
//       const expenses = action.payload
//         .filter(t => t.type === 'expense')
//         .reduce((sum, t) => sum + t.amount, 0)

//       state.totalIncome = income
//       state.totalExpenses = expenses
//       state.currentBalance = income - expenses
//     },
//     addTransaction: (state, action) => {
//       state.transactions.unshift(action.payload)
//       // Recalculate totals
//       const income = state.transactions
//         .filter(t => t.type === 'income')
//         .reduce((sum, t) => sum + t.amount, 0)
//       const expenses = state.transactions
//         .filter(t => t.type === 'expense')
//         .reduce((sum, t) => sum + t.amount, 0)

//       state.totalIncome = income
//       state.totalExpenses = expenses
//       state.currentBalance = income - expenses
//     },
//     updateTransaction: (state, action) => {
//       const index = state.transactions.findIndex(t => t.id === action.payload.id)
//       if (index !== -1) {
//         state.transactions[index] = action.payload
//         // Recalculate totals
//         const income = state.transactions
//           .filter(t => t.type === 'income')
//           .reduce((sum, t) => sum + t.amount, 0)
//         const expenses = state.transactions
//           .filter(t => t.type === 'expense')
//           .reduce((sum, t) => sum + t.amount, 0)

//         state.totalIncome = income
//         state.totalExpenses = expenses
//         state.currentBalance = income - expenses
//       }
//     },
//     deleteTransaction: (state, action) => {
//       state.transactions = state.transactions.filter(t => t.id !== action.payload)
//       // Recalculate totals
//       const income = state.transactions
//         .filter(t => t.type === 'income')
//         .reduce((sum, t) => sum + t.amount, 0)
//       const expenses = state.transactions
//         .filter(t => t.type === 'expense')
//         .reduce((sum, t) => sum + t.amount, 0)

//       state.totalIncome = income
//       state.totalExpenses = expenses
//       state.currentBalance = income - expenses
//     },
//     setError: (state, action) => {
//       state.error = action.payload
//     },
//     clearError: (state) => {
//       state.error = null
//     },
//   },
// })


const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload
      calculateTotals(state)
    },
    addTransaction: (state, action) => {
      state.transactions.unshift(action.payload)
      calculateTotals(state)
    },
    updateTransaction: (state, action) => {
      const index = state.transactions.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state.transactions[index] = action.payload
        calculateTotals(state)
      }
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(t => t.id !== action.payload)
      calculateTotals(state)
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false
        state.dashboardData = action.payload

        // ✅ Use backend totals if available
        if (action.payload?.totalIncome !== undefined) {
          state.totalIncome = action.payload.totalIncome
          state.totalExpenses = action.payload.totalExpenses
          state.currentBalance = action.payload.currentBalance
        }
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

// ✅ Helper function for totals
function calculateTotals(state) {
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