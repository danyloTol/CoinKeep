import { WidgetMBudget } from './WidgetMBudget';
import { WidgetMSavingGoals } from './WidgetMSavingGoals';

interface CardProps {
    widget: "budget" | "saving goals";
}

const DashboardCardM = ({widget}: CardProps) => {
    return (
        <>
            {(widget === "budget") ? <WidgetMBudget /> : (widget === "saving goals") && <WidgetMSavingGoals />}
        </>
    );
};

export default DashboardCardM;