import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: typeof LucideIcon;
  trend?: number;
  trendLabel?: string;
  className?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  trendLabel,
  className,
}: StatCardProps) {
  return (
    <Card className={cn('', className)}>
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
      </CardContent>
    </Card>
  );
}