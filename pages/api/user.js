//!api 폴더: 서버를 위한 폴더(이름 자체만으로 next에서 서버내의 파일로 인식함)

export default function handler(
  req,
  res /*//!req res== props와 같은 인자지만 받는 요소가 다름 */
) {
  console.log(req.method);

  //
  switch (req.method) {
    case "GET":
      res.json(
        "https://api.themoviedb.org/3/movie/popular?api_key=b3982d81af5440cf98354d86429224d1&language=ko&region=KR"
      );
      res.status(500).json({ ok: true, message: "GET CALL" });
      break;
    case "POST":
      res.json({ ok: true, message: "POST CALL" });
      break;
    case "DELETE":
      res.json({ ok: true, message: "DELETE CALL" });
      break;
  }

  return <div>hello world</div>;
}
