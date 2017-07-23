
var context = require.context('./unit', true, /[sS]ec\.ts$/);
context.keys().forEach(context);