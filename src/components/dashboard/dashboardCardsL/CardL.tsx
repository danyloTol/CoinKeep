import { WidgetLMoneyFlow } from './WidgetLMoneyFlow';
import { WidgetLRecentTransactions } from './WidgetLRecentTransactions'

interface CardProps {
    widget: "money_flow" | "recent_transactions";
}

const DashboardCardL = ({widget}: CardProps) => {
    return (
        <>
            {(widget === "money_flow") ? <WidgetLMoneyFlow /> : (widget === "recent_transactions") && <WidgetLRecentTransactions />}
        </>
    );
};

export default DashboardCardL;