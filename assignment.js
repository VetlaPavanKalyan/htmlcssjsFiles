let f = document.querySelector('form');

let i = document.getElementById('i');

let d = document.getElementById('myDiv');

f.addEventListener('click', function (e) {
    e.preventDefault();
})

i.addEventListener('click', function () {
    if (d.classList.contains('hide')) {
        d.classList.remove('hide');
        d.classList.add('show');
    } else if (d.classList.contains('show')) {
        d.classList.remove('show');
        d.classList.add('hide');
    }
})