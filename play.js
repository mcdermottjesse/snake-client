const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function(snake) {
  const conn = net.createConnection({ 
    host: '10.0.0.209',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

console.log('Connecting ...');
connect();