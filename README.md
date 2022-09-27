# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rayyu/lotide`

**Require it:**

`const _ = require('@rayyu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: compares two arrays returning true or false.
* `assertEqual`: compare two values with "===".
* `assertObjectsEqual`: compares two objects returning true or false.
* `countLetters`: counts the total of non-repeating letters in a string.
* `eqArrays`: compares two arrays 
* `eqObjects`: compares two objects
* `findKey`: takes an object and callback function, which takes a key value argument, as arguments and return the key matching the given value.
* `findKeyByValue`: returns the key match the given value.
* `flatten`:  un-nested an array(up to two layers) to non nested array.
* `head`: returns the first element of an array.
* `letterPosition`: returns an object of each letter as key and value as index appearance(s).
* `map`: returns index 0 of each element of an array.
* `middle`: returns the middle index of an array, and the average of two middle numbers when array length is even.
* `tail`: takes in an array, returns the same array without the first element.
* `takeUntil`: generates a new array from original until given condition is met.
* `without`: returns a new array from original with targeted elements removed.
* `index`: groups all functions in an object for easy access.
