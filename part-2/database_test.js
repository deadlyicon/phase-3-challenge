var expect = require('chai').expect;
var db = require('./database');

describe('itemsInSection(bulk)', function() {
  it('returns the items "Flour", "Pasta", and "Rice"', function() {
    return db.itemsInSection('bulk')
    .then(function(items) {
      expect(items[0].name).to.equal('Flour');
      expect(items[1].name).to.equal('Pasta');
      expect(items[2].name).to.equal('Rice');
      expect(items.length).to.equal(3)
    })
    .catch(console.error)
  });
});

describe('cheapItems()', function() {
  it('returns the item with name "Fish" as the first item and the item with name "Honey" as the last item.', function() {
    return db.cheapItems()
    .then(function(items) {
      expect(items[0].name).to.equal('Fish');
      expect(items[items.length - 1].name).to.equal('Honey');
    })
    .catch(console.error)
  });
});

describe('countItemsInSection', function() {
  it('returns 5 items in the section "packaged"', function() {
    return db.countItemsInSection('packaged')
    .then(function(items) {
      expect(items[0].count).to.equal('5');
    })
    .catch(console.error())
  });
});
