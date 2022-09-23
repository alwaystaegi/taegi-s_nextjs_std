export default function route(req, res) {
  console.log(req.query);
  res.json({ ok: true, message: "GET CALL" });
}
