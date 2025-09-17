// check-imports.js
import fs from "fs";
import path from "path";

const projectRoot = path.resolve("./src");

// 🟢 function to walk all files
function walk(dir, ext = [".vue", ".js", ".ts"]) {
  let results = [];
  fs.readdirSync(dir).forEach((file) => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filepath, ext));
    } else if (ext.includes(path.extname(file))) {
      results.push(filepath);
    }
  });
  return results;
}

// 🟢 check imports
function checkImports() {
  const files = walk(projectRoot);
  let hasError = false;

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf-8");
    const regex = /import\s+.*?from\s+['"](.*?)['"]/g;
    let match;
    while ((match = regex.exec(content))) {
      const importPath = match[1];
      if (importPath.startsWith("@/")) {
        const relPath = importPath.replace("@/", "src/");
        const absPath = path.resolve(relPath);
        const dir = path.dirname(absPath);
        const base = path.basename(absPath);

        if (fs.existsSync(dir)) {
          const realFiles = fs.readdirSync(dir);
          const existsExact = realFiles.includes(base);

          if (!existsExact) {
            console.error(
              `❌ Case mismatch in import: "${importPath}" \n   at ${file}`
            );
            hasError = true;
          }
        }
      }
    }
  });

  if (hasError) {
    console.error("\n⚠️ Import case mismatch detected. Fix before build.\n");
    process.exit(1); // ❌ stop build
  } else {
    console.log("✅ All imports match file names exactly!");
  }
}

checkImports();
