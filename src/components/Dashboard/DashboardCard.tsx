/**
 * Dashboard card component
 */

import React from 'react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  action?: () => void;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  action,
}) => {
  return (
    <div
      className="card cursor-pointer hover:shadow-lg transition-all"
      onClick={action}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-semibold text-gray-700">{title}</h3>
        {icon && <span className="text-3xl">{icon}</span>}
      </div>
      <p className="text-3xl font-bold text-primary mb-1">{value}</p>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  );
};

export default DashboardCard;
