import React from 'react'
import styles from './CompanyList.module.css'



export default function ListItem({myInputValue,myList,myPending,myDeclined,myInterviews,openModalBackground,modalName}) {
    return (
        <div className={styles.list_item}>
            <div className={styles.list_item_title}>
                <p>{myInputValue}</p>
            </div>
            <div className={styles.list_item_options}>
                <button className={styles.checkmark}
                    onClick={()=>{
                        const filtered = myList.filter((key)=>{
                            return (key.name !== myInputValue)
                        })
    
                        const interviews = myList.filter((key)=>{
                            return (key.name === myInputValue )
                        })
                        myPending(filtered)
                        myInterviews(interviews[0].name)
                        
                        
                    }} 
                >&#10003;</button>
                <button 
                    onClick={()=>{
                        const filtered = myList.filter((key)=>{
                            return (key.name !== myInputValue)
                        })
                        const declined = myList.filter((key)=>{
                            return (key.name === myInputValue )
                        })
                      
                        myPending(filtered)
                        myDeclined(declined[0].name)
                        
                        
                    }} 
                >&#10005;</button>
                <button 
                    onClick={() =>{
                        modalName(myInputValue)
                        openModalBackground(true)
                    } }
                >&#8505;</button>
            </div>
        </div>
    )

}


// THE ANSWER IS IN THE LAST BUTTON ABOVE. YOU MUST SEND MY  INPUT VALUE UP THE DATA PROPS