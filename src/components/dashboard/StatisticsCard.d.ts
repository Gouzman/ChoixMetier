import React from 'react';
interface StatisticsCardProps {
    title: string;
    value: number | string;
    description?: string;
    icon?: React.ReactNode;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    className?: string;
}
export declare const StatisticsCard: React.FC<StatisticsCardProps>;
export {};
