import { WidgetMBudget } from './DashboardWidgetMBudget';

interface CardProps {
    widget: "budget" | "saving goals";
}

const LegendListClassName = "flex flex-row gap-0.5 items-center";

const DashboardCardM = ({widget}: CardProps) => {
    return (
        <>
            {(widget === "budget") ? <WidgetMBudget /> : <p></p>}
        </>
    );
};

export default DashboardCardM;