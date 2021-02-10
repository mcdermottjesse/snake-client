
const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  conn.on('connect', () => {
    conn.write('Name: JLM');
  });


  
  /*conn.on('connect', () => {
    setInterval(() => {
    conn.write('Move: down');
  }, 750);
  }); */
  

return conn
 
};

module.exports = { connect };

