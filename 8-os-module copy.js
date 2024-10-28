const os = require('os'); // Importiert das eingebaute 'os'-Modul, um Informationen über das Betriebssystem zu erhalten

// info about current user
const user = os.userInfo(); // Holt Informationen über den aktuellen Benutzer, wie z.B. den Benutzernamen und das Home-Verzeichnis
console.log(user); // Gibt die Benutzerinformationen in der Konsole aus

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`); // Gibt die Systemlaufzeit in Sekunden aus

const currentOs = {
  name: os.type(), // Holt den Typ des Betriebssystems (z.B. 'Linux', 'Darwin', 'Windows_NT') 
  release: os.release(), // Holt die Betriebssystemversion (z.B. '5.4.0-42-generic')
  totalMem: os.totalmem(), // Holt den gesamten Arbeitsspeicher des Systems in Bytes
  freeMem: os.freemem(), // Holt den freien Arbeitsspeicher des Systems in Bytes
};

console.log(currentOs); // Gibt ein Objekt mit Informationen über das aktuelle Betriebssystem aus
