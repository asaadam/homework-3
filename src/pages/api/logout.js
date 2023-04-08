export default async function handler(req, res) {
  res.setHeader("Set-Cookie", `token=; httpOnly; path=/`);
  return res.status(200).json({ message: "Logged out" });
}