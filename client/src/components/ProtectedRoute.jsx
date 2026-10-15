import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  // Wait for AuthContext to restore the session from the stored token
  // before deciding, otherwise a page refresh always redirects to /login
  if (loading) return <div className="text-sm text-zinc-600">Loading…</div>
  if (!user) return <Navigate to="/login" replace />
  return children
}
