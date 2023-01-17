import pkg from "pg";
const { Client } = pkg;
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const elephantsqlData = [];

var conString = `postgres://lxozqbnl:${process.env.ELEPHANT_KEY}@salt.db.elephantsql.com/lxozqbnl`;
var client = new Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  client.query("SELECT * FROM komputers", function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }

    elephantsqlData.push(result.rows);
    client.end();
  });
});

export default elephantsqlData;
