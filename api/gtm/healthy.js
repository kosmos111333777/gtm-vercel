// api/gtm/healthy.js

export default function handler(req, res) {
    res.status(200).json({ status: "GTM Server Healthy" });
  }
  