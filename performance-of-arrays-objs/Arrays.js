/**
 * Arrays = ordered lists
 *  - use when you need order
 *      insertion => it depends...
 *        add to end => O(1)
 *        add to beginning => O(n)
 *      removal => it depends...
 *        remove at end => O(1)
 *        remove at beginning => O(n)
 *      searching => O(n)
 *      access => O(1)
 * 
 *  - Array methods
 *      push => O(1)
 *      pop => O(1)
 *      shift => O(n)
 *      unshift => O(1)
 *      concat => O(n)
 *      slice => O(n)
 *      splice => O(n)
 *      sort => O(n*lgn)
 *      forEach/map/filer/reduce => O(n)
 */
let names = ['Michael', 'Melissa', 'Andrea'];
let values = [true, {}, [], 2, 'awesome'];