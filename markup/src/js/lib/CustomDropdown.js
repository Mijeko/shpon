export default class CustomDropdown {    constructor() {        const dropdowns = document.querySelectorAll('.custom-dropdown');        dropdowns.forEach(dropdown => {            const select = dropdown.querySelector('.select');            const caret = dropdown.querySelector('.caret');            const menu = dropdown.querySelector('.custom-dropdown-menu');            const options = dropdown.querySelectorAll('.custom-dropdown-menu li');            const selected = dropdown.querySelector('.selected');            select.addEventListener('click', () => {                select.classList.toggle('select-clicked');                caret.classList.toggle('caret-rotate');                menu.classList.toggle('custom-dropdown-menu-open');            });            console.log(options);            options.forEach(option => {                option.addEventListener('click', () => {                    selected.innerHTML = option.innerHTML;                    select.classList.remove('select-clicked');                    caret.classList.remove('caret-rotate');                    menu.classList.remove('custom-dropdown-menu-open');                    options.forEach(option => {                        option.classList.remove('active');                    });                    option.classList.add('active');                });            });            // document.addEventListener('click', function (event) {            //     console.log(event.target);            //            //     if (!menu.contains(event.target)) {            //         menu.classList.remove('custom-dropdown-menu-open');            //     }            // });        });    }}