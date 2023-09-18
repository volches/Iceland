function cardFunc() {
    var Boxlayout = (function () {
        var wrapper = document.body,
        goldenCards = Array.from(document.querySelectorAll(".card")),
        closeButtons = Array.from(document.querySelectorAll(".close-card")),
        expandedClass = "is-expanded",
        hasExpandedClass = "has-expanded-item";
        return { init: init };
        function init() {
            _initEvents();
        }
        function _initEvents() {
            goldenCards.forEach(function (element) {
                element.onclick = function () {
                    _opensgroup(this);
                };
            });
            closeButtons.forEach(function (element) {
                element.onclick = function (element) {
                    element.stopPropagation();
                    _closesgroup(this.parentElement);
                };
            });
        }
        function _opensgroup(element) {
            if (!element.classList.contains(expandedClass)) {
                element.classList.add(expandedClass);
                wrapper.classList.add(hasExpandedClass);
            }
        }
        function _closesgroup(element) {
            if (element.classList.contains(expandedClass)) {
                element.classList.remove(expandedClass);
                wrapper.classList.remove(hasExpandedClass);
            }
        }
    })();
    Boxlayout.init();    
}

export default cardFunc;
