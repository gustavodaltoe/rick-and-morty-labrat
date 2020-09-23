import app from './app';

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log('Running server on port 3333');
});
