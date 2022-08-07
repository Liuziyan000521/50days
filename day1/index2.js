var Panel = /** @class */ (function () {
    function Panel() {
    }
    Object.defineProperty(Panel.prototype, "elements", {
        get: function () {
            return this.elementList;
        },
        set: function (list) {
            this.elementList = list;
        },
        enumerable: false,
        configurable: true
    });
    Panel.prototype.bindEvent = function (list) {
        if (list == null)
            return;
        var _this = this;
        list.forEach(function (item) {
            item.addEventListener('click', function () {
                _this.removeEvent(_this.elementList);
                item.classList.add('active');
            });
        });
    };
    Panel.prototype.removeEvent = function (list) {
        list.forEach(function (element) {
            element.classList.remove('active');
        });
    };
    return Panel;
}());
var panels = document.querySelectorAll('.panel');
var panel = new Panel();
panel.elements = panels;
panel.bindEvent(panel.elements);
