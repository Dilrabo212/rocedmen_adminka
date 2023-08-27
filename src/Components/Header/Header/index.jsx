import styles from './styles.module.scss'
import { ArrowDownIcon, LogoIcon, SearchIcon, UserIcon } from '../../svg'

export default function Header() {
  const logOut = () => {
    localStorage.setItem('token', '')
    window.location.reload()

  }


  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logoBox}>
          <LogoIcon />
        </div>
        <div className={styles.section}>
          <label className={styles.inpBox}>
            <input className={styles.inp} type='text' placeholder='Mijozni qidiring' />
            <button className={styles.btn}><SearchIcon /></button>
          </label>
          <div className={styles.profil} onClick={logOut}>
            <div className={styles.userIcon}>
              <UserIcon />
            </div>
            <span className={styles.userName}>John Doe</span>
            <ArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
