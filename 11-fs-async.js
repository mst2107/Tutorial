const { readFile, writeFile } = require('fs');

console.log('start'); // Loggt den Beginn des gesamten Prozesses, bevor die asynchronen Lesevorgänge beginnen.

// Erster Datei-Lesevorgang
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err); // Falls ein Fehler auftritt, wird dieser hier angezeigt und die Funktion beendet.
    return;
  }
  const first = result;

  // Zweiter Datei-Lesevorgang
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err); // Falls ein Fehler auftritt, wird dieser hier angezeigt und die Funktion beendet.
      return;
    }
    const second = result;

    // Datei-Schreibvorgang
    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err); // Falls ein Fehler beim Schreiben auftritt, wird dieser hier angezeigt und die Funktion beendet.
          return;
        }
        console.log('done with this task'); // Loggt das Ende des Schreibvorgangs, wenn alle asynchronen Operationen abgeschlossen sind.
      }
    );
  });
});

console.log('starting the next one'); // Loggt, dass Node.js bereits mit dem nächsten Vorgang fortfährt, während die Lese- und Schreibvorgänge noch im Hintergrund laufen.
