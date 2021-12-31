import React from 'react'
import styles from './Modal.module.css'

export default function ModalEdit({openModalBackground,openEdit,setPendingData,modalName}) {
   
    return (
        
        <div className={styles.modal}>
            <div className={styles.modalCloseContainer}>
                <div className={styles.modalEdit}>
                    <button 
                        onClick={()=>{
                            let email = document.querySelector('#email_input').value
                            let phone = document.querySelector('#phone_input').value                           
                            let website = document.querySelector('#website_input').value                           
                           
                            setPendingData({name:modalName , email: email, phone:phone, website:website})
                            openEdit(false)
                        }}
                    >apply</button>
                </div>
                <button className={styles.modalClose} onClick={()=>{openModalBackground(false)}}>
                    <span className={`${styles.line} , ${styles.line1}`}></span>
                    <span className={`${styles.line} , ${styles.line2}`}></span>
                </button>
            </div>   
            <div className={styles.modalInfoContainer}>
                    <div className={styles.modalInfo}>
                        <p>name:{modalName}</p>
                        <div className={styles.modal_edit_input}><p>email: </p><input id='email_input' placeholder="company email"/></div>
                        <div className={styles.modal_edit_input}><p>phone: </p><input id='phone_input' placeholder="phone number"/></div>
                        <div className={styles.modal_edit_input}><p>website: </p><input id='website_input' placeholder="domain name"/></div>            
                    </div>
            </div>
            
        </div>  
    )
}
