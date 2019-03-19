describe('Frame', function() {
  var frame;
  var strikeFrame;
  beforeEach(function() {
    frame = new Frame(5);
    strikeFrame = new Frame(10);
  })  
  it('starts containing the first roll', function(){
    expect(frame._rolls).toEqual([5]);
    expect(strikeFrame._rolls).toEqual([10]);
  });

  describe('#addSecondRoll', function(){
    it('can add a second roll to a frame', function(){
      frame.addSecondRoll(4)
      expect(frame._rolls).toEqual([5,4]);
    })
    it('does not add roll if already strike', function(){
      expect(function(){strikeFrame.addSecondRoll(3)}).toThrowError('Frame was already strike!');
    });
    it('throws error when rolling a third time', function() {
      frame.addSecondRoll(4);
      expect(function(){frame.addSecondRoll(3)}).toThrowError('Already rolled twice!');
    })
  })
  describe('#frameScore', function(){
    it('returns score of current frame', function(){
      frame.addSecondRoll(4);
      expect(frame.frameScore()).toEqual(9);
    });
    it('returns score of current frame if strike', function(){
      expect(strikeFrame.frameScore()).toEqual(10);
    });
  });
  describe('#isASpare', function() {
    it('checks if frame is a spare', function() {
      frame.addSecondRoll(5);
      expect(frame.isASpare()).toBe(true);
    })
    it('returns false if frame is not a spare', function() {
      frame.addSecondRoll(4);
      expect(frame.isASpare()).toBe(false);
    })
  })
  describe('#isAStrike', function() {
    it('returns true', function() {
      expect(strikeFrame.isAStrike()).toBe(true);
    })
    it('returns false', function() {
      frame.addSecondRoll(4);
      expect(frame.isAStrike()).toBe(false);
    })
  })
  describe('#pinsFirstRoll', function(){
    it('returns number of pins from first roll', function(){
      frame.addSecondRoll(4);
      expect(frame.pinsFirstRoll()).toEqual(5);
    })
  })
})
