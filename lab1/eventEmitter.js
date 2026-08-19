import{EventEmitter} from "node:events";
 
const task = new EventEmitter();

const sayHi = (name) => {
    console.log(`Welcome ${name}`);
}

const starts = () =>{
    console.log("System started");
};
task.on("greet", starts);
task.on("greet", sayHi);
task.on("greet", (name)=> {
    console.log(`${name} starts shopping`);
});
task.on("greet",(name) => {
    console.log(`${name} logged out` );
});
task.emit("greet", "Amit Kumar");
