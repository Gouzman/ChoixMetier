import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { mockFormData } from '../../data/mockData';

export const CommuneDistribution: React.FC = () => {
  // Calculate commune distribution
  const communeCounts = mockFormData.reduce((acc, form) => {
    const commune = form.participant.address.commune;
    acc[commune] = (acc[commune] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  // Convert to array and sort by count
  const communeDistribution = Object.entries(communeCounts)
    .map(([label, count]) => ({
      label,
      count,
      percentage: Math.round((count / mockFormData.length) * 100),
    }))
    .sort((a, b) => b.count - a.count);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Répartition géographique</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {communeDistribution.map((commune) => (
            <div key={commune.label} className="flex items-center">
              <div className="w-24 md:w-36 lg:w-48 truncate pr-4">
                <span className="text-sm font-medium text-gray-700">{commune.label}</span>
              </div>
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-teal-600 h-2.5 rounded-full" 
                    style={{ width: `${commune.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-12 pl-4 text-right">
                <span className="text-sm font-medium text-gray-700">{commune.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};