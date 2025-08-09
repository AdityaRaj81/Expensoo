import { useSelector } from 'react-redux';
import { Lightbulb, TrendingUp, TrendingDown, AlertTriangle, Target, Calendar } from 'lucide-react';
import { format, subMonths, startOfMonth, endOfMonth, isWithinInterval } from 'date-fns';

function InsightsPage() {
  const { transactions, totalIncome, totalExpenses, currentBalance } = useSelector((state) => state.transactions);

  // Generate insights based on transaction data
  const generateInsights = () => {
    if (transactions.length === 0) return [];

    const insights = [];
    const now = new Date();
    const lastMonth = subMonths(now, 1);
    const twoMonthsAgo = subMonths(now, 2);

    // Get transactions for different periods
    const thisMonthTransactions = transactions.filter(t => {
      const date = new Date(t.date);
      return isWithinInterval(date, { 
        start: startOfMonth(now), 
        end: endOfMonth(now) 
      });
    });

    const lastMonthTransactions = transactions.filter(t => {
      const date = new Date(t.date);
      return isWithinInterval(date, { 
        start: startOfMonth(lastMonth), 
        end: endOfMonth(lastMonth) 
      });
    });

    // Calculate spending by category
    const categorySpending = {};
    transactions.filter(t => t.type === 'expense').forEach(t => {
      categorySpending[t.category] = (categorySpending[t.category] || 0) + t.amount;
    });

    const topCategory = Object.entries(categorySpending).sort((a, b) => b[1] - a[1])[0];

    // Insight 1: Top spending category
    if (topCategory) {
      insights.push({
        type: 'info',
        icon: TrendingDown,
        title: 'Top Spending Category',
        description: `You've spent ₹${topCategory[1].toLocaleString()} on ${topCategory[0]}, which is your highest expense category.`,
        suggestion: 'Consider setting a budget limit for this category to better control your spending.'
      });
    }

    // Insight 2: Monthly comparison
    const thisMonthExpenses = thisMonthTransactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    const lastMonthExpenses = lastMonthTransactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);

    if (lastMonthExpenses > 0) {
      const change = ((thisMonthExpenses - lastMonthExpenses) / lastMonthExpenses) * 100;
      if (Math.abs(change) > 10) {
        insights.push({
          type: change > 0 ? 'warning' : 'success',
          icon: change > 0 ? TrendingUp : TrendingDown,
          title: `${change > 0 ? 'Increased' : 'Decreased'} Spending`,
          description: `Your expenses have ${change > 0 ? 'increased' : 'decreased'} by ${Math.abs(change).toFixed(1)}% compared to last month.`,
          suggestion: change > 0 
            ? 'Review your recent expenses to identify areas where you can cut back.'
            : 'Great job on reducing your expenses! Keep up the good work.'
        });
      }
    }

    // Insight 3: Savings rate
    if (totalIncome > 0) {
      const savingsRate = ((totalIncome - totalExpenses) / totalIncome) * 100;
      insights.push({
        type: savingsRate >= 20 ? 'success' : savingsRate >= 10 ? 'info' : 'warning',
        icon: Target,
        title: 'Savings Rate',
        description: `You're saving ${savingsRate.toFixed(1)}% of your income.`,
        suggestion: savingsRate < 20 
          ? 'Financial experts recommend saving at least 20% of your income. Consider reducing expenses or increasing income.'
          : 'Excellent savings rate! You\'re on track for good financial health.'
      });
    }

    // Insight 4: Frequent small expenses
    const smallExpenses = transactions.filter(t => t.type === 'expense' && t.amount < 500);
    if (smallExpenses.length > 10) {
      const totalSmallExpenses = smallExpenses.reduce((sum, t) => sum + t.amount, 0);
      insights.push({
        type: 'info',
        icon: AlertTriangle,
        title: 'Small Expenses Add Up',
        description: `You have ${smallExpenses.length} transactions under ₹500, totaling ₹${totalSmallExpenses.toLocaleString()}.`,
        suggestion: 'Small expenses can add up quickly. Consider tracking and budgeting for these minor purchases.'
      });
    }

    // Insight 5: Income vs Expenses balance
    if (currentBalance < 0) {
      insights.push({
        type: 'warning',
        icon: AlertTriangle,
        title: 'Spending Exceeds Income',
        description: `Your expenses are ₹${Math.abs(currentBalance).toLocaleString()} more than your income.`,
        suggestion: 'Consider reducing expenses or finding additional income sources to balance your finances.'
      });
    }

    return insights;
  };

  const insights = generateInsights();

  // Quick stats for the insights page
  const quickStats = [
    {
      label: 'Total Transactions',
      value: transactions.length,
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      label: 'Avg Transaction',
      value: transactions.length > 0 ? `₹${Math.round(totalExpenses / transactions.filter(t => t.type === 'expense').length || 0)}` : '₹0',
      icon: TrendingDown,
      color: 'bg-red-500'
    },
    {
      label: 'Categories Used',
      value: [...new Set(transactions.map(t => t.category))].length,
      icon: Target,
      color: 'bg-green-500'
    },
    {
      label: 'Days Tracked',
      value: transactions.length > 0 ? [...new Set(transactions.map(t => t.date))].length : 0,
      icon: Calendar,
      color: 'bg-purple-500'
    }
  ];

  if (transactions.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-heading font-bold text-secondary-900">Insights</h1>
          <p className="text-secondary-600 mt-1">Get intelligent insights about your spending habits</p>
        </div>
        
        <div className="card">
          <div className="empty-state-illustration rounded-xl p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-10 h-10 text-primary-600" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-3">
              No insights available yet
            </h3>
            <p className="text-secondary-600 mb-6 max-w-md mx-auto">
              Start tracking your expenses to unlock powerful insights about your spending habits and financial patterns.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-secondary-900">Insights</h1>
        <p className="text-secondary-600 mt-1">Get intelligent insights about your spending habits</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card text-center">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-medium text-secondary-600 mb-2 uppercase tracking-wide">
                {stat.label}
              </h3>
              <p className="text-2xl font-bold text-secondary-900">
                {stat.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Insights */}
      <div className="space-y-4">
        <h2 className="text-xl font-heading font-semibold text-secondary-900">
          Personalized Insights
        </h2>
        
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div key={index} className="card">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  insight.type === 'success' ? 'bg-accent-100' :
                  insight.type === 'warning' ? 'bg-yellow-100' :
                  insight.type === 'error' ? 'bg-danger-100' :
                  'bg-primary-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    insight.type === 'success' ? 'text-accent-600' :
                    insight.type === 'warning' ? 'text-yellow-600' :
                    insight.type === 'error' ? 'text-danger-600' :
                    'text-primary-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-secondary-700 mb-3">
                    {insight.description}
                  </p>
                  <div className={`p-3 rounded-lg ${
                    insight.type === 'success' ? 'bg-accent-50 border border-accent-200' :
                    insight.type === 'warning' ? 'bg-yellow-50 border border-yellow-200' :
                    insight.type === 'error' ? 'bg-danger-50 border border-danger-200' :
                    'bg-primary-50 border border-primary-200'
                  }`}>
                    <p className={`text-sm font-medium ${
                      insight.type === 'success' ? 'text-accent-800' :
                      insight.type === 'warning' ? 'text-yellow-800' :
                      insight.type === 'error' ? 'text-danger-800' :
                      'text-primary-800'
                    }`}>
                      💡 Suggestion: {insight.suggestion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InsightsPage;