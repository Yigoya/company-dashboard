import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface AdvancedStatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: number;
  trendLabel?: string;
  secondaryValue?: string | number;
  secondaryLabel?: string;
  className?: string;
  chartData?: Array<number>;
}

export function AdvancedStatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendLabel,
  secondaryValue,
  secondaryLabel,
  className,
  chartData,
}: AdvancedStatCardProps) {
  return (
    <Card className={cn('overflow-hidden', className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || trend) && (
          <div className="flex items-center text-xs text-muted-foreground">
            {trend !== undefined && (
              <span
                className={cn(
                  'mr-1',
                  trend > 0
                    ? 'text-emerald-500'
                    : trend < 0
                    ? 'text-red-500'
                    : ''
                )}
              >
                {trend > 0 ? '↑' : trend < 0 ? '↓' : ''}
                {Math.abs(trend)}%
              </span>
            )}
            <span>{description || trendLabel || 'from last month'}</span>
          </div>
        )}
        
        {secondaryValue && secondaryLabel && (
          <div className="mt-4 flex items-center justify-between border-t pt-3">
            <span className="text-sm text-muted-foreground">{secondaryLabel}</span>
            <span className="text-sm font-medium">{secondaryValue}</span>
          </div>
        )}
        
        {chartData && chartData.length > 0 && (
          <div className="mt-4 h-10">
            <div className="flex h-full items-end gap-1">
              {chartData.map((value, index) => {
                const height = `${Math.max(15, Math.min(100, value))}%`;
                return (
                  <div
                    key={index}
                    className="flex-1 bg-primary/20 dark:bg-primary/30"
                    style={{ height }}
                  />
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}