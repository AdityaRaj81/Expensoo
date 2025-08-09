import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart3 } from 'lucide-react';

function ExpenseBarChart() {
  const { transactions } = useSelector((state) => state.transactions);
  
  // Process data for chart (empty for initial state)
  const data = [];
  
  return (
    <div className="card h-96">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-heading font-semibold text-secondary-900">
          Monthly Expenses
        </h3>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-sm bg-primary-100 text-primary-700 rounded-lg font-medium">
            6M
          </button>
          <button className="px-3 py-1 text-sm text-secondary-600 hover:bg-secondary-100 rounded-lg font-medium">
            1Y
          </button>
        </div>
      </div>
      
      {data.length === 0 ? (
        <div className="flex-1 flex items-center justify-center empty-state-illustration rounded-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8 text-primary-600" />
            </div>
            <p className="text-secondary-600 font-medium">No expense data to display</p>
            <p className="text-sm text-secondary-500 mt-1">Add transactions to see your spending trends</p>
          </div>
        </div>
      ) : (
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
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
              <Bar dataKey="amount" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default ExpenseBarChart;