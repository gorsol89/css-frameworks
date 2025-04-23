// api.js
import { API_KEY, TOKEN } from './config.js';

const BASE_URL = 'https://api.noroff.dev/api/v1/social';

const defaultHeaders = {
  'Content-Type':     'application/json',
  'X-Noroff-API-Key': API_KEY,
  'Authorization':    `Bearer ${TOKEN}`,
};

/**
 * Fetches the social feed.
 * @returns {Promise<Object[]>} Array of post objects
 */
export async function getFeed() {
  const res = await fetch(`${BASE_URL}/posts`, {
    headers: defaultHeaders,
  });
  if (!res.ok) {
    throw new Error(`getFeed failed: ${res.status}`);
  }
  return res.json();
}

// …and similarly for getPostById, createPost, updatePost, deletePost
