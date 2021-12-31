import React,{useState} from 'react'
import styles from './Modal.module.css'
import Modal from './Modal'
import ModalEdit from './ModalEdit'

export default function ModalBackground({openModalBackground,pending,setPendingData,modalName}) {

    const [edit,setEdit] = useState(false)

    return (
        <div className={styles.modalContainerBig}>
            <div className={styles.modalBackground} onClick={()=>{openModalBackground(false)}} ></div>
            
            {!edit
                ?
            <Modal  
                openModalBackground={openModalBackground}
                openEdit={(x)=>{setEdit(x)}}  
                pending={pending}  
                modalName={modalName}
                 
            />
                :
            <ModalEdit 
                openEdit={(x)=>{setEdit(x)}}
                openModalBackground={openModalBackground}
                pending={pending}
                modalName={modalName}
                setPendingData={setPendingData}
            />}
        </div>
    )
}
