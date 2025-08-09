import { useSelector } from 'react-redux';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { BarChart3, PieChart as PieChartIcon, TrendingUp, Calendar, Download } from 'lucide-react';
import { format, subMonths, startOfMonth, endOfMonth, isWithinInterval } from 'date-fns';

function ReportsPage() {
  const { transactions } = useSelector((state) => state.transactions);
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const [reportType, setReportType] = useState('overview');

  // Generate monthly data for charts
  const generateMonthlyData = () => {
    const months = [];
    const now = new Date();
    const monthsToShow = selectedPeriod === '6months' ? 6 : 12;
    
    for (let i = monthsToShow - 1; i >= 0; i--) {
      const date = subMonths(now, i);
      const monthStart = startOfMonth(date);
      const monthEnd = endOfMonth(date);
      
      const monthTransactions = transactions.filter(t => {
        const transactionDate = new Date(t.date);
        return isWithinInterval(transactionDate, { start: monthStart, end: monthEnd });
      });
      
      const income = monthTransactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
      
      const expenses = monthTransactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
      
      months.push({
        month: format(date, 'MMM yyyy'),
        income,
        expenses,
        net: income - expenses
      });
    }
    
    return months;
  };

  // Generate category data for pie chart
  const generateCategoryData = () => {
    const categoryTotals = {};
    
    transactions
      .filter(t => t.type === 'expense')
      .forEach(t => {
        categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
      });
    
    return Object.entries(categoryTotals).map(([category, amount]) => ({
      name: category,
      value: amount
    }));
  };

  const monthlyData = generateMonthlyData();
  const categoryData = generateCategoryData();
  
  const COLORS = ['#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

  // Calculate summary statistics
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpenses = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  const avgMonthlyIncome = monthlyData.length > 0 ? monthlyData.reduce((sum, m) => sum + m.income, 0) / monthlyData.length : 0;
  const avgMonthlyExpenses = monthlyData.length > 0 ? monthlyData.reduce((sum, m) => sum + m.expenses, 0) / monthlyData.length : 0;

  if (transactions.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-heading font-bold text-secondary-900">Reports</h1>
          <p className="text-secondary-600 mt-1">Analyze your financial data with detailed reports</p>
        </div>
        
        <div className="card">
          <div className="empty-state-illustration rounded-xl p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-10 h-10 text-primary-600" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-3">
              No reports available yet
            </h3>
            <p className="text-secondary-600 mb-6 max-w-md mx-auto">
              Generate your first report by adding transactions. Reports will help you analyze your spending patterns and financial trends.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-heading font-bold text-secondary-900">Reports</h1>
          <p className="text-secondary-600 mt-1">Analyze your financial data with detailed reports</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <select
            className="form-input"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="6months">Last 6 Months</option>
            <option value="12months">Last 12 Months</option>
          </select>
          <button className="btn btn-secondary">
            <Download className="w-4 h-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-sm font-medium text-secondary-600 mb-2 uppercase tracking-wide">
            Total Income
          </h3>
          <p className="text-2xl font-bold text-accent-600">
            ₹{totalIncome.toLocaleString()}
          </p>
        </div>
        
        <div className="card text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-danger-500 to-danger-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-6 h-6 text-white transform rotate-180" />
          </div>
          <h3 className="text-sm font-medium text-secondary-600 mb-2 uppercase tracking-wide">
            Total Expenses
          </h3>
          <p className="text-2xl font-bold text-danger-600">
            ₹{totalExpenses.toLocaleString()}
          </p>
        </div>
        
        <div className="card text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-sm font-medium text-secondary-600 mb-2 uppercase tracking-wide">
            Avg Monthly Income
          </h3>
          <p className="text-2xl font-bold text-primary-600">
            ₹{Math.round(avgMonthlyIncome).toLocaleString()}
          </p>
        </div>
        
        <div className="card text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-sm font-medium text-secondary-600 mb-2 uppercase tracking-wide">
            Avg Monthly Expenses
          </h3>
          <p className="text-2xl font-bold text-purple-600">
            ₹{Math.round(avgMonthlyExpenses).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trends */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-heading font-semibold text-secondary-900">
              Monthly Trends
            </h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} name="Income" />
                <Line type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} name="Expenses" />
                <Line type="monotone" dataKey="net" stroke="#0ea5e9" strokeWidth={2} name="Net" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-heading font-semibold text-secondary-900">
              Expense Categories
            </h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Monthly Comparison */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-heading font-semibold text-secondary-900">
            Monthly Income vs Expenses
          </h3>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
                formatter={(value) => [`₹${value.toLocaleString()}`, '']}
              />
              <Bar dataKey="income" fill="#10b981" radius={[4, 4, 0, 0]} name="Income" />
              <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;