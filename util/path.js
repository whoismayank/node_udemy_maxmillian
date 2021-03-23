// to set actual path of thea app
const path = require('path');
// module.exports = path.dirname(process.mainModule.filename);
module.exports = path.dirname(require.main.filename);