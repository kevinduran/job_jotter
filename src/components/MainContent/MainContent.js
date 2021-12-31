import React,{useState} from 'react'
import CompanyList from './CompanyList/CompanyList'
import CompanyData from './CompanyData/CompanyData'
import ModalBackground from '././CompanyList/Modal/ModalBackground'

import styles from './MainContent.module.css'

export default function MainContent() { 
    const[error,setError] = useState('');
    const[pending, setPending] = useState([])
    const[declined, setDeclined] = useState([])
    const[interviews, setInterviews] = useState([])
    const[offers, setOffers] = useState([])
    const[openModalBackground,setOpenModalBackground]= useState(false)
    const[modalName, setModalName] = useState('')
    

    const addCompany = () => {
        var inputValue = document.querySelector('input').value;       
        inputValue !== ''  
        ? 
        setPending([
                    ...pending,
                    (setError(''),
                    {
                        name:inputValue,
                    })
                ]) 
        : 
        setError('*cannot be blank')
        document.querySelector('input').value=''               
    } 

    const setData = (data) => {
        const filtered = pending.filter((x)=>{
            return(x.name!==data.name)
        }) 
        filtered.push(data) 
        setPending(filtered)
    }



    return (
        <div className={styles.project_container}>     
            <div  className={styles.input_container_large}>
                    <div className={styles.blank_input_container_small}></div>
                    <div className={styles.input_container_small}>
                        <div className={styles.input_container_small_error}>
                            <p>{error}</p>
                        </div>
                        <div className={styles.input_container_small_input}>
                            <input placeholder="add company name..." className={styles.input} />
                            <button onClick={()=>addCompany()}  className={styles.btn}>add</button>
                        </div>
                    </div>
            </div>
            <div className={styles.company_output_layout}>
                <div className={styles.company_data}>
                    <CompanyData pending={pending} 
                                declined={declined} 
                                interviews={interviews}
                                offers={offers}
                                modalName={(name)=>setModalName(name)}

                                myPending={(list)=>setPending(list)} 
                                myOffers={(job)=>setOffers([...offers,{name:job[0].name}])}
                                //{name:job[0].name} needs to change...
                                myDeclined={(job)=>setDeclined([...declined,{name:job[0].name}])}
                                myInterviews={(job)=>setInterviews([...interviews,{name:job[0].name}])}
                                removeInterviews={job=>setInterviews(job)} 
                                removeOffers={job=>setOffers(job)}
                                openModalBackground={(x)=>setOpenModalBackground(x)}
                    />
                </div>         
                <div className={styles.company_list}>
                    <CompanyList myList={pending} 
                                myPending={(list)=>setPending(list)}                     
                                myDeclined={(deleted)=>setDeclined([...declined,{name:deleted}])}
                                myInterviews={(job)=>setInterviews([...interviews,{name:job}])}  
                                openModalBackground={(x)=>setOpenModalBackground(x)}
                                modalName={(name)=>setModalName(name)}
                    />
                </div> 
            </div>
            {
                openModalBackground === true 
                    &&
                <ModalBackground 
                    openModalBackground={(x)=> setOpenModalBackground(x)}  
                    setPendingData={(data)=>setData(data)}
                    pending={pending}     
                    declined={declined} 
                    interviews={interviews}
                    offers={offers}
                    modalName={modalName}
                />
            }

        </div>    
    )
}

