console.log(`script`);

let clickbait_query = document.getElementById("clickbait_query");

console.log(`clickbait_query ${clickbait_query}`);

chrome.storage.sync.get('clickbait_query', function(data) {
    clickbait_query.setAttribute('value', data.clickbait_query);
});
