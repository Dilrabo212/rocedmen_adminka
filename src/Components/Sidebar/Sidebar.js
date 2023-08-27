import { Link } from 'react-router-dom'
import { BuyurtmalarIcon, MijozlarIcon, MahsulotlarIcon, SettingsIcon } from '../svg'
import styles from './style.module.scss'

const items = [
    { id: 1, link: '/buyurtmalar', name: 'Buyurtmalar', icon: <BuyurtmalarIcon /> },
    { id: 2, link: '/mijozlar', name: 'Mijozlar', icon: <MijozlarIcon /> },
    { id: 3, link: '/mahsulotlar', name: 'Mahsulotlar', icon: <MahsulotlarIcon /> }
]

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.list}>
                {items.map(el => (
                    <Link className={styles.item} to={el.link} key={el.id}>
                        {el.icon} {el.name}
                    </Link>
                ))}
            </div>
            <Link className={styles.settings} to={'/settings'}>
                <SettingsIcon />
                Sozlamalar
            </Link>
        </div>
    )
}