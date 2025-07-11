const fs = require("fs");
const path = require("path");

const allowedExtensions = [".js", ".json"];
const ignore = ["node_modules", ".git", ".vscode"];
const maxDepth = 2;

function printStructure(dir, depth = 0) {
  if (depth > maxDepth) return;

  const indent = "  ".repeat(depth);
  let items;

  try {
    items = fs.readdirSync(dir);
  } catch (err) {
    return;
  }

  for (const item of items) {
    if (item.startsWith(".") || ignore.includes(item)) continue;

    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      console.log(`${indent}- ${item}/`);
      printStructure(fullPath, depth + 1);
    } else if (allowedExtensions.includes(path.extname(item))) {
      console.log(`${indent}- ${item}`);
    }
  }
}

// Start from current folder
printStructure(__dirname);
