import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import LoadingSpinner from '../LoadingSpinner'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth)
  const token = localStorage.getItem("token")

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="large" />
      </div>
    )
  }

  if (!isAuthenticated && !token) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
