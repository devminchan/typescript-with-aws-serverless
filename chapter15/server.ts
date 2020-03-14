import express from 'express';
import mysql from 'mysql';

const app = express();

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  port: 3306,
  user: 'myname',
  password: 'password',
  database: 'test',
});

connection.connect(err => {
  if (err) {
    console.error('Error occured during connecting to database', err);
  } else {
    console.log('Connection success');
  }
});

app.get('/', (req: express.Request, res: express.Response) => {
  connection.query('SELECT 1 + 1 as VALUE;', (err, results) => {
    if (err) throw err;

    res.json(results);
  });
});

app.listen(4000, function() {
  console.log('server starting with 4000');
});
