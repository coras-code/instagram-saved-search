//const article = document.querySelector("article");
//const article = document.querySelector("article");
//const elements = document.getElementByClassName("aagv");
//const elements = document.querySelectorAll("aagv")
//const elements = document.querySelector("_aabd _aa8k _aanf .x1i10hfl");
//const elements = document.getElementsByClassName("_aagv")[0]
//const elements = document.getElementsByTagName("_aagv")

//const classd = document.getElementsByClassName("_aagv")[0]
//const elements = classd.getElementsByName('img')[0].alt
//console.log(elements)
//elements.click()

console.log("im a pop")
// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
console.log(article)
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}