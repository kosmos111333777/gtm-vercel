const express = require('express');
const app = express();
app.use(express.json());

app.post('/collect', (req, res) => {
  console.log('📥 Получены данные от клиента:', JSON.stringify(req.body));
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  res.send('GTM Server is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
});
