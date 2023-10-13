chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(request, sender);
      if (request.greeting === "test")
        sendResponse({farewell: "goodbye"});
    }
);