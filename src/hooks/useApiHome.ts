import { useEffect, useState } from 'react'
import { fetchDashboard, fetchUser } from '@/api/dashboard'
import type { DashboardData, User } from '@/types/content'

export function useApiHome() {
  const [user, setUser] = useState<User | null>(null)
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function load() {
      try {
        const userPromise = fetchUser()
        const dashboardPromise = fetchDashboard()
        const u = await userPromise
        const d = await dashboardPromise
        setUser(u)
        setData(d)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to load')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { user, data, loading, error }
}
