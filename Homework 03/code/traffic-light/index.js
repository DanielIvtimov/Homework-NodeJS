import colors from "colors";
import { EventEmitter } from "events";
const eventEmitter = new EventEmitter();
eventEmitter.on('red', () => {
    console.log('RED'.bgRed);
});
eventEmitter.on('yellow', () => {
    console.log('YELLOW'.bgYellow);
});
eventEmitter.on('green', () => {
    console.log('GREEN'.bgGreen);
});
function trafficLightIndicator(){
    setTimeout(() => {
        eventEmitter.emit('red');
        setTimeout(() => {
            eventEmitter.emit('yellow');
            setTimeout(() => {
                eventEmitter.emit('green');
                return;
            }, 3000);
        }, 3000);
    }, 3000);
}
trafficLightIndicator();

