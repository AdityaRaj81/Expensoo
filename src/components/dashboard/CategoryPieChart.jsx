import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { PieChart as PieChartIcon } from 'lucide-react';

function CategoryPieChart() {
  const { transactions } = useSelector((state) => state.transactions);
  
  // Process data for chart (empty for initial state)
  const data = [];
  
  const COLORS = ['#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
  
  return (
    <div className="card h-96">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-heading font-semibold text-secondary-900">
          Expense Categories
        </h3>
        <button className="text-sm text-secondary-600 hover:text-secondary-900 font-medium">
          This Month
        </button>
      </div>
      
      {data.length === 0 ? (
        <div className="flex-1 flex items-center justify-center empty-state-illustration rounded-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PieChartIcon className="w-8 h-8 text-primary-600" />
            </div>
            <p className="text-secondary-600 font-medium">No category data to display</p>
            <p className="text-sm text-secondary-500 mt-1">Categorize your expenses to see the breakdown</p>
          </div>
        </div>
      ) : (
        <div className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
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
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default CategoryPieChart;