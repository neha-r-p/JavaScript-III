/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding
    in this context, 'this' is pointing to the window or console object

* 2. Implicit Binding
    When a function is called by a preceding dot, the object before the dot is what 'this' is referring to in the function

* 3. New Binding
    A constructor function, which creates a new object, is used. The "this" points to the constructor function, and the keyword "new" is used to call the function (and subsequently create a new object).

* 4. Explicit Binding
    A .call or .apply method can be used to explicitly define 'this' and override the constructor objects.


* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function saySup() {
    console.log(this);
    return 'Sup!';
}
saySup();

// Principle 2

// code example for Implicit Binding

const intro = {
    greet: 'Hi everyone',
    introSelf: function(name){
        console.log(`${this.greet}, my name is ${name}`);
        console.log(this);
    }
}

intro.introSelf('Neha');

// Principle 3

// code example for New Binding

function goTeamCheer(teamName){
    this.chant = "GO";
    this.teamName = teamName;
    this.cheer = function() {
        console.log(`${this.chant}, ${this.teamName}, ${this.chant}!`);
        console.log(this);
    }
}

const lakers = new goTeamCheer('Lakers');
const liverpool = new goTeamCheer('Liverpool');

lakers.cheer();
liverpool.cheer();

// Principle 4

// code example for Explicit Binding
//  SEE EXAMPLE 3 FOR REFERENCE //
liverpool.cheer.call(new goTeamCheer('Man City'));