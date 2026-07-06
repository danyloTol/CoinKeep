import { Icon } from '../components/Icon'   
import { useState } from 'react';

const SideBar = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <>
            <div className="w-screen h-17.5 bg-bg-sidebar flex flex-row justify-between items-center px-4">
                <button onClick={() => setIsMenuOpened(true)}>
                    <Icon name="menu" className='!text-[50px] text-text-primary-light' />
                </button>
                <button>
                    <Icon name="update" className='!text-[50px] text-text-primary-light' />
                </button>
            </div>

            <div className={`fixed inset-0 z-50 h-screen w-[75%] bg-bg-sidebar transition-transform duration-300 ease-in-out ${
                isMenuOpened ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <button onClick={() => setIsMenuOpened(false)} className="p-4">
                    <Icon name="close" className='!text-[50px] text-text-primary-light' />
                </button>
            </div>

            <div 
                onClick={() => setIsMenuOpened(false)}
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
                    isMenuOpened ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            />
        </>
    )
}

export default SideBar