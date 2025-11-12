// import sql , {ConnectionPool}from 'mssql';

// const config= {
//     server: process.env.DN_SERVER,
//     database: process.env.DB_NAME,
//     options:{
//         enctypt: false,
//         trustServerCertificate: true,
//     },
//     // This is for windows authentication
//     authentication: {
//         type: 'ntlm',
//         options: {
//             domain: process.env.DN_DOMAIN,
//             username: process.env.DB_USERNAME,
//             password:process.env.DB_PASSWORD,
//         }
//     }

// }
// let pool : ConnectionPool;
// export async function queryDB<T = any>(query : string,  params?: Record<string ,any>) : Promise <T[]>{
//     try{

//         if(!pool) {
//             pool = await sql.connect(config)
//         }
//         const request = pool.request()
//     }
    


// }

import * as sql from 'mssql';
import * as fs from 'fs';

const config= {
    server: process.env.DN_SERVER,
    database: process.env.DB_NAME,
    options:{
        enctypt: false,
        trustServerCertificate: true,
    },

}
try {
  const pool = await sql.connect(config);
  console.log('Connected to the database');
  const sqlQuery = "SELECT * FROM YourTable";
} catch (error) {
  console.error('Error connecting to the database:', error);
}
