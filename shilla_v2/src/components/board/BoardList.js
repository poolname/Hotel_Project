import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../../scss/reset.css'
import '../../scss/common.scss'
import '../../scss/sub06_03.scss'
import SecretPage from "./SecretPage";
import Pagination from "../sub/Pagination";
import Noticesearch from "../notice/Noticesearch";

const bkURL = process.env.REACT_APP_BACK_URL;

const BoardList = () => {

    const [text, setText] = useState([]);
    const [user, setUser] = useState(null);

    const [Ntype, setNtype] = useState("all");
    const [Ntext, setNtext] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // 한 페이지에 보여줄 아이템 수

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = text.slice(startIndex, startIndex + itemsPerPage);

    useEffect(() => {

        // 로그인 여부 확인
        const id = sessionStorage.getItem("id");
        const name = sessionStorage.getItem("name");
        const grade = sessionStorage.getItem("grade");
        
        if(id) {
            setUser({'id':id, "name": name, "grade":grade});
        } else {
            setUser(null);
        }

        axios.get(`${bkURL}/board`)
        .then(res => {
            setText(res.data);
        })
        .catch(err => {
            console.error('에러발생 : ', err);
        })

    }, []);

    //검색
    const handleSearch = async e => {
        e.preventDefault();

        const frmData = new FormData(document.myFrm);
        const myData = Object.fromEntries(frmData);

        try {
            console.log("폼데이터", myData);
            const res = await axios.put(
                `${bkURL}/board`, 
                myData
            );
            console.log("필터데이터", res.data);
            alert("검색완료");
            setText(res.data);
        } catch (err) {
            console.error("에러메세지", err);
        }
    };

    const navigate = useNavigate();

    if (!user) {
        navigate('/login');
        return <></>;
    }

    console.log('텍스트', text);

    return (
        <div className="container">
            <div className="center">
                <h2 className="title">문의하기</h2>
                <ul className="board-nav">
                    <li className="post-num">번호</li>
                    <li className="post-title">제목</li>
                    <li className="post-writer">작성자</li>
                    <li className="post-date">작성일</li>
                </ul>

                {
                    currentData.map((list, idx) => {
                        return <ul className="post" key={idx}>
                                    <li className="post-num">{list.board_id}</li>
                                    <SecretPage  data={list} user={user} />
                                    <li className="post-writer">{list.writer_name}</li> {/* 작성자 추가 */}
                                    <li className="post-date">{list.reg_str}</li> {/* 작성일 추가 */}
                                </ul>
                    })
                }

                <div className="btn-wrap type4">
                    <div className="align right">
                        <Link to="/board/join" className="btn btn-01">문의하기</Link>
                    </div>
                </div>

                <div className="search-wrap">
                    <Noticesearch
                        text={text}
                        setText={setText}
                        Ntype={Ntype}
                        setNtype={setNtype}
                        Ntext={Ntext}
                        setNtext={setNtext}
                        handleSearch={handleSearch}
                    />
                </div>

                <Pagination
                    totalItems={text.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default BoardList;
