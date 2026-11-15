// The TMDB read access token is injected at build time by Vite from the
// VITE_TMDB_TOKEN environment variable (see .env.example).
const token = import.meta.env.VITE_TMDB_TOKEN;

if (!token) {
    console.error(
        "VITE_TMDB_TOKEN is not set. Copy .env.example to .env and add your TMDB read access token."
    );
}

export default token;
