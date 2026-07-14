import { WidgetLMoneyFlow } from './WidgetLMoneyFlow';
import { WidgetLRecentTransactions } from './WidgetLRecentTransactions'

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