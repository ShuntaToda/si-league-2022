import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "l31rnug477",
  apiKey: process.env.API_KEY,
});
