import { Icon } from '../components/Icon';
import { useState } from 'react';

const SideBar = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const navButtonsClassName = "flex flex-row gap-3 items-center text-[26px]";

    return (
        <>
            {/* Sidebar */}
            {/* PS: for small screens sidebar is on the top of screen */}
            <div className="w-screen h-17.5 bg-bg-sidebar flex flex-row justify-between items-center px-4">
                <button onClick={() => setIsMenuOpened(true)}>
                    <Icon name="menu" className='!text-[50px] text-text-primary-light' />
                </button>
                <button>
                    <Icon name="update" className='!text-[50px] text-text-primary-light' />
                </button>
            </div>

            {/* Menu container */}
            <div className={`fixed inset-0 z-50 h-screen w-[75%] bg-bg-sidebar transition-transform duration-300 ease-in-out ${
                isMenuOpened ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className='flex flex-col h-full items-start px-5 py-3'>
                    <button onClick={() => setIsMenuOpened(false)}>
                        <Icon name="close" className='!text-[40px] text-text-primary-light' />
                    </button>
                    <div className='flex flex-col h-full justify-between px-1 py-5'>
                        <div className='flex flex-col gap-2 items-start'>
                            <button className={navButtonsClassName}>
                                <Icon name="dashboard" className='!text-[30px]' />
                                Dashboard
                            </button>
                            <button className={navButtonsClassName}>
                                <Icon name="swap_horiz" className='!text-[30px]' />
                                Transactions
                            </button>
                            <button className={navButtonsClassName}>
                                <Icon name="wallet" className='!text-[30px]' />
                                Wallet
                            </button>
                            <button className={navButtonsClassName}>
                                <Icon name="target" className='!text-[30px]' />
                                Goals
                            </button>
                            <button className={navButtonsClassName}>
                                <Icon name="paid" className='!text-[30px]' />
                                Budget
                            </button>
                            <button className={navButtonsClassName}>
                                <Icon name="settings" className='!text-[30px]' />
                                Settings
                            </button>
                        </div>
                        <div className='flex flex-col gap-2 items-start'>
                            <button className={navButtonsClassName}>
                                <Icon name="help" className='!text-[30px]' />
                                Help
                            </button>
                            <button className={navButtonsClassName}>
                                <Icon name="logout" className='!text-[30px]' />
                                Log out
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu background */}
            <div 
                onClick={() => setIsMenuOpened(false)}
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
                    isMenuOpened ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            />
        </>
    )
}

export default SideBar;