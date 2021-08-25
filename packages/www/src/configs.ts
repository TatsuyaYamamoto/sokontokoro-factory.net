export const YOUTUBE_COMMUNICATION_COMMENTS_API_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.sokontokoro-factory.net/youtube/comments"
    : process.env.NODE_ENV === "development"
    ? "https://api-dev.sokontokoro-factory.net/youtube/comments"
    : "http://localhost:5000/youtube/comments"
