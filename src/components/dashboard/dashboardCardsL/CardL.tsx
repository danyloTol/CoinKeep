import { WidgetLMoneyFlow } from './WidgetLMoneyFlow';
import { WidgetLRecentTransactions } from './WidgetLRecentTransactions'

export interface chartData {
    month: string;
    income: number;
    expense: number;
}

interface CardProps {
    widget: "money_flow" | "recent_transactions";
    chartData: chartData[];
}

const DashboardCardL = ({widget, chartData}: CardProps) => {
    return (
        <>
            {(widget === "money_flow") ? <WidgetLMoneyFlow chartData={chartData} /> : (widget === "recent_transactions") && <WidgetLRecentTransactions />}
        </>
    );
};

export default DashboardCardL;