const sql = require('msnodesqlv8');

https://github.com/TimelordUK/node-sqlserver-v8#prepared-statements

sql.query(connectionString, query, (err, rows) => {
if (err) {
console.log(err);
return;
}

    console.log(rows);

});

const co = {
conn_str: connectionString,
conn_timeout: 2,
};

sql.open(co, (err, conn) => {
if (err) {
console.log(err);
return;
}

    console.log('Executando Query');
    conn.query(query, (err2, rows) => {
      if (err2) {
        console.log(err2);
        return;
      }

      console.log(rows);
    });

    console.log('Executando Stored Procedure');
    const pm = conn.procedureMgr();
    pm.callproc('SPS_TESTE', ['2019-01-01'], (err3, results, output) => {
      if (err3) {
        console.log(err3);
      }

      console.log(results);
    });

});
