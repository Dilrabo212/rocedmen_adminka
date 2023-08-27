import React from 'react'
import style from './main.module.scss'
import MyTable from '../../myTable/myTable'
import { Plusicon } from '../../svg'


export default function Buyurtmalar() {
    return (
        <div className={style.body}>
            <div className={style.mainWrap}>

                <div className={style.topSidebar}>
                    <div className={style.title}>
                        <a>home / </a>
                        kategoriya
                    </div>

                    <button className={style.button}>Qo'shish
                        <Plusicon />
                    </button>
                </div>


                <MyTable />

            </div>
        </div>
    )
}
