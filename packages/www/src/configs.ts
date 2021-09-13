export const YOUTUBE_COMMUNICATION_COMMENTS_API_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.sokontokoro-factory.net/youtube/comments"
    : process.env.NODE_ENV === "development"
    ? "https://api-dev.sokontokoro-factory.net/youtube/comments"
    : "http://localhost:5000/youtube/comments"

export const INQUIRE_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe5bSPvJ5XQM0IACqZ9NKoHuRUAcC_V1an16JGwHh6HeGd-oQ/viewform"
export const TWITTER_URL = "https://twitter.com/skntkr_factory"
export const GITHUB_URL = "https://github.com/TatsuyaYamamoto/"
