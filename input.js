let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', data => handleUserInput(data))
  stdin.resume();

  return stdin;
}

const handleUserInput = function(input) {
  
  if (input === '\u0003') {
    process.exit();
  }
  if (input === "w") {
    return connection.write('Move: up');
  } 
  if (input === 'a') {
    return connection.write('Move: left');
  }
  if (input === 'd') {
    return connection.write('Move: right');
  }
  if (input === 's') {
    return connection.write('Move: down');
  }
  if (input === 'i') {
    return connection.write('Say: Im not a');
  }
  if (input === 'o') {
    return connection.write('Say: conspiracy theorist')
  }
  if (input === 'p') {
    return connection.write('Say: but.......')
  }
};


module.exports = { setupInput };