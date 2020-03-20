'use strict';
var $ = require('../internals/export');
var $filterOut = require('../internals/array-iteration').filterOut;
var arrayMethodHasSpeciesSupport = require('../internals/array-method-has-species-support');
var arrayMethodUsesToLength = require('../internals/array-method-uses-to-length');

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filterOut');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filterOut');

// `Array.prototype.filterOut` method
// https://github.com/tc39/proposal-array-filtering
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filterOut: function filterOut(callbackfn /* , thisArg */) {
    return $filterOut(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
