function Frame(firstRoll){
  this._rolls = [firstRoll];
}

Frame.prototype = {
  addSecondRoll: function (roll) {
    if (this._rolls[0] === 10) {
      throw new Error('Frame was already strike!')
    } else if (this._rolls.length < 2) {
      this._rolls.push(roll)
    } else {
      throw new Error('Already rolled twice!')
    };
  },
  frameScore: function () {
    return this._rolls.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue
    }, 0)
  },
  isASpare: function () {
    if (this.frameScore() === 10 && this._rolls.length === 2) {
      return true
    } else {
      return false
    };
  },
  isAStrike: function () {
    if (this._rolls[0] === 10) {
      return true
    } else {
      return false
    };
  },
  pinsFirstRoll: function () {
    return this._rolls[0]
  }
}
