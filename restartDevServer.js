// 文件路径： /home/project/restartDevServer.js
import { exec } from 'node:child_process';

console.log("Stopping the server...");
exec('kill $(ps aux | grep "[n]pm run dev" | awk "{print $2}")', { stdio: 'inherit' });

console.log("Installing dependencies...");
exec('npm install', { stdio: 'inherit' });

console.log("Starting the server...");
exec('npm run dev', { stdio: 'inherit' });

