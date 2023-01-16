
import pkg from "pg";
const { Client } = pkg;
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const elephantsqlData = []

var conString = `postgres://lxozqbnl:${process.env.ELEPHANT_KEY}@salt.db.elephantsql.com/lxozqbnl` //Can be found in the Details page
var client = new Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM Companies', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    elephantsqlData.push(result.rows)
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});

export default elephantsqlData