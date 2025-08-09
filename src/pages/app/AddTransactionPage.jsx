import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import { addTransaction } from '../../store/slices/transactionSlice';

function AddTransactionPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      type: 'expense',
      date: format(new Date(), 'yyyy-MM-dd')
    }
  });
  
  const watchType = watch('type');
  
  const categories = {
    expense: ['Food & Dining', 'Transportation', 'Shopping', 'Entertainment', 'Bills & Utilities', 'Healthcare', 'Other'],
    income: ['Salary', 'Freelance', 'Investment', 'Gift', 'Other']
  };
  
  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const newTransaction = {
        id: Date.now(),
        ...data,
        amount: parseFloat(data.amount),
        date: format(new Date(data.date), 'MMM dd, yyyy')
      };
      
      dispatch(addTransaction(newTransaction));
      toast.success('Transaction added successfully!');
      navigate('/app/transactions');
    } catch (error) {
      toast.error('Failed to add transaction');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-heading font-bold text-secondary-900">Add New Transaction</h1>
        <p className="text-secondary-600 mt-1">Record your income or expense</p>
      </div>
      
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="type" className="form-label">Transaction Type</label>
              <select
                id="type"
                className={`form-input ${errors.type ? 'border-danger-500' : ''}`}
                {...register('type', { required: 'Transaction type is required' })}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
              {errors.type && (
                <p className="mt-1 text-sm text-danger-600">{errors.type.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="amount" className="form-label">Amount (₹)</label>
              <input
                type="number"
                id="amount"
                className={`form-input ${errors.amount ? 'border-danger-500' : ''}`}
                step="0.01"
                min="0"
                placeholder="0.00"
                {...register('amount', {
                  required: 'Amount is required',
                  min: { value: 0.01, message: 'Amount must be greater than 0' }
                })}
              />
              {errors.amount && (
                <p className="mt-1 text-sm text-danger-600">{errors.amount.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="form-label">Category</label>
              <select
                id="category"
                className={`form-input ${errors.category ? 'border-danger-500' : ''}`}
                {...register('category', { required: 'Category is required' })}
              >
                <option value="">Select a category</option>
                {categories[watchType].map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="mt-1 text-sm text-danger-600">{errors.category.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="date" className="form-label">Date</label>
              <input
                type="date"
                id="date"
                className={`form-input ${errors.date ? 'border-danger-500' : ''}`}
                {...register('date', { required: 'Date is required' })}
              />
              {errors.date && (
                <p className="mt-1 text-sm text-danger-600">{errors.date.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              rows={4}
              className={`form-input resize-none ${errors.description ? 'border-danger-500' : ''}`}
              placeholder="Add a note about this transaction..."
              {...register('description', { required: 'Description is required' })}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-danger-600">{errors.description.message}</p>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              className="btn btn-secondary flex-1"
              onClick={() => navigate('/app/transactions')}
              disabled={isLoading}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary flex-1"
              disabled={isLoading}
            >
              {isLoading ? 'Adding...' : 'Add Transaction'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTransactionPage;