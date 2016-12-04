/**
 * @author Raphael Marco
 */

(function () {

    var targetElement = document.getElementById('generatedTitle');
    var request = new XMLHttpRequest();
    var wordList;

    var generate = function () {
        if (wordList === undefined) {
            return;
        }

        var preIndex = (Math.random() * (wordList.pre.length) ) << 0;
        var mainIndex = (Math.random() * (wordList.main.length - 1) ) << 0;

        targetElement.innerHTML = wordList.pre[preIndex] + ' ' + wordList.main[mainIndex] + ' System';
    };

    request.onreadystatechange = function () {
        if (request.readyState == XMLHttpRequest.DONE && request.status == 200) {
            wordList = JSON.parse(request.responseText);
            
            generate();
        }
    };

    request.open('GET', document.location.href + '/words.json', true);
    request.send();

    document.getElementById('generateButton').addEventListener('click', generate, false);

}());
