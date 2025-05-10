
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  total: number;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'tamil' | 'malayalam';
  className?: string;
}

const ProgressBar = ({
  value,
  total,
  showValue = true,
  size = 'md',
  variant = 'default',
  className,
}: ProgressBarProps) => {
  const percentage = Math.min(Math.max(Math.round((value / total) * 100), 0), 100);
  
  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3'
  };
  
  const variantClasses = {
    default: 'bg-primary',
    tamil: 'bg-tamil',
    malayalam: 'bg-malayalam'
  };
  
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-1">
        {showValue && (
          <div className="text-sm font-medium text-muted-foreground">
            {value} / {total} completed
          </div>
        )}
        <div className="text-sm font-medium text-muted-foreground">
          {percentage}%
        </div>
      </div>
      <div className={cn("w-full bg-muted rounded-full overflow-hidden", sizeClasses[size])}>
        <div
          className={cn("transition-all duration-500 ease-out rounded-full", variantClasses[variant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
