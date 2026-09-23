/*
Day: 32
Date: 23-Sep-2026

Topics Covered:
Typescript - Utility types, Generics, modules & type imports, and the essentials of tsconfig.json.
Node.js Runtime & Modules - The event loop and non-blocking I/O, CommonJS vs ES modules, 
npm/package.json, core modules (fs, path, os).

Practice:
Task: Write scripts using fs/path to read a folder, log file stats, and write a summary report file.
*/

import { readdir, stat, writeFile } from "fs/promises";
import path from "path";
const folderPath = "./files";
const files = await readdir(folderPath);
let report = "Folder Report\n\n";

for (const file of files) {
    const filePath = path.join(folderPath, file);
    const stats = await stat(filePath);
    console.log(`Name: ${file}`);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Modified: ${stats.mtime}`);
    console.log();
    report += `Name: ${file}\n`;
    report += `Size: ${stats.size} bytes\n`;
    report += `Modified: ${stats.mtime}\n\n`;
}

await writeFile("summary.txt", report);
console.log("Report created!");