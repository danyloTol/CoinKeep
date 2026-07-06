import { Icon } from '../components/Icon'   
import { useState } from 'react';



const SideBar = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    return (
        <>
            <div className="w-screen h-17.5 bg-bg-sidebar flex flex-row justify-between items-center px-4">
                <button onClick={() => {setIsMenuOpened(true)}}>
                    <Icon name="menu" className='!text-[50px] text-text-primary-light' />
                </button>
                <button>
                    <Icon name="update" className='!text-[50px] text-text-primary-light' />
                </button>
            </div>
            {isMenuOpened && (
                <div className='fixed inset-0 z-50 h-screen w-[75%] bg-bg-sidebar'>
                    <button onClick={() => {setIsMenuOpened(false)}}>
                        <Icon name="close" className='!text-[50px] text-text-primary-light' />
                    </button>
                </div>
            )}
            
        </>
    )
}

export default SideBar