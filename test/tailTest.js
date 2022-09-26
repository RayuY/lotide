const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = ["Hello", "Lighthouse", "Labs"];

// no need to capture the return value since we are not checking it
assertEqual(tail(result).length, 2); // ensure we get back two elements

assertEqual(tail(result)[0], "Lighthouse"); // ensure first element is "Lighthouse"


assertEqual(tail(result)[1], "Labs"); // ensure second element is "Labs"