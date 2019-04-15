// ==JiraLinks==
// @name         Hub to JiraLink
// @namespace    http://github.com
// @version      0.1
// @description  Link to JIRA ticket as long as there's a well-formed issue ticket in the title.
// @author       Marcin
// @include      https://github.com/arubanetworks/meridian-editor/pull/*

// ==/UserScript==
(function() {
    'use strict';
    // Your code here...
    function JiraLinks() {

        var issuePattern = /ED-(\d*)/;
        var replacerPattern = "<a href='https://meridianapps.atlassian.net/browse/";
        var titleSpan = document.getElementsByClassName("js-issue-title")[0];
        var titleText = titleSpan.innerText;
        var issueTicket = titleText.match(issuePattern)[0];

        if (issueTicket) {

            var jiraLink = replacerPattern + issueTicket + "'>" + titleText + "</a>";
            document.getElementsByClassName("js-issue-title")[0].innerHTML = jiraLink;
        }
    }

    JiraLinks();

})();
