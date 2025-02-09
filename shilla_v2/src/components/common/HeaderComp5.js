import React from "react";
import { Link, Navigate } from 'react-router-dom';
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/header.scss'
import '../../scss/main.scss'


    const HeaderComp5 = ({gnbMenu}) => {    
    
   
       

    return (
        <ul className="m_gnb">
            {
                gnbMenu.map((item,index)=>{
                    return  <li key={index} >
                               
                                <Link to='#self'>{item.title}</Link>
                                <ul className="m_sub" >
                                    {
                                        
                                        item.gnbMenu.map((depth2,idx)=>{
                                            return <li key={idx}><Link to={depth2.link} >{depth2.text}</Link></li>  
                                   
                                        })
                                        
                                    }
                                </ul>
                            </li>
                })
            }
        </ul>
    );
};

export default HeaderComp5;
