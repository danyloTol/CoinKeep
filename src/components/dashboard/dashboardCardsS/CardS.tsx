import { lazy, Suspense } from "react";

const TotalBalance = lazy(() => import('./WidgetSTotalBalance'));
const Income = lazy(() => import('./WidgetSIncome'));
const Expense = lazy(() => import('./WidgetSExpense'));
const TotalSaving = lazy(() => import('./WidgetSTotalSaving'));

// Props for TotalBalance widget
interface WidgetProps {
    thisMonthValue: number;
    lastMonthValue: number;
}

const WIDGET_MAP: Record<string, React.LazyExoticComponent<React.FC<WidgetProps>>> = {
    total_balance: TotalBalance,
    income: Income,
    expense: Expense,
    total_saving: TotalSaving,
};

interface DashboardCardSProps extends WidgetProps {
    type: 'total_balance' | 'income' | 'expense' | 'total_saving';
}

const DashboardCardS = ({ type, ...props }: DashboardCardSProps) => {
    const WidgetComponent = WIDGET_MAP[type];

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

export default DashboardCardS