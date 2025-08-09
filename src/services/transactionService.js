import api from './api'

const transactionService = {

  async getTransactions(params = {}) {
    // Remove any keys with null, undefined, or blank values
    const cleanedParams = Object.fromEntries(
      Object.entries(params).filter(
        ([, value]) => value !== null && value !== undefined && value !== ''
      )
    )

    const hasFilters = cleanedParams.search || cleanedParams.type || cleanedParams.category || cleanedParams.dateFrom || cleanedParams.dateTo

    const endpoint = hasFilters ? '/transactions/filter' : '/transactions'

    const response = await api.get(endpoint, { params: cleanedParams })
    return response.data
  },




  // async getTransactions(params = {}) {
  //   const hasFilters = params.search || params.type || params.category || params.dateFrom || params.dateTo

  //   const endpoint = hasFilters ? '/transactions/filter' : '/transactions'

  //   const response = await api.get(endpoint, { params })
  //   return response.data
  // },

  async getTransaction(id) {
    const response = await api.get(`/transactions/${id}`)
    return response.data
  },

  async createTransaction(transactionData) {
    const response = await api.post('/transactions/add', transactionData)
    return response.data
  },

  async updateTransaction(id, transactionData) {
    const response = await api.put(`/transactions/${id}`, transactionData)
    return response.data
  },

  async deleteTransaction(id) {
    const response = await api.delete(`/transactions/${id}`)
    return response.data
  },

  async getDashboardData() {
    const response = await api.get('/dashboard')
    return response.data
  },

  async getReportsData(params = {}) {
    const response = await api.get('/reports', { params })
    return response.data
  },

  async getCategories() {
    const response = await api.get('/categories')
    return response.data
  },

  async exportTransactions(params = {}) {
    const response = await api.get('/transactions/export', {
      params,
      responseType: 'blob'
    })
    return response.data
  },
}

export default transactionService