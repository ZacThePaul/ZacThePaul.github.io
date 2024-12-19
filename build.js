const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to recursively find 'src' directories
function findSrcFolders(dir, result = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === 'src') {
        result.push(fullPath);
      } else {
        findSrcFolders(fullPath, result); // Recurse into subdirectories
      }
    }
  });

  return result;
}

// Find all 'src' folders starting from the current directory
const srcFolders = findSrcFolders(__dirname);

srcFolders.forEach(srcPath => {
  const folder = path.basename(path.dirname(srcPath)); // Parent folder name
  const distPath = path.join(path.dirname(srcPath), 'dist');

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
