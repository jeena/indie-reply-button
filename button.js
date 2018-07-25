async function buttonClicked(e) {
    const [tab] = await browser.tabs.query({currentWindow: true, active:true});

    browser.tabs.create({
        url: e.target.parentNode.dataset.href + tab.url
    });

    window.close()
}

document.addEventListener("click", buttonClicked)
