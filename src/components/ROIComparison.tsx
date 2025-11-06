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
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">{title}</h3>
      )}
      <div className="overflow-x-auto -mx-4 md:mx-0">
        <div className="inline-block min-w-full align-middle px-4 md:px-0">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="text-left py-3 md:py-4 px-3 md:px-6 text-sm md:text-base lg:text-lg font-bold whitespace-nowrap">Aspect</th>
                <th className="text-center py-3 md:py-4 px-3 md:px-6 text-sm md:text-base lg:text-lg font-bold whitespace-nowrap">{traditionalLabel}</th>
                <th className="text-center py-3 md:py-4 px-3 md:px-6 text-sm md:text-base lg:text-lg font-bold bg-primary/10 whitespace-nowrap">{aiLabel}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-b border-border hover:bg-primary/5 transition-colors">
                  <td className="py-3 md:py-4 px-3 md:px-6 font-semibold text-sm md:text-base">{row.aspect}</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center text-muted-foreground text-sm md:text-base">{row.traditional}</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-center text-primary font-semibold bg-primary/5 text-sm md:text-base">{row.aiSystem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
