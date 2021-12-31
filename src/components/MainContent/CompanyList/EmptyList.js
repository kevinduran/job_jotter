import React from 'react'
import styles from './CompanyList.module.css'


export default function EmptyList() {
    return (
        <div className={styles.empty_list}>
            <h2>your list is empty</h2>
            <h2>please add a company </h2>
        </div>
    )
}
