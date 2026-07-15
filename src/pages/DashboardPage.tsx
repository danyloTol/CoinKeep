import Button from "../components/Button"
import DashboardCardS from "../components/dashboard/dashboardCardsS/CardS"
import DashboardCardM from "../components/dashboard/dashboardCardsM/CardM"
import DashboardCardL from "../components/dashboard/dashboardCardsL/CardL"

const DashboardPage = () => {
    return (
        <div className="flex flex-col gap-2.25 w-full px-4 pt-3.5">
            <header className="mb-1.25">
                <h1 className="text-[26px] text-text-primary-light">Welcome back, First name</h1>
                <h3 className="text-[14px] text-text-secondary-light mb-2.25">It is the best time to manage your finances</h3>
                <Button buttonText="Manage widgets" category='outline' type='secondary' fontSize={20} padY={3} />
            </header>
            {/* SMALL CARDS SECTION */}
            <div className="grid grid-cols-2 gap-2.25">
                <DashboardCardS type="total_balance" thisMonthValue={12343} lastMonthValue={2344} />
                <DashboardCardS type="income" thisMonthValue={12344} lastMonthValue={2344} />
                <DashboardCardS type="expense" thisMonthValue={12344} lastMonthValue={2344} />
                <DashboardCardS type="total_saving" thisMonthValue={12344} lastMonthValue={2344} />
            </div>
            {/* MEDIUM CARDS SECTION */}
            <div className="grid grid-cols-1 gap-2.25">
                <DashboardCardM widget="budget" />
                <DashboardCardM widget="total_balance" thisMonthValue={9900} lastMonthValue={8000} />
            </div>
            {/* LARGE CARDS SECTION */}
            <div className="grid grid-cols-1 gap-2.25">
                <DashboardCardL widget="money_flow" />
                <DashboardCardL widget="recent_transactions" />
            </div>
        </div>
    );
}

export default DashboardPage