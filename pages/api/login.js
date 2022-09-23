import axios from "axios";

const 원본ID = "At";
const 원본PW = "1234";

export default function handler(req, res) {
  const { id, pw } = req.body;
  const red = axios.get("https://geolocation-db.com/json/").then((red) => {
    console.log("접속IP == ", red.data.IPv4);
  });
  if ("POST" !== req.method) {
    return res
      .status(405)
      .json({ ok: false, message: "지원하지 않는 메서드 입니다." });
  }
  if (!id) return res.json({ ok: false, message: "id를 입력하세요" });
  if (!pw) return res.json({ ok: false, message: "pw를 입력하세요" });

  if (id === 원본ID && pw === 원본PW) {
    console.log(원본ID);
    res.json({ ok: true, message: "로그인완료" });
  } else
    res.json({ ok: false, message: "아이디와 패스워드가 일치하지 않습니다." });
}
