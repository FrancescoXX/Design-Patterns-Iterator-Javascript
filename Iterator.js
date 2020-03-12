/** Iterator Design Pattern
 *  Behavioral Pattern
 */

/**
 * @function hasNext return true/false, depending if the iterator has other elements in the collection
 * @function next returns the next available element in the collection
 */
class Iterator {
  constructor(items) {
    this.items = items; //The collection to iterate to
    this.index = 0; //Starting index
  }

  hasNext = () => this.index < this.items.length; //Returns TRUE if there's another element, FALSE otherwise
  next = () => this.items[this.index++]; //Rule for next element
}

// MAIN

//Define a collection
const animals = ["dog", "cat", "bird", "tiger", "lion"];

//Define an Iterator
const iterator = new Iterator(animals);

//Iterate over each Element
while (iterator.hasNext()) {
  console.log("[", iterator.index, "] :", iterator.next());
}

// [ 0 ] : dog
// [ 1 ] : cat
// [ 2 ] : bird
// [ 3 ] : tiger
// [ 4 ] : lion

