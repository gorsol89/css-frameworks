// 1. Import your Tailwind entry so it's processed by PostCSS
import '../css/styles.css';

// 2. Bring in your header component
import { renderHeader } from './components/header.js';

// 3. (Optional) pull in your config and API to test fetch
import { API_KEY, TOKEN } from './config.js';
import { getFeed } from './api.js';

const app = document.getElementById('app');

// Render the site header
renderHeader(document.body);

// Quick smoke-test of your API setup
(async () => {
  try {
    const posts = await getFeed();          // uses your VITE_ vars under the hood
    console.log('Feed loaded:', posts);
    app.innerHTML += `
      <p class="mt-6 text-soft-mocha">
        ✅ Feed fetched successfully—check the console!
      </p>
    `;
  } catch (err) {
    console.error(err);
    app.innerHTML += `
      <p class="mt-6 text-pastel-pink">
        ❌ Failed to load feed. See console for details.
      </p>
    `;
  }
})();
