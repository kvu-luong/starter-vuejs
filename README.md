# start-vuejs

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Note Vue3
1. Create project
```
vue create <name-of-project>
```
2. Install eslint with airbnb
```
npm install @vue/eslint-config-airbnb
```
creating file .eslintrc.js and .editorconfig

3. Install husky for commit lint
```
npx husky-init && npm install  
```
[husky setting page1](https://typicode.github.io/husky/#/?id=test-hooks)
[husky setting](https://panjiachen.github.io/vue-element-admin-site/guide/advanced/git-hook.html#husky)

3. Adding tailwindcss with vue3
```
npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npx tailwindcss init -p
```
Then add 
```
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Finally 
```
import './index.css'

createApp(App).mount('#app')
```
[tailwinds](https://tailwindcss.com/docs/guides/vue-3-vite)
4. Using sass
```
"sass": "^1.35.1",
"sass-loader": "^10.1.1",

npm install -d sass sass-loader@10.1.1
```
