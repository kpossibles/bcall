const APP_ROOT = process.env.BCALL_DIR;

const DB = require('better-sqlite3');

module.exports = {
  db : new DB(`${APP_ROOT}/bcall.db`, { fileMustExist : true } ),
  sarupAddress : '2131 E Hartford Ave, Milwaukee, WI 53211'
}
