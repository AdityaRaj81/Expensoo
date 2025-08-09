import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Plus, TrendingUp, TrendingDown, DollarSign, CreditCard } from 'lucide-react';
import ExpenseBarChart from '../../components/dashboard/ExpenseBarChart';
import CategoryPieChart from '../../components/dashboard/CategoryPieChart';

function DashboardPage() {
  const { totalIncome, totalExpenses, currentBalance, transactions } = useSelector(
    (state) => state.transactions
  );

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-heading font-bold text-secondary-900 mb-2">
              Welcome back! 👋
            </h2>
            <p className="text-secondary-600">
              Here's what's happening with your finances today.
            </p>
          </div>
          <Link to="/app/transactions/add" className="btn btn-primary">
            <Plus className="w-5 h-5 mr-2" />
            Add Transaction
          </Link>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="dashboard-card rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-sm font-medium text-secondary-600 mb-2 uppercase tracking-wide">
            Total Income
          </h3>
          <p className="text-3xl font-bold text-accent-600 mb-0">
            ₹{totalIncome.toLocaleString()}
          </p>
          <p className="text-sm text-secondary-500">This month</p>
        </div>
        
        <div className="dashboard-card rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-danger-500 to-danger-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <TrendingDown className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-sm font-medium text-secondary-600 mb-2 uppercase tracking-wide">
            Total Expenses
          </h3>
          <p className="text-3xl font-bold text-danger-600 mb-0">
            ₹{totalExpenses.toLocaleString()}
          </p>
          <p className="text-sm text-secondary-500">This month</p>
        </div>
        
        <div className="dashboard-card rounded-xl p-6 text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-sm font-medium text-secondary-600 mb-2 uppercase tracking-wide">
            Current Balance
          </h3>
          <p className={`text-3xl font-bold mb-0 ${currentBalance >= 0 ? 'text-primary-600' : 'text-danger-600'}`}>
            ₹{currentBalance.toLocaleString()}
          </p>
          <p className="text-sm text-secondary-500">Available</p>
        </div>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ExpenseBarChart />
        </div>
        <div className="lg:col-span-1">
          <CategoryPieChart />
        </div>
      </div>
      
      {/* Recent Transactions */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-heading font-semibold text-secondary-900">
            Recent Transactions
          </h3>
          <Link to="/app/transactions" className="text-primary-600 hover:text-primary-700 font-medium">
            View All
          </Link>
        </div>
        
        {transactions.length === 0 ? (
          <div className="empty-state-illustration rounded-xl p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-10 h-10 text-primary-600" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-3">
              No transactions yet
            </h3>
            <p className="text-secondary-600 mb-6 max-w-md mx-auto">
              Start tracking your expenses by adding your first transaction. It only takes a few seconds!
            </p>
            <Link to="/app/transactions/add" className="btn btn-primary">
              Add Your First Transaction
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {transactions.slice(0, 5).map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'income' ? 'bg-accent-100' : 'bg-danger-100'
                  }`}>
                    {transaction.type === 'income' ? (
                      <TrendingUp className={`w-5 h-5 text-accent-600`} />
                    ) : (
                      <TrendingDown className={`w-5 h-5 text-danger-600`} />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-secondary-900">{transaction.description}</p>
                    <p className="text-sm text-secondary-600">{transaction.category}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${
                    transaction.type === 'income' ? 'text-accent-600' : 'text-danger-600'
                  }`}>
                    {transaction.type === 'income' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                  </p>
                  <p className="text-sm text-secondary-600">{transaction.date}</p>
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