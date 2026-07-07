import { Icon } from '../components/Icon';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const navButtonsClassName = "flex flex-row gap-3 items-center text-[26px] px-2 py-1 rounded-full";

    const navBtnsList = [
        {"name": "dashboard", "iconName": "dashboard"},
        {"name": "transactions", "iconName": "swap_horiz"},
        {"name": "wallet", "iconName": "wallet"},
        {"name": "goals", "iconName": "target"},
        {"name": "budget", "iconName": "paid"},
        {"name": "settings", "iconName": "settings"}
    ]

    const botNavBtnsList = [
        {"name": "help", "iconName": "help"},
        {"name": "log out", "iconName": "logout"}
    ]

    /* TEST */
    const [menuOptionClicked, setMenuOptionClicked] = useState<string>(navBtnsList[0].name);

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
                            {navBtnsList.map((btn) => (
                                <Link to={`/${btn.name}`}
                                        key={btn.name} 
                                        onClick={() => {setMenuOptionClicked(btn.name);
                                                        setIsMenuOpened(false);
                                        }} 
                                        className={`${navButtonsClassName} ${(menuOptionClicked === btn.name) && "bg-brand"}`}>
                                    <Icon name={btn.iconName} />
                                    {btn.name}
                                </Link>
                            ))}
                        </div>
                        <div className='flex flex-col gap-2 items-start'>
                            {botNavBtnsList.map((btn) => (
                                <button key={btn.name}
                                className={`${navButtonsClassName}`}>
                                    <Icon name={btn.iconName} />
                                    {btn.name}
                                </button>
                            ))}
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