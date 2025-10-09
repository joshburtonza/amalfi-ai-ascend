import React from 'react';

interface ComparisonRow {
  metric: string;
  before: string;
  after: string;
}

interface ComparisonTableProps {
  title?: string;
  rows: ComparisonRow[];
  beforeLabel?: string;
  afterLabel?: string;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ 
  title,
  rows,
  beforeLabel = "Before AI",
  afterLabel = "After Implementation"
}) => {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 px-4 md:px-6 text-base md:text-lg font-bold">Metric</th>
              <th className="text-left py-4 px-4 md:px-6 text-base md:text-lg font-bold">{beforeLabel}</th>
              <th className="text-left py-4 px-4 md:px-6 text-base md:text-lg font-bold bg-primary/5">{afterLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-border hover:bg-primary/5 transition-colors">
                <td className="py-4 px-4 md:px-6 font-semibold">{row.metric}</td>
                <td className="py-4 px-4 md:px-6 text-muted-foreground">{row.before}</td>
                <td className="py-4 px-4 md:px-6 text-primary font-semibold">{row.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
