module.exports = (req, res) => {
  if (req.url === '/gtm/healthy') {
    res.status(200).send('Healthy ✔️');
  } else {
    res.status(404).send('Not Found');
  }
};
