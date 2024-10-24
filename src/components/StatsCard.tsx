import React from 'react';
import { Activity, TrendingUp, Users } from 'lucide-react';

interface StatsCardProps {
  title: string;
  today: number;
  week: number;
  total: number;
}

export function StatsCard({ title, today, week, total }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <Activity className="w-6 h-6 text-indigo-600" />
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-emerald-500" />
            <span className="text-sm text-gray-600">Today</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{today}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-600">Week</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{week}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-gray-600">Total</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{total}</p>
        </div>
      </div>
    </div>
  );
}