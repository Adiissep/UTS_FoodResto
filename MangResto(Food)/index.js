function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add(
        'opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove(
        'opacity-100'))
}

function openDropdown(event, dropdown) {
    let element = event.target;
    while (element.nodeName !== "BUTTON") {
        element = element.parentNode;
    }
    var popper = Popper.createPopper(element, document.getElementById(dropdown), {
        placement: 'bottom-start'
    });
    document.getElementById(dropdown).classList.toggle("hidden");
    document.getElementById(dropdown).classList.toggle("block");
}

//nEXT langID
