import React,{useState} from 'react'
import style from './CompanyData.module.css'
export default function CompanyData({pending,declined,interviews,offers, myPending, myInterviews,removeInterviews, myOffers,removeOffers, myDeclined,openModalBackground,modalName}) {   
//-------------must find a better way of doing this--------------------------
    const[isPending,setPending] = useState(false)
    const[isDecline,setDecline] = useState(false)
    const[isInterview,setInterview] = useState(false)
    const[isOffer,setOffer] = useState(false)

    let dataPendingExpand = () =>{
    !isPending ? setPending(true) : 
        setPending(false);
        setOffer(false);
        setDecline(false);
        setInterview(false);
    }
    let dataDeclineExpand = () =>{
    !isDecline ? setDecline(true) : 
        setDecline(false);
        setOffer(false);
        setPending(false);
        setInterview(false);
    }
    let dataInterviewExpand= () =>{
    !isInterview ? setInterview(true) : 
        setInterview(false);
        setOffer(false);
        setDecline(false);
        setPending(false); 
    }
    let dataOfferExpand = () =>{
    !isOffer ? setOffer(true) : 
        setOffer(false);
        setPending(false);
        setDecline(false);
        setInterview(false);
    }
//---------must find a better way of doing this----------------------------
    return (
        <div className={style.data}>
            <div className={style.data_title}>
                <h3>company data</h3>
            </div>
            <div className={style.data_container}>
                <div className={isPending ?  `${style.data_item_open}  ${style.data_container_item}` : `${style.data_item_closed}  ${style.data_container_item}` } >
                    <div className={style.data_item_title} onClick={dataPendingExpand}>
                        <p>pending:</p>
                        <p>{pending.length}</p> 
                    </div>
                    <div className={isPending ? style.data_item_open_info: style.data_item_closed_info}>
                        { (pending.length > 0) ? pending.map((key)=>
                                <div className={style.data_item_unit}>
                                    <div className={style.data_item_unit_text} >
                                        <p>{key.name}</p>
                                    </div>
                                    <div className={style.data_item_unit_buttons}>
                                    <button
                                        onClick={()=>{                                          
                                            const filtered = pending.filter((x)=>{
                                                return (x.name !== key.name)
                                            })
                                            const interview = pending.filter((x)=>{
                                                return (x.name === key.name)
                                            })                                
                                            myPending(filtered)
                                            myInterviews(interview)                                            
                                        }}         
                                        >&#10003;</button>
                                    <button
                                        onClick={()=>{
                                            const filtered = pending.filter((x)=>{
                                                return (x.name !== key.name)
                                            })
                                            const declined = pending.filter((x)=>{
                                                return (x.name === key.name )
                                            })
                                            
                                            myPending(filtered)
                                            myDeclined(declined)
                                            
                                            
                                        }} 
                                    >&#10005;</button>    
                                    <button
                                        onClick={()=>{
                                            modalName(key.name)
                                            openModalBackground(true)              
                                        }}
                                    >&#8505;</button>
                                    </div>
                      
                                </div>                    
                            ) : <p>no pending info</p>       
                        }
                    </div> 
                </div>  
                <div className={isDecline ?  `${style.data_item_open}  ${style.data_container_item}` : `${style.data_item_closed}  ${style.data_container_item}` } >
                    <div className={style.data_item_title}  onClick={dataDeclineExpand}>
                        <p>declined:</p>
                        <p>{declined.length}</p>
                    </div>
                    <div className={isDecline ? style.data_item_open_info: style.data_item_closed_info}>
                        {   declined.length > 0
                            ? 
                            declined.map((key)=>
                                    <div className={style.data_item_unit}>
                                        <div className={style.data_item_unit_text} >
                                            <p>{key.name}</p>
                                        </div>
                                        <div className={style.data_item_unit_buttons}>
                                            <button
                                                onClick={()=>{
                                                    modalName(key.name)
                                                    openModalBackground(true)              
                                                }}
                                            >&#8505;</button>
                                        </div>                      
                                    </div>                    
                            ) 
                            :
                            <p>no decline info</p>       
                        }
                    </div>
                </div>
                <div className={isInterview ? `${style.data_item_open}  ${style.data_container_item}` : `${style.data_item_closed}  ${style.data_container_item}`} >
                    <div className={style.data_item_title} onClick={dataInterviewExpand}>
                        <p>interviews:</p>
                        <p>{interviews.length}</p>
                    </div>
                    <div className={isInterview ? style.data_item_open_info: style.data_item_closed_info}>
                        {   interviews.length > 0
                                ?                                 
                                interviews.map((key)=>
                                        <div className={style.data_item_unit}>
                                            <div className={style.data_item_unit_text} >
                                                <p>{key.name}</p>
                                            </div>
                                            <div className={style.data_item_unit_buttons}>
                                                <button
                                                    onClick={()=>{                                                        
                                                        const filtered = interviews.filter((keyy)=>{
                                                            return (keyy.name !== key.name)
                                                        })
                                                        const offers = interviews.filter((keyy)=>{
                                                            return (keyy.name === key.name)
                                                        })
                                                        removeInterviews(filtered)
                                                        myOffers(offers)                                                                                                    
                                                    }}                                                 
                                                >&#10003;</button>
                                                <button
                                                    onClick={()=>{                                                
                                                        const filtered = interviews.filter((keyy)=>{
                                                            return (keyy.name !== key.name)
                                                        })                                                    
                                                        const declined = interviews.filter((keyy)=>{
                                                            return (keyy.name === key.name)
                                                        })
                                                        removeInterviews(filtered)
                                                        myDeclined(declined)                                                                                                        
                                                    }} 
                                                >&#10005;</button>
                                                <button
                                                    onClick={()=>{
                                                        modalName(key.name)
                                                        openModalBackground(true)              
                                                    }}
                                                >&#8505;</button>
                                            </div>                      
                                        </div>                    
                                ) 
                                :
                                <p>no interview info</p>       
                        }
                    </div>
                </div>
                <div className={isOffer ? `${style.data_item_open}  ${style.data_container_item}` : `${style.data_item_closed}  ${style.data_container_item}`} >
                    <div className={style.data_item_title} onClick={dataOfferExpand}>
                        <p>offers:</p>
                        <p>{offers.length}</p>
                    </div>
                    <p className={isOffer ? style.data_item_open_info: style.data_item_closed_info}>
                    {   offers.length > 0
                                ? 
                                offers.map((key)=>
                                        <div className={style.data_item_unit}>
                                            <div className={style.data_item_unit_text} >
                                                <p>{key.name}</p>
                                            </div>
                                            <div className={style.data_item_unit_buttons}>
                                                <button onClick={()=>alert('congratulats on the job!')}>&#10003;</button>
                                                <button
                                                    onClick={()=>{                                                
                                                        const filtered = offers.filter((keyy)=>{
                                                            return (keyy.name !== key.name)
                                                        })                                                        
                                                        const declined = offers.filter((keyy)=>{
                                                            return (keyy.name === key.name)
                                                        })                                                      
                                                        removeOffers(filtered)
                                                        myDeclined(declined)                                                                                                               
                                                    }}
                                                >&#10005;</button>
                                                <button
                                                    onClick={()=>{
                                                        modalName(key.name)
                                                        openModalBackground(true)              
                                                    }}
                                                >&#8505;</button>
                                            </div>                      
                                        </div>                    
                                ) 
                                :
                                <p>no interview info</p>       
                        }
                    </p>
                </div>
                <div className={`${style.data_item_closed}  ${style.data_container_item_total}`} >
                    <div className={style.data_item_title}>
                        <p>total:</p>
                        <p>{pending.length + declined.length + interviews.length + offers.length}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}



