console.log(window.innerWidth)

// window.scrollTo({
//     top: 3400,
//     behavior: 'smooth' // опционально: плавная прокрутка
// });



const body = document.querySelector('body');

const header = document.querySelector('header');
// const headerMenuA = document.querySelectorAll('header .menu a');
// const menuDots = document.querySelectorAll('header .menu a .dot');

// headerMenuA.forEach(element => {
//     element.addEventListener('click', () => {
//         menuDots.forEach(dot => {
//             dot.style.opacity = 0;
//         })

//         element.firstElementChild.style.opacity = 1;
//     })
// });

const headerBurger = document.querySelector('header .burger');
const headerMenuBurger = document.querySelector('header .menuBurger');
const headerMenuBurgerA = document.querySelectorAll('header .menuBurger');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle("open");
    headerMenuBurger.classList.toggle("open");
    body.classList.toggle("noScroll");
})

headerMenuBurgerA.forEach(element => {
    element.addEventListener('click', () => {
        headerBurger.classList.toggle("open");
        headerMenuBurger.classList.toggle("open");
        body.classList.toggle("noScroll");
    })
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 1128) {
        if (headerBurger.classList.contains("open")) {

            headerBurger.classList.remove("open");
            headerMenuBurger.classList.remove("open");
            body.classList.remove("noScroll");
        }
    }
});










const partsPriceNuv = document.querySelectorAll('#price .nav .part');
const classesPrice = document.querySelectorAll('#price .classes');

partsPriceNuv.forEach(element => {
    element.addEventListener('click', () => {
        partsPriceNuv.forEach(el => {
            el.classList.remove("open");
        })
        element.classList.add("open");

        if (element.classList.contains("part1")) {
            classesPrice.forEach(cl => {
                cl.classList.remove("open");
                if(cl.classList.contains("classes1")){
                    cl.classList.add("open");
                }
            })
        }

        else if (element.classList.contains("part2")) {
            classesPrice.forEach(cl => {
                cl.classList.remove("open");
                if(cl.classList.contains("classes2")){
                    cl.classList.add("open");
                }
            })
        }

         else if (element.classList.contains("part3")) {
            classesPrice.forEach(cl => {
                cl.classList.remove("open");
                if(cl.classList.contains("classes3")){
                    cl.classList.add("open");
                }
            })
        }

         else if (element.classList.contains("part4")) {
            classesPrice.forEach(cl => {
                cl.classList.remove("open");
                if(cl.classList.contains("classes4")){
                    cl.classList.add("open");
                }
            })
        }
         else if (element.classList.contains("part5")) {
            classesPrice.forEach(cl => {
                cl.classList.remove("open");
                if(cl.classList.contains("classes5")){
                    cl.classList.add("open");
                }
            })
        }
    })
});







const partQuestions = document.querySelectorAll('#questions .part .boxQuestions .partQuestions');
partQuestions.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('open')
    })
});


