function findlinks(element){
    if (element.tagName == 'a'){
        var pointed = element.href;
        var text = element.innerHTML;
        var result = {"link": pointed, "text": text};
    }
    return result;
}

function getAllLinks(){
    var result = [];
    var allA = document.querySelectorAll('a');
    Array.prototype.forEach.call(allA, (item) => {
        var appended = findlinks(item)
        result.push(item)
    });
    return result;
}

var allLinks = getAllLinks();
// alert(allLinks.length)
chrome.runtime.sendMessage(allLinks);
