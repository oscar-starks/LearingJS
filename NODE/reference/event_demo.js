const EventEmitter = require('events');

// create class
class MyEmitter extends EventEmitter { } 

// init object
const myEmitter = new MyEmitter();
myEmitter.on('event', () => console.log('event fired'));
myEmitter.emit('event');