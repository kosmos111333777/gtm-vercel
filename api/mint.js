const axios = require('axios');

const MEASUREMENT_ID = 'G-LSTHRB63KC'; // ✅ твой реальный ID
const API_SECRET = 'BAuGvtpHRlGotjORCYpA'; // ✅ твой реальный Secret

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST requests allowed' });
  }

  const mint = req.body;

  const payload = {
    client_id: mint.wallet || 'debug-user',
    events: [
      {
        name: 'pyramid_minted',
        params: {
          wallet: mint.wallet,
          token_id: mint.token_id,
          tx_hash: mint.tx_hash,
          chain: mint.chain,
          pyramid_id: mint.pyramid_id,
          contract_address: mint.contract_address,
          referral: mint.referral,
          quest_id: mint.quest_id,
          debug_mode: true
        }
      }
    ]
  };

  try {
    const gaRes = await axios.post(
      `https://www.google-analytics.com/mp/collect?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`,
      payload,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    console.log('✅ GA response:', gaRes.status);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('❌ Error sending event to GA:', error.response?.data || error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
