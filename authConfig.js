export const msalConfig = {
    auth: {
        apiUrl: import.meta.env.OMDB_API_URL,
        authority: "https://www.omdbapi.com/"
    },
    auth: {
        apiKey: import.meta.env.OMDB_API_KEY,
        authority: "2ddaab4b"
    }
}