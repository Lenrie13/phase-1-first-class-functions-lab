// Code your solution in this file!
const scuberDrivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function fareMultiplier(fare) {
        return fare * int;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(scuberDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(scuberDrivers);
}