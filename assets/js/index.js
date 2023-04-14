const nav__toggle = document.querySelector('.nav__toggle');
    const nav = document.querySelector('.nav');
    nav__toggle.addEventListener('click', (event) =>{  
            if(!nav.classList.contains("active")) { 
                nav.classList.add('active'); 
                nav__toggle.classList.add('active');
            }else{
              nav.classList.remove('active'); 
              nav__toggle.classList.remove('active');
            }
    })