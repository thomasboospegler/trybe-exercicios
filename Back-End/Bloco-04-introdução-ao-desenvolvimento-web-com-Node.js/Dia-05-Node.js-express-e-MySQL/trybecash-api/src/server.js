// src/server.js
require('dotenv').config();
const app = require('./app');
const connection = require('./db/connection');

const port = 3001;

app.listen(port, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${port}`);
  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);
});


// Para testar a conecção com o MySQL

// app.listen(port, async () => {
//   console.log(`API TrybeCash está sendo executada na porta ${port}`);

//   // O código abaixo é para testarmos a comunicação com o MySQL
//   const [ result ] = await connection.execute('SELECT 1');
//   if (result) {
//     console.log('MySQL connection OK');
//   }

// });
