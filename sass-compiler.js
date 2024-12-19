const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

// Define folder paths to search
const folders = [
  path.resolve(__dirname, "convert-to-webp"),
  path.resolve(__dirname, "image-converter"),
  path.resolve(__dirname, "png-to-webp"),
  path.resolve(__dirname, "tip-calculator")
];

// Compile Sass for each folder
folders.forEach((folder) => {
  const srcFile = path.join(folder, "src", "styles.scss");
  const distFile = path.join(folder, "dist", "styles.css");

  if (fs.existsSync(srcFile)) {
    console.log(`Compiling Sass for: ${srcFile}`);
    exec(`sass ${srcFile}:${distFile} --style=compressed`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error compiling Sass for ${srcFile}:`, stderr);
        return;
      }
      console.log(`Sass compiled successfully for ${srcFile}: ${distFile}`);
    });
  } else {
    console.warn(`No styles.scss found in ${folder}/src. Skipping.`);
  }
});
