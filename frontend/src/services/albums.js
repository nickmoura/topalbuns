// src/services/api.js
export async function fetchAlbums() {
  const res = await fetch('http://localhost:3001/api/albums');
  return res.json();
}
