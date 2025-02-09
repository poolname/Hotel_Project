import React from "react";
import { Link } from 'react-router-dom';
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/header.scss'
import '../../scss/main.scss'

const HeaderComp1 = ({gnbMenu}) => {
    return (
        <ul className="gnb"  >
            {
                gnbMenu.map((item,index)=>{
                    return  <li key={index} >
                                <Link to={item.link}>{item.title}</Link>
                                <ul className="depth2">
                                    {
                                        item.gnbMenu.map((depth2,idx)=>{
                                            return <li key={idx}><Link to={depth2.link}>{depth2.text}</Link></li>
                                        })
                                    }
                                </ul>
                            </li>
                })
            }
        </ul>
    );
};

export default HeaderComp1;
