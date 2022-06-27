var btn = document.getElementById('image')
var about = document.getElementById('myDiv')
var form = document.querySelector('form')

form.addEventListener('click',function(e){
    e.preventDefault();
})

btn.addEventListener('click',function(){
    if(about.classList.contains('hide'))
    {
        about.classList.remove('hide')
        about.classList.add('show')
    }else if(about.classList.contains('show')){
        about.classList.remove('show')
        about.classList.add('hide')
    }
})