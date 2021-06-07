function start(tab) {
	chrome.tabs.executeScript({code: "paramName = 0"},function() {
		chrome.tabs.executeScript(tab.id, {file: 'scroll.js'});
    });
}

function stop(tab) {
	chrome.tabs.executeScript({code: "paramName = 1"},function() {
        chrome.tabs.executeScript(tab.id, {file: 'scroll.js'});
    });
}

document.getElementById('scroll').addEventListener('click', start);
document.getElementById('stop').addEventListener('click', stop);