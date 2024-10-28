const path = require('path'); // Importiert das eingebaute 'path'-Modul, um mit Dateipfaden zu arbeiten

// Gibt das Plattform-spezifische Pfad-Trennzeichen aus (z.B. '\' auf Windows oder '/' auf UNIX-Systemen)
console.log(path.sep); 

// Erstellt einen Pfad, indem mehrere Segmente zusammengeführt werden, unabhängig vom Betriebssystem
const filePath = path.join('/content', 'subfolder', 'test.txt');

// Das Ergebnis ist: '\content\subfolder\test.txt' (unter Windows)
console.log(filePath); 

// Gibt den letzten Teil des Pfads zurück, d.h. nur den Dateinamen 'test.txt'
const base = path.basename(filePath); 
console.log(base); 

// Erzeugt einen absoluten Pfad zur Datei 'test.txt', basierend auf dem aktuellen Verzeichnis (__dirname)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); 

// Das Ergebnis ist der vollständige Pfad zur Datei, z.B. 
// 'C:\Users\username\project\content\subfolder\test.txt' (Windows)
console.log(absolute);
