const fs = require('fs');
const path = require('path');

function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(getFiles(file));
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const allFiles = getFiles('./src');
const diskFilesMap = new Set(allFiles.map(f => f.replace(/\\/g, '/')));

let hasError = false;

allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const importRegex = /import\s+(?:[\w*\s{},]*from\s+)?['"]([^'"]+)['"]/g;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
        let importPath = match[1];
        if (importPath.startsWith('.')) {
            // resolve path
            const dir = path.dirname(file);
            const resolvedPathBase = path.resolve(dir, importPath).replace(/\\/g, '/');
            
            // Check if file exists exactly
            let found = false;
            const possibleExtensions = ['.tsx', '.ts', '/index.tsx', '/index.ts', '.css'];
            for (let ext of possibleExtensions) {
                // To check case sensitively on Windows, we need to read the parent directory and find exactly the filename
                const fullPath = path.resolve(dir, importPath) + (importPath.endsWith('.css') ? '' : ext);
                try {
                    const parsed = path.parse(fullPath);
                    const parentDir = parsed.dir;
                    if (fs.existsSync(parentDir)) {
                        const filesInDir = fs.readdirSync(parentDir);
                        if (filesInDir.includes(parsed.base)) {
                            found = true;
                            break;
                        }
                    }
                } catch (e) {}
            }
            
            // Special check for directory index imports
            if (!found && !importPath.endsWith('.css')) {
               const fullPath = path.resolve(dir, importPath);
               try {
                   const parsed = path.parse(fullPath);
                   const parentDir = parsed.dir;
                   if (fs.existsSync(parentDir)) {
                       const filesInDir = fs.readdirSync(parentDir);
                       if (filesInDir.includes(parsed.base) && fs.statSync(fullPath).isDirectory()) {
                          const dirFiles = fs.readdirSync(fullPath);
                          if (dirFiles.includes('index.ts') || dirFiles.includes('index.tsx')) {
                              found = true;
                          }
                       }
                   }
               } catch (e) {}
            }

            if (!found && !importPath.endsWith('.svg') && !importPath.endsWith('.png')) {
                console.log(`CASE ERROR or NOT FOUND in ${file}:\n -> Imported: ${importPath}`);
                hasError = true;
            }
        }
    }
});

if (!hasError) {
    console.log("No case sensitive import errors found.");
}
