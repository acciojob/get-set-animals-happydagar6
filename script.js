class Animal {
  constructor(species) {
    // Use a backing property (conventionally starting with _) 
    // to avoid infinite recursion with the getter
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    // Access the species via 'this.species'
    console.log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;