import React from 'react'
import Table from 'rc-table'
import style from './buyurtmastyle.module.css'
import { IconDelit, IconEdit, Plusicon, RowL, RowR } from '../../svg';


export default function Maxsulotlar() {

    const data = [
        {
            cotegoriya: 'Fast food',
            dokon: 2,
            status: 'enebled'


        },
        {
            cotegoriya: 'Texnika',
            dokon: 12,
            status: 'enebled'
        },
        {
            cotegoriya: 'Kiyimlar',
            dokon: 3,
            status: 'enebled'
        },
        {
            cotegoriya: 'Telefonlar',
            dokon: 10,
            status: 'enebled'
        },
        {
            cotegoriya: 'Oziq-ovqat',
            dokon: 3,
            status: 'enebled'
        }
    ]


    const colums = [
        {
            title: 'kategoriya',
            dataIndex: 'cotegoriya',
            key: 'kategoriya',
            width: 100,
        },
        {
            title: 'Dokonlar',
            dataIndex: 'dokon',

            key: 'Dokonlar',
            width: 100,
        },
        {

            title: 'tahrirlash',
            render: (row) => <button className={style.editIconButton}><IconEdit /></button> //<IconEdit />
        },
        {
            title: 'holat',
            width: 200,
            render: (row) => <span className={row.status == 'enebled' ? `${style.success}` : `${style.defeat}`}>{row.status}</span>
        },
        // {

        //     title: 'ochirish',
        //     render: (row) => <button className={style.delitIconButton} ><IconDelit /></button>
        // },
    ];

    return (
        <>


            <div className={style.topSidebar}>
                <div className={style.title}>
                    <a>home / </a>
                    kategoriya
                </div>

                <button className={style.button}>Qo'shish
                    <Plusicon />
                </button>
            </div>
            < Table className={style.MyTable} footer={() => (
                <div className={style.footerBtns}>
                    <button className={style.btn}>
                        <RowL />
                    </button>
                    <button className={style.btn}>
                        <RowR />
                    </button>
                </div>
            )}

                columns={colums} data={data} />
        </>

    )
}
