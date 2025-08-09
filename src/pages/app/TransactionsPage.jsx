import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Plus, Search, Filter, Edit, Trash2, TrendingUp, TrendingDown } from 'lucide-react';
import { deleteTransaction } from '../../store/slices/transactionSlice';
import toast from 'react-hot-toast';

function TransactionsPage() {
  const { transactions } = useSelector((state) => state.transactions);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  // Filter transactions based on search and filters
  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || transaction.type === filterType;
    const matchesCategory = filterCategory === 'all' || transaction.category === filterCategory;
    
    return matchesSearch && matchesType && matchesCategory;
  });

  // Get unique categories for filter
  const categories = [...new Set(transactions.map(t => t.category))];

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      dispatch(deleteTransaction(id));
      toast.success('Transaction deleted successfully!');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-heading font-bold text-secondary-900">Transactions</h1>
          <p className="text-secondary-600 mt-1">Track and manage all your income and expenses</p>
        </div>
        <Link to="/app/transactions/add" className="btn btn-primary mt-4 sm:mt-0">
          <Plus className="w-5 h-5 mr-2" />
          Add New Transaction
        </Link>
      </div>

      {transactions.length > 0 && (
        <div className="card">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search transactions..."
                className="form-input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Type Filter */}
            <select
              className="form-input"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            
            {/* Category Filter */}
            <select
              className="form-input"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      )}
      
      {transactions.length === 0 ? (
        <div className="card">
          <div className="empty-state-illustration rounded-xl p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-10 h-10 text-primary-600" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-3">
              You have no transactions yet
            </h3>
            <p className="text-secondary-600 mb-6 max-w-md mx-auto">
              Click 'Add New Transaction' to get started tracking your expenses and income!
            </p>
            <Link to="/app/transactions/add" className="btn btn-primary">
              Add Your First Transaction
            </Link>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-secondary-200">
                  <th className="text-left py-3 px-4 font-semibold text-secondary-900">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-secondary-900">Description</th>
                  <th className="text-left py-3 px-4 font-semibold text-secondary-900">Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-secondary-900">Type</th>
                  <th className="text-right py-3 px-4 font-semibold text-secondary-900">Amount</th>
                  <th className="text-center py-3 px-4 font-semibold text-secondary-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-secondary-100 hover:bg-secondary-50">
                    <td className="py-4 px-4 text-secondary-700">{transaction.date}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          transaction.type === 'income' ? 'bg-accent-100' : 'bg-danger-100'
                        }`}>
                          {transaction.type === 'income' ? (
                            <TrendingUp className="w-4 h-4 text-accent-600" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-danger-600" />
                          )}
                        </div>
                        <span className="font-medium text-secondary-900">{transaction.description}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">
                        {transaction.category}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                        transaction.type === 'income' 
                          ? 'bg-accent-100 text-accent-700' 
                          : 'bg-danger-100 text-danger-700'
                      }`}>
                        {transaction.type === 'income' ? 'Income' : 'Expense'}
                      </span>
                    </td>
                    <td className={`py-4 px-4 text-right font-semibold ${
                      transaction.type === 'income' ? 'text-accent-600' : 'text-danger-600'
                    }`}>
                      {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center justify-center space-x-2">
                        <Link
                          to={`/app/transactions/edit/${transaction.id}`}
                          className="p-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(transaction.id)}
                          className="p-2 text-secondary-600 hover:text-danger-600 hover:bg-danger-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredTransactions.length === 0 && transactions.length > 0 && (
            <div className="text-center py-8">
              <p className="text-secondary-600">No transactions match your search criteria.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TransactionsPage;