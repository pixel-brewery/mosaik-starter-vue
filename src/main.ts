import { createApp } from 'vue';
import App from './App.vue';
import { initializeMosaik } from './mosaik';
import './styles.css';

initializeMosaik();

const root = document.getElementById('app');
if (!root) throw new Error('The application root #app is missing.');

createApp(App).mount(root);
