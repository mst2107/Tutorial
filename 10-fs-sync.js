// Importiere die Methoden readFileSync und writeFileSync aus dem fs-Modul
const { readFileSync, writeFileSync } = require('fs');
console.log('start');

// Lese den Inhalt der Datei 'first.txt' und speichere ihn in der Variablen 'first', 'second'
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// Schreibe in die Datei 'result-sync.txt' den Text mit dem Inhalt von 'first' und 'second'
// Falls die Datei bereits existiert, wird der Inhalt angehängt (flag: 'a')
writeFileSync(
  './content/result-sync.txt', // Pfad zur Ausgabedatei
  `Here is the result : ${first}, ${second}`, // Text, der in die Datei geschrieben wird
  { flag: 'a' } // Option 'a' stellt sicher, dass der Text angehängt wird
);

console.log('done with this task');
console.log('starting the next one');
