import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Plus, TrendingUp, TrendingDown, DollarSign, CreditCard
} from 'lucide-react';
import ExpenseBarChart from '../../components/dashboard/ExpenseBarChart';
import CategoryPieChart from '../../components/dashboard/CategoryPieChart';
import { fetchDashboardData } from '../../store/slices/transactionSlice';
import LoadingSpinner from '../../components/LoadingSpinner';

function DashboardPage() {
  const dispatch = useDispatch();
  const { dashboardData, loading } = useSelector((state) => state.transactions);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  const {
    totalIncome = 0,
    totalExpenses = 0,
    balance = 0,
    recentTransactions = [],
    monthlyData = [],
    categoryData = []
  } = dashboardData;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="card">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-secondary-900 mb-2">
              Welcome, {user?.name?.split(' ')[0] || 'User'} 👋
            </h2>
            <p className="text-secondary-600">
              Here's what's happening with your finances today.
            </p>
          </div>
          <Link
            to="/app/transactions/add"
            className="btn btn-primary w-full sm:w-auto flex items-center justify-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            <span className="hidden xs:inline">Add Transaction</span>
            <span className="inline xs:hidden">Add</span>
          </Link>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <div className="dashboard-card rounded-xl p-4 sm:p-6 text-center border-2 border-green-500">
          <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xs sm:text-sm font-medium text-secondary-600 mb-2 uppercase tracking-wide">
            Total Income
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-accent-600 mb-0">
            ₹{totalIncome.toLocaleString()}
          </p>
          <p className="text-xs sm:text-sm text-secondary-500">This month</p>
        </div>

        <div className="dashboard-card rounded-xl p-4 sm:p-6 text-center border-2 border-red-500">
          <div className="w-12 h-12 bg-gradient-to-br from-danger-500 to-danger-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <TrendingDown className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xs sm:text-sm font-medium text-secondary-600 mb-2 uppercase tracking-wide">
            Total Expenses
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-danger-600 mb-0">
            ₹{totalExpenses.toLocaleString()}
          </p>
          <p className="text-xs sm:text-sm text-secondary-500">This month</p>
        </div>

        <div className="dashboard-card rounded-xl p-4 sm:p-6 text-center border-2 border-blue-500">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xs sm:text-sm font-medium text-secondary-600 mb-2 uppercase tracking-wide">
            Current Balance
          </h3>
          <p
            className={`text-2xl sm:text-3xl font-bold mb-0 ${balance >= 0 ? 'text-primary-600' : 'text-danger-600'
              }`}
          >
            ₹{balance.toLocaleString()}
          </p>
          <p className="text-xs sm:text-sm text-secondary-500">Available</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-2 sm:p-4 h-full flex flex-col">
            <ExpenseBarChart data={monthlyData} />
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-2 sm:p-4 h-full flex flex-col">
            <CategoryPieChart data={categoryData} />
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card">
        <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 mb-6">
          <h3 className="text-lg sm:text-xl font-heading font-semibold text-secondary-900">
            Recent Transactions
          </h3>
          <Link
            to="/app/transactions"
            className="text-primary-600 hover:text-primary-700 font-medium text-sm xs:text-base"
          >
            View All
          </Link>
        </div>

        {recentTransactions.length === 0 ? (
          <div className="empty-state-illustration rounded-xl p-6 sm:p-12 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <CreditCard className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-secondary-900 mb-2 sm:mb-3">
              No transactions yet
            </h3>
            <p className="text-secondary-600 mb-4 sm:mb-6 max-w-md mx-auto text-sm sm:text-base">
              Start tracking your expenses by adding your first transaction. It only takes a few seconds!
            </p>
            <Link to="/app/transactions/add" className="btn btn-primary w-full xs:w-auto">
              Add Your First Transaction
            </Link>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {recentTransactions.slice(0, 5).map((transaction) => (
              <div
                key={transaction.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 sm:p-4 bg-secondary-50 rounded-lg"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${transaction.type === 'INCOME'
                      ? 'bg-accent-100'
                      : 'bg-danger-100'
                      }`}
                  >
                    {transaction.type === 'INCOME' ? (
                      <TrendingUp className="w-5 h-5 text-accent-600" />
                    ) : (
                      <TrendingDown className="w-5 h-5 text-danger-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-secondary-900 text-sm sm:text-base">
                      {transaction.description}
                    </p>
                    <p className="text-xs sm:text-sm text-secondary-600">
                      {transaction.category}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold text-sm sm:text-base ${transaction.type === 'INCOME'
                      ? 'text-accent-600'
                      : 'text-danger-600'
                      }`}
                  >
                    {transaction.type === 'INCOME' ? '+' : '-'}₹
                    {transaction.amount.toLocaleString()}
                  </p>
                  <p className="text-xs sm:text-sm text-secondary-600">
                    {transaction.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardPage;
