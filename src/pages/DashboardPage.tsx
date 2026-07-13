import Button from "../components/Button"
import DashboardCardS from "../components/DashboardCardS"
import DashboardCardM from "../components/DashboardCardM"
import DashboardCardL from "../components/DashboardCardL"

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
                <DashboardCardS />
                <DashboardCardS />
                <DashboardCardS />
                <DashboardCardS />
            </div>
            {/* MEDIUM CARDS SECTION */}
            <div className="">
                <DashboardCardM />
                <DashboardCardM />
            </div>
            {/* LARGE CARDS SECTION */}
            <div className="">
                <DashboardCardL />
                <DashboardCardL />
            </div>
        </div>
    );
}

export default DashboardPage