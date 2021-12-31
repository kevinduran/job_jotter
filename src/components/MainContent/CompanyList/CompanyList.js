import React from 'react'
import ListItem from './ListItem'
import EmptyList from './EmptyList.js'
import styles from './CompanyList.module.css'

export default function CompanyList({myList,myPending,myDeclined,myInterviews,myOffers,openModalBackground,modalName}) {
    return (
        <div className={styles.list}>
            <div className={styles.list_title}>
                <h3>company list</h3>
            </div>
            <div className={styles.list_output}>
                {
                    myList.length >= 1  
                    ?    
                    myList.map((todo)=>{  
                        return (
                            todo.name!=='' 
                            ?
                            <ListItem key={todo.name} 
                                myInputValue={todo.name}
                                modalName={modalName}
                                myPending={myPending}
                                myList={myList} 
                                myDeclined={myDeclined}
                                myInterviews={myInterviews}
                                myOffers={myOffers}
                                openModalBackground={openModalBackground}
                            /> 
                            :null )
                    })
                    :
                    <EmptyList/>
                }
            </div>
        </div>
    )
    
}