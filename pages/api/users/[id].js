//!api 폴더: 서버를 위한 폴더(이름 자체만으로 next에서 서버내의 파일로 인식함)

export default function handler(
  req,
  res /*//!req res== props와 같은 인자지만 받는 요소가 다름 */
) {
  console.log(req.query.id);
  //

  res.status(500).json({ ok: true, message: "GET CALL" });
}
