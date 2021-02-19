import App from './App.svelte';

//all html content from App.svelte goes to 'public/index.html' => <body> tag
// App.svelte is like root component. It's top level component. We nest all other components inside it.
const app = new App({
  target: document.body
});

