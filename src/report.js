import Database from 'tauri-plugin-sql-api'

const db = await Database.load('sqlite:test.db')

await db.execute(`CREATE TABLE IF NOT EXISTS weight (
  id INTEGER NOT NULL UNIQUE,
  weight REAL NOT NULL,
  date TEXT NOT NULL,
  PRIMARY KEY(id AUTOINCREMENT))
  `)

const submitWeight = async () => {
  const weight = document.getElementById('weight').value

  await db.execute('INSERT INTO weight(weight, date) VALUES($1, DATE());', [
    weight
  ])

  console.log(await db.select('SELECT * from weight;'))
}

document.getElementById('weight-button').addEventListener('click', submitWeight)

// import { Chart } from 'chart.js/auto';
// (async function () {
//   const data = [
//     { year: 2010, count: 10 },
//     { year: 2011, count: 20 },
//     { year: 2012, count: 15 },
//     { year: 2013, count: 25 },
//     { year: 2014, count: 22 },
//     { year: 2015, count: 30 },
//     { year: 2016, count: 28 }
//   ]

//   new Chart(document.getElementById('canvas'), {
//     type: 'bar',
//     data: {
//       labels: data.map((row) => row.year),
//       datasets: [
//         {
//           label: 'Acquisitions by year',
//           data: data.map((row) => row.count)
//         }
//       ]
//     }
//   })
// })()
