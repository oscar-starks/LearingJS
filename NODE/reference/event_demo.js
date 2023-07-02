const EventEmitter = require('events');

// create class
class MyEmitter extends EventEmitter { } 

// init object
const myEmitter = new MyEmitter();
myEmitter.on('event', () => console.log('event fired'));
myEmitter.on('close', () => console.log('this event was closed'));

myEmitter.emit('event');
myEmitter.emit('close');
