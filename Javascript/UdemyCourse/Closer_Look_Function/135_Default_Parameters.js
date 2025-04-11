'use strict';

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199){
    //? ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123')


const flight = `LH234`;
const jonas = {
    name: 'Fong',
    passport: 1234567
}
const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 1234567){
        alert('Check in');
    }else {
        alert('Wrong Passport');
    }
}
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);



const newPassport = function(person){
    person.passport = Math.trunc(Math.random()  * 10000000);
}
newPassport(jonas);
checkIn(flight, jonas);