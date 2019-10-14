$(document).ready(function(){ 

    $('.scroll').click(function(e){
        var linkHref = $(this).attr('href');
        var headerHeight = $('header').outerHeight();

        console.log(headerHeight);
       
        $('html , body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        },1000)
    })
})


function show(){

    document.getElementById('sidebar').classList.toggle('active');
    
}

// window.addEventListener('mouseup', function(e){
//     var box = document.getElementById('sidebar');
//      if(event.target != box && event.target.parentNode !=box){
//          box.style.display = 'none';
//      }
// })
