export function logReq(req, _res, next) {
  console.log(`${req.method} -- ${req.url} -- ${new Date().toLocaleTimeString()}`);
  if (req.body && Object.keys(req.body).length > 0) {
    // Logs request bodies INCLUDING passwords, Remove on deployment
    console.table(req.body); 
  }
  next();
}

export function globalErr(err, req, res, next) {
  res.status(err.status || 500).json({ error: `❌ Error: ${err.message}` });
}