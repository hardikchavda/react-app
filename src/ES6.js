import React from "react";

const name = 'Hardik'
const address = 'Rajkot';

function information() {
    return address;
}

function marks() {
    let m1 = 60;
    let m2 = 50;
    let m3 = 40;
    let tot = m1 + m2 + m3;
    return tot;
}
export { name, address, information, marks }