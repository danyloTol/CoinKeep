import { WidgetMBudget } from './WidgetMBudget';
import { WidgetMSavingGoals } from './WidgetMSavingGoals';

interface CardProps {
    widget: "budget" | "saving goals";
}

const LegendListClassName = "flex flex-row gap-0.5 items-center";

const DashboardCardM = ({widget}: CardProps) => {
    return (
        <>
            {(widget === "budget") ? <WidgetMBudget /> : (widget === "saving goals") && <WidgetMSavingGoals />}
        </>
    );
};

export default DashboardCardM;