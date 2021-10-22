export const SET_MINUTE = "TIMER::SET_MINUTE";
export const OPEN_TIMER = "TIMER::OPEN_TIMER";
export const SET_PRICE = "TIMER::SET_PRICE";
export const SET_SECONDS = "TIMER::SET_SECONDS";
export const SET_HOURS = "TIMER::SET_HOURS";
export const SET_DAYS = "TIMER::SET_HOURS";


export const openTimer = () => ({
    type: OPEN_TIMER,
});
export const setMinute = (minute) => ({
    type: SET_MINUTE,
    payload: minute

});

export const setPrice = (price) => ({
    type: SET_PRICE,
    payload: price
});
export const setSeconds = (seconds) => ({
    type: SET_SECONDS,
    payload: seconds
});
export const setHours = (hours) => ({
    type: SET_HOURS,
    payload: hours

});
export const setDays = (days) => ({
    type: SET_DAYS,
    payload: days

});







