Initial structure of the project:
//dist =>/main.html
//prod =>/main.html
//src =>//scripts =>//components/mainJSX.jsx
//src =>//scripts =>/ main.js
//src =>//templates
.gitignore
package.json
webpack.config.js
___

# Instalation of webpack

- Install node js locally https://nodejs.org

- Move to the repository folder and run console command:

```sh

npm i

```

  

# Building of forms

- Move to the repository folder and run console command:

```sh

npm run build

```

**NOTE:** The **dist** folder contains the generated forms.

For any additional changes that are made the command **npn run build** must be executed

  

# Adding of new form

- Create new [formName].js file

- Extend webpack.config.js with a new module.exports object base on existing one with entry point and name of new form

  