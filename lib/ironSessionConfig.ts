export const ironOptions = {
  //set your cookie name
  cookieName: "session_cookie",
  password: process.env.COOKIE_PASSWORD as string,
  ttl: 24 * 60 * 60,
};
