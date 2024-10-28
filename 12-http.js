const http = require('http'); // HTTP-Modul laden, um einen Server zu erstellen
const { clearScreenDown } = require('readline'); // Funktion aus readline-Modul laden (wird aktuell nicht verwendet)

const server = http.createServer((req, res) => {
  // Prüfen, ob die angeforderte URL die Homepage ist
  if (req.url === '/') {
    res.end('Welcome to our homepage'); // Antwort für die Homepage
    return; // Verlassen der Funktion nach Beantwortung der Anfrage
  }

  // Prüfen, ob die angeforderte URL die "About"-Seite ist
  if (req.url === '/about') {
    res.end('Here is our short history'); // Antwort für die "About"-Seite
    return; // Verlassen der Funktion nach Beantwortung der Anfrage
  }

  // Standardantwort für alle anderen URLs (404-Seite)
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
  `);
});

// Server auf Port 5000 starten und auf Anfragen warten
server.listen(5000);
