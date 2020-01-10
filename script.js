function displayNav(){
    var nav = document.getElementById('hamburger-nav');
    if(nav.style.display === 'block'){
        nav.style.display = 'none';
        document.getElementById('hamburger').classList.remove('is-active');
    }
    else{
        nav.style.display = 'block';
        document.getElementById('hamburger').classList.add('is-active');
    }
}