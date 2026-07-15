import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Activity, Flame, Timer, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const data = [
  { name: 'Mon', workouts: 1, calories: 300 },
  { name: 'Tue', workouts: 0, calories: 0 },
  { name: 'Wed', workouts: 2, calories: 500 },
  { name: 'Thu', workouts: 1, calories: 400 },
  { name: 'Fri', workouts: 3, calories: 800 },
  { name: 'Sat', workouts: 2, calories: 600 },
  { name: 'Sun', workouts: 1, calories: 350 },
];

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="page-container">
      <div className="dashboard-header">
        <div>
          <h1 className="heading-1">Dashboard</h1>
          <p className="text-secondary">Welcome back, {currentUser?.email}</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card card">
          <div className="stat-icon bg-blue">
            <Activity size={24} color="#3b82f6" />
          </div>
          <div className="stat-details">
            <h3>10</h3>
            <p>Total Workouts</p>
          </div>
        </div>
        
        <div className="stat-card card">
          <div className="stat-icon bg-orange">
            <Flame size={24} color="#f97316" />
          </div>
          <div className="stat-details">
            <h3>2,950</h3>
            <p>Calories Burned</p>
          </div>
        </div>
        
        <div className="stat-card card">
          <div className="stat-icon bg-green">
            <Timer size={24} color="#10b981" />
          </div>
          <div className="stat-details">
            <h3>320</h3>
            <p>Active Minutes</p>
          </div>
        </div>
        
        <div className="stat-card card">
          <div className="stat-icon bg-purple">
            <TrendingUp size={24} color="#a855f7" />
          </div>
          <div className="stat-details">
            <h3>4</h3>
            <p>Current Streak</p>
          </div>
        </div>
      </div>

      <div className="chart-container card">
        <h2 className="heading-2" style={{ marginBottom: '1.5rem' }}>Activity Overview</h2>
        <div style={{ height: '300px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="name" stroke="var(--text-secondary)" tick={{fill: 'var(--text-secondary)'}} />
              <YAxis stroke="var(--text-secondary)" tick={{fill: 'var(--text-secondary)'}} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--bg-elevated)', border: 'none', borderRadius: '8px', color: 'var(--text-primary)' }}
                itemStyle={{ color: 'var(--text-primary)' }}
              />
              <Area type="monotone" dataKey="calories" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCalories)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
