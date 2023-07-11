function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function initialize() {
    // $('body').append('<div id="hexi" class="button top hexi" data-automation-id="left-sidebar-settings-button">' + '<img id="hexigon" style="display: block;width:25px; height:25px;-webkit-user-select: none;margin: auto;transition: background-color 300ms;" src="https://uploads-ssl.webflow.com/62aa0896918ec25919c8a676/62d16f20e03feb0b4da4b513_image%20(1).png">' + '</div>')
    $('body').append('<div class="hexi_container_body" style="display: block"><div class="hexi_container"><div id="hexi_app"> ' +
        '<div style="width: 248px;height: 100vh;background: red">I am From Hexigon</div>' +
        '</div></div></div>')
}

$(document).ready(function () {
    waitForElm('body').then(() => {
        initialize()
    });
});
