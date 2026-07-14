const transactions = [
    { date: '25 Jul', amount: '-10$', name: 'YouTube', method: 'VISA **3254', cat: 'Subscription' },
    { date: '26 Jul', amount: '-150$', name: 'Reserved', method: 'Mastercard **3255', cat: 'Shopping' },
    { date: '27 Jul', amount: '-80$', name: 'Yaposhka', method: 'Mastercard **3255', cat: 'Cafe & Restaurants' },
]

export const WidgetLRecentTransactions = () => {
    return (
        <div className="flex flex-col px-6.25 py-3.5 w-full outline-1 outline-text-secondary-light rounded-[30px]">
            <h1 className="text-text-primary-light text-[24px]">Recent transactions</h1>

            <div className="grid grid-cols-5 gap-4 bg-brand-light p-4 rounded-full items-center text-brand text-[12px] mb-2">
                <div>Date</div>
                <div>Amount</div>
                <div>Payment name</div>
                <div>Method</div>
                <div>Category</div>
            </div>

            {transactions.map((t, i) => (
                <div key={i} className="grid grid-cols-5 gap-4 p-4 border-b border-text-secondary-light last:border-0 items-center text-[10px] text-text-primary-light">
                    <div>{t.date}</div>
                    <div>{t.amount}</div>
                    <div>{t.name}</div>
                    <div>{t.method}</div>
                    <div>{t.cat}</div>
                </div>
            ))}
        </div>
    )
}