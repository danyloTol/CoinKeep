import { WidgetLMoneyFlow } from './WidgetLMoneyFlow';
import { WidgetLRecentTransactions } from './WidgetLRecentTransactions'

interface CardProps {
    widget: "money_flow" | "recent_transactions";
}

const LegendListClassName = "flex flex-row gap-0.5 items-center";

const DashboardCardL = ({widget}: CardProps) => {
    return (
        <>
            {(widget === "money_flow") ? <WidgetLMoneyFlow /> : (widget === "recent_transactions") && <WidgetLRecentTransactions />}
        </>
    );
};

export default DashboardCardL;