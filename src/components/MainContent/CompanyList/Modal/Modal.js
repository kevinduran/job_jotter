import React from 'react'
import styles from './Modal.module.css'

export default function Modal({pending,openModalBackground,openEdit,modalName}) {
    return (
        
        <div className={styles.modal}>
            <div className={styles.modalCloseContainer}>
                <div className={styles.modalEdit}>
                    <button onClick={()=>{openEdit(true)}}>edit</button>
                </div>
                <button className={styles.modalClose} onClick={()=>{openModalBackground(false)}}>
                    <span className={`${styles.line} , ${styles.line1}`}></span>
                    <span className={`${styles.line} , ${styles.line2}`}></span>
                </button>
            </div>   
            <div className={styles.modalInfoContainer}>
                    <div className={styles.modalInfo}>
                        <p>name: {modalName}</p>
                        <p>email: {pending.map((x)=>{
                              return (x.name===modalName && x.email)
                        })}</p>
                        <p>phone: {pending.map((x)=>{
                              return (x.name===modalName && x.phone)
                        })}</p>  
                        <p>website: {pending.map((x)=>{
                              return (x.name===modalName && x.website)
                        })} </p> 
                    </div>
            </div>
        </div>
       
    )
}

