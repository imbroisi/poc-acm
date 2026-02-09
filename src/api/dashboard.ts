import type { DashboardData, User } from '@/types/content';

const BASE = '';

export async function fetchUser(): Promise<User> {
  const res = await fetch(`${BASE}/api/user`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}

export async function fetchDashboard(): Promise<DashboardData> {
  const res = await fetch(`${BASE}/api/dashboard`);
  if (!res.ok) throw new Error('Failed to fetch dashboard');
  return res.json();
}
