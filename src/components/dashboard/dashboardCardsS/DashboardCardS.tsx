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
    totBalance: TotalBalance,
    income: Income,
    expense: Expense,
    totSaving: TotalSaving,
};

interface DashboardCardSProps extends WidgetProps {
    type: 'totBalance' | 'income' | 'expense' | 'totSaving';
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