
module.exports = function(functionToWrap, before, after, thisObject) {
  return function () {
    var args = Array.prototype.slice.call(arguments);
    if (before) before.apply(thisObject || this, args);
    var result = functionToWrap.apply(thisObject || this, args);
    if (after) after.apply(thisObject || this, args);
    return result;
  };
};
