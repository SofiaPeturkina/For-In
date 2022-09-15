import orderByProps from "./basic";

console.log("app worked");

const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40
};
const sortoder = ["name", "level"];

console.log(orderByProps(obj, sortoder));