/**
 * Pushes URLs to IndexNow, which Bing and Yandex accept as an instant
 * "this changed, come crawl it" signal instead of waiting to be discovered.
 * Bing matters beyond its own search share because it backs ChatGPT search.
 *
 * Run AFTER a deploy is live — IndexNow fetches the URL to confirm the change,
 * so pinging before the new build is serving just wastes the submission.
 *
 *   npm run seo:ping
 */
const KEY = "f38a186b3e034687fc67db1241abbaa9"
const HOST = "mustafalanewala.tech"
const urls = [`https://${HOST}`]

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: urls,
}

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
})

// 200 = accepted, 202 = accepted but key still being validated.
console.log(`IndexNow → ${res.status} ${res.statusText}`)
if (!res.ok && res.status !== 202) {
  console.error(await res.text())
  process.exit(1)
}
console.log(`Submitted ${urls.length} URL(s) for ${HOST}`)
