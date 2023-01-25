var con = document.querySelector('.container');
var login = document.querySelector('.log');
var close = document.querySelector('.close');
close.addEventListener('click', () => {
    con.style.display = 'none';
    close.style.display = 'none';
    login.style.display = 'block'

});
login.addEventListener('click', () => {
    con.style.display = 'flex';
    close.style.display = 'block';
    login.style.display = 'none'
})
document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        console.log(1);
        con.style.display = 'none';
        close.style.display = 'none';
        login.style.display = 'block'
    }
})