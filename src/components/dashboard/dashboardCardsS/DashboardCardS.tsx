import { lazy, Suspense } from "react";

const TotalBalance = lazy(() => import('./WidgetSTotalBalance'));

interface WidgetProps {
    ThisMonthValue: number;
    LastMonthValue: number;
}

const WIDGET_MAP: Record<string, React.LazyExoticComponent<React.FC<WidgetProps>>> = {
    totBalance: TotalBalance,
};

interface DashboardCardSProps extends WidgetProps {
    type: 'totBalance';
}

const DashboardCardS = ({ type, ...props }: DashboardCardSProps) => {
    const WidgetComponent = WIDGET_MAP[type];

    return (
        <div>
            {WidgetComponent ? (
                <Suspense fallback={<div>Завантаження...</div>}>
                    <WidgetComponent {...props} />
                </Suspense>
            ) : (
                <div>Widget not found</div>
            )}
        </div>
    );
};

export default DashboardCardS