import { lazy, Suspense } from 'react';

const Budget = lazy(() => import('./WidgetMBudget'));
const SavingGoals = lazy(() => import('./WidgetMSavingGoals'));
const TotalBalance = lazy(() => import('./WidgetMTotalBalance'));

interface WidgetProps {
    thisMonthValue?: number;
    lastMonthValue?: number;
}

const WIDGET_MAP: Record<string, React.LazyExoticComponent<React.FC<WidgetProps>>> = {
    budget: Budget,
    saving_goals: SavingGoals,
    total_balance: TotalBalance,
};

interface CardProps extends WidgetProps {
    widget: "budget" | "saving_goals" | "total_balance";
}

const DashboardCardM = ({widget, ...props}: CardProps) => {
    const WidgetComponent = WIDGET_MAP[widget];

    return (
        <div>
            {WidgetComponent ? (
                <Suspense fallback={<div>Loading...</div>}>
                    <WidgetComponent {...props} />
                </Suspense>
            ) : (
                <div>Widget not found</div>
            )}
        </div>
    );
};

export default DashboardCardM;