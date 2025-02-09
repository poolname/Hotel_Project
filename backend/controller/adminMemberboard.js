const express = require("express");
const conn = require("../db");
const router = express.Router();
const cors = require('cors');

router.use(cors());

module.exports = () => {
    router.get("/", async (req, res) => {
        console.log("백엔드 접근하기")
        try {
            const [memberDB] = await conn.execute("select * from member where grade != 1")
            const [reserveDB] = await conn.execute("select * from reservation")
            res.json({
                members: memberDB,
                reservers: reserveDB,
            })
        } catch (err) {
            console.log("sql 실패", err.message)
            res.status(500).send("db 받기 오류")
        }
    })

    // 회원관리 detail 연결
    router.get("/detail/:member_id", async (req, res) => {
        const { member_id } = req.params
        console.log("받은 member_id: ", member_id)

    try {
    const [result] = await conn.execute(
        `select m.member_id, m.name, m.email, m.phone, m.birth, m.join_date, m.grade, m.description, m.withdrawal, m.withdrawal_date,
        r.reservation_id, r.start_date, r.end_date, r.tot_price, r.adult_cnt, r.child_cnt, r.Cancel
        from member m join reservation r on m.member_id = r.member_id
        where m.member_id = ?`, [member_id]
    )
    const [member] = await conn.execute("select * from member where member_id = ? ", [member_id])
    res.json(
        {reserve:result, mem : member[0]}
    )
    } catch (err) {
            console.log("sql 실패", err.message)
            res.status(500).send("db 받기 오류")
        }
    })

    router.put("/", async (req, res) => {
        const { grade, member_id, description } = req.body
        console.log("grade : ", grade, "member_id : ", member_id, "description", description)
    
        try {
            await conn.execute("update member set grade = ?, description = ? where member_id = ?", [grade, description, member_id]);
            res.send("수정 완료");
            console.log("결과 테스트", grade, member_id, description)
        } catch (err) {
            console.error("POST 수정 실패 : ", err.message);
            res.status(500).send("POST 수정 과정 중 오류 발생");
        }
    });
    
    return router
}