import { WidgetLMoneyFlow } from './DashboardWidgetLMoneyFlow';
import { WidgetLRecentTransactions } from './DashboardWidgetLRecentTransactions'

interface CardProps {
    widget: "money flow" | "recent transactions";
}

const LegendListClassName = "flex flex-row gap-0.5 items-center";

const DashboardCardL = ({widget}: CardProps) => {
    return (
        <>
            {(widget === "money flow") ? <WidgetLMoneyFlow /> : (widget === "recent transactions") && <WidgetLRecentTransactions />}
        </>
    );
};

export default DashboardCardL;