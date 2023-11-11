1. npm init -y

1. npm i -D typescript @types/node

1. npx tsc --init

1. update tsconfig.json like so

   ```json
   {
     "compilerOptions": {
       /* Visit https://aka.ms/tsconfig to read more about this file */
       "module": "NodeNext" /* Specify what module code is generated. */,
       "moduleResolution": "NodeNext" /* Specify how TypeScript looks up a file from a given module specifier. */,
       "target": "ES2020" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,
       "sourceMap": true /* Create source map files for emitted JavaScript files. */,
       "outDir": "dist", /* Specify an output folder for all emitted files. */
       "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
       "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
       "strict": true /* Enable all strict type-checking options. */,
       "skipLibCheck": true /* Skip type checking all .d.ts files. */,
   ```

1. npm init @eslint/config
1. npm install --save-dev eslint-plugin-prettier eslint-config-prettier
1. npm install --save-dev --save-exact prettier
1. change .eslintrc.josn like so

   ```json
   {
     "plugins": ["prettier"],
     "env": {
       "es2021": true,
       "node": true
     },
     "extends": ["standard-with-typescript", "plugin:prettier/recommended"],
     "parserOptions": {
       "ecmaVersion": "latest",
       "sourceType": "module"
     },
     "rules": {}
   }
   ```

1. create .prettierrc.json with

   ```json
   {
     "printWidth": 160,
     "tabWidth": 2,
     "useTabs": false,
     "semi": true,
     "singleQuote": true,
     "trailingComma": "none",
     "bracketSpacing": true,
     "arrowParens": "avoid",
     "endOfLine": "auto"
   }
   ```

1. setup id for running eslint fix all on save. For vscode use .vscode/settings.json

   ```json
   {
     "editor.codeActionsOnSave": {
       "source.fixAll": "always",
       "source.organizeImports": "always"
     }
   }
   ```
