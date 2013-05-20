var ummon = require('ummon')({url: 'http://localhost:8888'});

// ummon.basicAuth('w2h', 'sc1ence');
/*
 * Serve content over a socket
 */

module.exports = function (socket) {
  socket.emit('send:name', {
    name: 'Bob'
  });
  
  // socket.emit('send:tasks', { tasks: tasks });
  
  // ummon.getTasks(function(err, tasks){
  //   console.log('GOT TASKS');
  //   socket.emit('send:tasks', tasks );
  // });

  socket.on('get:tasks', function(){
    console.log('GET:TASKS');
    ummon.getTasks(function(err, tasks){
      console.log('GOT TASKS');
      socket.emit('send:tasks', { tasks: tasks });
    });
  })
};
