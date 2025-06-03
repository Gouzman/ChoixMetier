import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { mockFormData } from "../../data/mockData";

export const JobDistribution: React.FC = () => {
  // Calculate job distribution
  const jobCounts = mockFormData.reduce((acc, form) => {
    const job = form.professionalBackground.desiredJob ?? "Inconnu";
    acc[job] = (acc[job] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Convert to array and sort by count
  const jobDistribution = Object.entries(jobCounts)
    .map(([label, count]) => ({
      label,
      count,
      percentage: Math.round((count / mockFormData.length) * 100),
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Répartition par métier</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {jobDistribution.map((job) => (
            <div key={job.label} className="flex items-center">
              <div className="w-24 md:w-36 lg:w-48 truncate pr-4">
                <span className="text-sm font-medium text-gray-700">
                  {job.label}
                </span>
              </div>
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${job.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-12 pl-4 text-right">
                <span className="text-sm font-medium text-gray-700">
                  {job.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
