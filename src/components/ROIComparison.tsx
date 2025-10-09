import React from 'react';

interface ROIRow {
  aspect: string;
  traditional: string;
  aiSystem: string;
}

interface ROIComparisonProps {
  title?: string;
  rows: ROIRow[];
  traditionalLabel?: string;
  aiLabel?: string;
}

export const ROIComparison: React.FC<ROIComparisonProps> = ({ 
  title,
  rows,
  traditionalLabel = "Traditional",
  aiLabel = "AI System"
}) => {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-primary/20">
              <th className="text-left py-4 px-4 md:px-6 text-base md:text-lg font-bold">Aspect</th>
              <th className="text-center py-4 px-4 md:px-6 text-base md:text-lg font-bold">{traditionalLabel}</th>
              <th className="text-center py-4 px-4 md:px-6 text-base md:text-lg font-bold bg-primary/10">{aiLabel}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-b border-border hover:bg-primary/5 transition-colors">
                <td className="py-4 px-4 md:px-6 font-semibold">{row.aspect}</td>
                <td className="py-4 px-4 md:px-6 text-center text-muted-foreground">{row.traditional}</td>
                <td className="py-4 px-4 md:px-6 text-center text-primary font-semibold bg-primary/5">{row.aiSystem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
