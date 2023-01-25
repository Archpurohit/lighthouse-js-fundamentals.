class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }
}

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    vampire.creator = this;
    this.offspring.push(vampire);
  };


  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    let vampFamilyLength = this.offspring.length;
    if(vampFamilyLength === undefined || vampFamilyLength === null){
      return 0;
    }

    return vampFamilyLength;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let vampIndex = 0;
    let vampCursor = this.creator;

    while(vampCursor){
      vampIndex ++;
      if(vampCursor.creator)
        vampCursor = vampCursor.creator;
      else
        return vampIndex
    }

    return vampIndex;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if(this.offspring === null)
    return false;

  for(let i = 0; i < this.numberOfOffspring; i++){
    if(vampire.name === this.offspring[i].name)
      return true;
  }

    // Returns the vampire object with that name, or null if no vampire exists with that name
    vampireWithName(name) {
      if (this.name === name) {
        return this;
      }
      for (const vamp of this.offspring) {
        const vampireSearch = vamp.vampireWithName(name);
        if(vampireSearch) {
          return vampireSearch;
        };
      }
      return null;
    }

    // Returns the total number of vampires that exist
    get totalDescendents() {
      let numOfDescendents = 0;

      for (const vamp of this.offspring) {
        numOfDescendents ++;
        const descendents = vamp.totalDescendents;
        numOfDescendents = numOfDescendents + descendents;
      }
      return numOfDescendents;
    }

    // Returns an array of all the vampires that were converted after 1980
    get allMillennialVampires() {
      let millenialVamps = [];

      if (this.yearConverted > 1980) {
        millenialVamps.push(this);
      }
      for (const vamp of this.offspring) {
        const currentVamp = vamp.allMillennialVampires;
        millenialVamps = millenialVamps.concat(currentVamp);
      }
      return millenialVamps;
    }
    return false
  }



  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.




module.exports = Vampire;

