import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { createTransaction, fetchDashboardData } from '../../store/slices/transactionSlice';
import { EXPENSE_CATEGORIES, INCOME_CATEGORIES, TRANSACTION_TYPES } from '../../utils/constants';
import LoadingSpinner from '../../components/LoadingSpinner';

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
      type: TRANSACTION_TYPES.EXPENSE,
      date: new Date().toISOString().split('T')[0],
    }
  });

  const watchType = watch('type'); // expense or income
  const categories = watchType === TRANSACTION_TYPES.INCOME ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await dispatch(createTransaction({
        ...data,
        amount: parseFloat(data.amount),
        type: watchType,
      })).unwrap();

      dispatch(fetchDashboardData());

      toast.success('Transaction added successfully!');
      navigate('/transactions');
    } catch (error) {
      console.error('Failed to add transaction:', error);
      toast.error('Failed to add transaction');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-heading font-bold text-secondary-900">Add New Transaction</h1>
        <p className="text-secondary-600 mt-1">Record your income or expense</p>
      </div>

      {/* Form */}
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Transaction Type */}
            <div>
              <label htmlFor="type" className="form-label">Transaction Type</label>
              <select
                id="type"
                className={`form-input ${errors.type ? 'border-danger-500' : ''}`}
                {...register('type', { required: 'Transaction type is required' })}
              >
                <option value={TRANSACTION_TYPES.EXPENSE}>Expense</option>
                <option value={TRANSACTION_TYPES.INCOME}>Income</option>
              </select>
              {errors.type && (
                <p className="mt-1 text-sm text-danger-600">{errors.type.message}</p>
              )}
            </div>

            {/* Amount */}
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

          {/* Category & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="form-label">Category</label>
              <select
                id="category"
                className={`form-input ${errors.category ? 'border-danger-500' : ''}`}
                {...register('category', { required: 'Category is required' })}
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
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



          {/* Notes (optional) */}
          <div>
            <label htmlFor="notes" className="form-label">Notes (Optional)</label>
            <textarea
              id="notes"
              rows={3}
              className="form-input resize-none"
              placeholder="Add any additional notes..."
              {...register('notes')}
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="button"
              className="btn btn-secondary flex-1"
              onClick={() => navigate('/transactions')}
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary flex-1 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <LoadingSpinner size="small" className="mr-2" />
                  Adding...
                </>
              ) : (
                'Add Transaction'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTransactionPage;
