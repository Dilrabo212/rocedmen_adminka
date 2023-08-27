
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

export default function MainLayout() {
    return (
        <>
            <Header />
            <div className='wrapper'>
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}
