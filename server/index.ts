import express from 'express';
import path from 'path';
const app = express();
const PORT = 3003;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running locally on ${PORT}`)
});
