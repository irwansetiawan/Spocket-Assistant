import { importListDetails, importListPrimary } from "./importlist";
import { renderMenuCard } from "./menucard";
import "../tailwind.css"
import 'flowbite';

(() => {

    (function() {
        var origOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function(...args: any[]) {
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
            origOpen.call(this, args[0], args[1], args[2], args[3], args[4]);
        };
        console.log('XHR injected');
    })();

    renderMenuCard();
    
})();
