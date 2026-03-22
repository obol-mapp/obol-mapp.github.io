export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();
  res.status(200).json({
    version: "20260322130811",
    url: "https://obol-mapp-github-io.vercel.app/bundle.zip",
    checksum: ""
  });
}
