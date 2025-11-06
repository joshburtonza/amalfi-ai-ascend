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
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">{title}</h3>
      )}
      <div className="overflow-x-auto -mx-4 md:mx-0">
        <div className="inline-block min-w-full align-middle px-4 md:px-0">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 md:py-4 px-3 md:px-6 text-sm md:text-base lg:text-lg font-bold whitespace-nowrap">Metric</th>
                <th className="text-left py-3 md:py-4 px-3 md:px-6 text-sm md:text-base lg:text-lg font-bold whitespace-nowrap">{beforeLabel}</th>
                <th className="text-left py-3 md:py-4 px-3 md:px-6 text-sm md:text-base lg:text-lg font-bold bg-primary/5 whitespace-nowrap">{afterLabel}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-border hover:bg-primary/5 transition-colors">
                  <td className="py-3 md:py-4 px-3 md:px-6 font-semibold text-sm md:text-base">{row.metric}</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-muted-foreground text-sm md:text-base">{row.before}</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-primary font-semibold text-sm md:text-base">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
