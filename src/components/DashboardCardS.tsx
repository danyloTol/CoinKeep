const DashboardCardS = () => {
    return (
        <div className="flex flex-col gap-4 py-2 px-6.25 outline-1 outline-text-secondary-light rounded-[30px]">
            <div>
                <h3 className="text-[14px]">Total balance</h3>
            </div>
            <div>
                <h2 className="text-text-primary-light text-[24px]">$17,854<span className="text-text-secondary-light">.38</span></h2>
            </div>
            <div className="flex flex-row items-center justify-between">
                <p className="w-max px-1.25 py-0.75 rounded-full bg-bg-success text-text-success text-[12px]">⬆ 12.1%</p>
                <p className="text-[10px] text-text-secondary-light">vs last month</p>
            </div>
        </div>
    )
}

export default DashboardCardS