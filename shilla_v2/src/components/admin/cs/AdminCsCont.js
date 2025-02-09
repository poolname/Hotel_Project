import { useState, useEffect } from "react";
import axios from 'axios';
import AdminCsCont_title from "./AdminCsCont_title";
import AdminCsCont_Contents from "./AdminCsCont_Contents"; 
import Pagination  from "../../sub/Pagination";

const bkURL = process.env.REACT_APP_BACK_URL;

const AdminCsCont = () => {

    const [text, setText] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 수

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = text.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {
        // 데이터 가져오기
        axios.get(`${bkURL}/admin/cs`)
            .then(res => {
                setText(res.data);  
            })
            .catch(err => {
                console.error('에러발생 : ', err);
            });
    }, []);

    console.log('텍스트', text);

    return (
        <div className="cont cont7">
            <h2>고객센터: 문의하기</h2>
            <div className="board-answer-table">
                <AdminCsCont_title />
                {currentData.map((item,index) => (
                    <AdminCsCont_Contents key={index} item={item} />
                ))}
            </div>
            <Pagination
                totalItems={text.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default AdminCsCont;
