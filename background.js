function openPage(url) {
    browser.tabs.create({
        url: "https://jeena.net/notes/new?in_reply_to=" + url
    });
}

async function buttonClicked() {
    const [tab] = await browser.tabs.query({currentWindow: true, active:true});
    console.log(tab)
    openPage(tab.url);
}

browser.browserAction.onClicked.addListener(buttonClicked);
