 
var _ = require('lodash');

var names = ['Bruce Wayne', 'Wally West', 'John Jones', 'Kyle Rayner', 'Arthur Curry', 'Clark Kent'];
var otherNames = ['Barry Allen', 'Hal Jordan', 'Kara Kent', 'Diana Prince', 'Ray Palmer', 'Oliver Queen'];

_.each([names, otherNames], function(nameGroup) {
  findSuperman(nameGroup);
});

function findSuperman(values) {
  _.find(values, function(name) {
    if (name === 'Clark Kent') {
      console.log(name + ': It\'s Superman!');
    } else {
      console.log(name + '... No superman!');
    }
  });
}
