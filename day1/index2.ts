class Panel {
    private elementList: NodeList;

    set elements(list) {
        this.elementList = list;
    }

    get elements() {
        return this.elementList;
    }

    bindEvent(list): void {
        if (list == null) return;
        const _this = this;
        list.forEach(item => {
            item.addEventListener('click', function () {
                _this.removeEvent(_this.elementList);
                item.classList.add('active')
            })
        })
    }

    removeEvent(list): void {
        list.forEach(element => {
            element.classList.remove('active');
        })
    }
}

const panels = document.querySelectorAll('.panel');
const panel = new Panel();
panel.elements = panels;
panel.bindEvent(panel.elements);