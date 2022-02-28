function tao(dk)
{
    return(Math.floor(Math.random() * dk));
}


function dXY()
{
    var y = tao(200) + 50;
    var x = tao(280) + 50;


    while ((x > 80 && x < 100) || (y > 70 && y < 200))
    {
        y = tao(200) + 50;
        x = tao(280) + 50;
    }
    console.log(x, y);
    no.style.top = x + 'px';
    
    no.style.left = y + 'px';
}

function win()
{
    alert('Thế Giờ Mày Là Người Yêu Tau Rồi Nha!');
}
const no = document.querySelector('.no');
no.addEventListener('click', dXY);

const yes = document.querySelector('.yes');
yes.addEventListener('click', win);
//50