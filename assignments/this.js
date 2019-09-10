/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Binding done to the Javascript default window, and all of the different functions that are assoicated with the default window
* 2. The keyword this is tied to the object that invokes it on the left hand side of the dot accessor.
* 3. It is like using a cookie cutter to make new cookies molds. The cutter will only make new cookie shapes from the same dough, and with other defined properties 
* 4. These are bindings that use the call or apply method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

//checkWindow ('test');

// Principle 2

// code example for Implicit Binding

const obj = {

    name: 'Trevor',
    height: 5.9,
    outputValues: function() {
      console.log(this.name + ' is '+ this.height);
    }
};

obj.outputValues();

// Principle 3

// code example for New Binding

function house(count, size) {

   this.count = count;
   this.size = size;
   this.OpenDoor = function() {
       console.log(this.count + this.size);
       console.log(this);
   }
};

const lovelyAbode = new house(10, 1500000);
lovelyAbode.OpenDoor();

const uglyAbode = new house(1, 2000);
uglyAbode.OpenDoor();

// Principle 4

// code example for Explicit Binding

//lovelyAbode.OpenDoor.call();
//lovelyAbode.OpenDoor.apply();

lovelyAbode.OpenDoor.call(uglyAbode);
lovelyAbode.OpenDoor.apply(uglyAbode, []);
