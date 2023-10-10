(() => {

    const importListPrimary = (response) => {
        console.log(response);
    }

    const importListDetails = (response) => {
        console.log(response);
    }

    (function() {
        var origOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function() {
            this.addEventListener('load', function() {
                if (/newapi\.spocket\.co/.test(this.responseURL)) {
                    var response = null;
                    try {
                        response = JSON.parse(this.responseText);
                    } catch(ex) {}

                    if (/\/import_list_primary/.test(this.responseURL)) {
                        importListPrimary(response);
                    }

                    if (/\/import_list\/details/.test(this.responseURL)) {
                        importListDetails(response);
                    }
    
                    // if (response) {
                    //     var detail = {
                    //         response    : response,
                    //         url          : this.responseURL
                    //     };
                    //     document.dispatchEvent(new CustomEvent('gs_plus_xhr', {
                    //         detail: detail
                    //     }));
                    //     console.log(detail)
                    // }
                }
            });
            origOpen.apply(this, arguments);
        };
        console.log('XHR injected');
    })();
    
})();
