const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Dynamically detect all tool directories with /src folders
const srcFolders = fs.readdirSync(__dirname).filter(folder => {
  const srcPath = path.join(__dirname, folder, 'src');
  return fs.existsSync(srcPath) && fs.statSync(srcPath).isDirectory();
});

srcFolders.forEach(folder => {
  const srcPath = path.join(__dirname, folder, 'src');
  const distPath = path.join(__dirname, folder, 'dist');
  
  // Ensure dist folder exists
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath, { recursive: true });
  }

  const files = fs.readdirSync(srcPath).filter(file => file.endsWith('.js') || file.endsWith('.css'));

  files.forEach(file => {
    const srcFile = path.join(srcPath, file);
    const distFile = path.join(distPath, file);

    // Check if the file has changed
    const srcMtime = fs.statSync(srcFile).mtime.getTime();
    const distMtime = fs.existsSync(distFile) ? fs.statSync(distFile).mtime.getTime() : 0;

    if (srcMtime > distMtime) {
      console.log(`Minifying ${srcFile} -> ${distFile}`);
      execSync(`npx minify ${srcFile} > ${distFile}`);
    } else {
      console.log(`Skipped (no changes) ${srcFile}`);
    }
  });
});