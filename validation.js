$(document).ready(function(){
    $('#mainform').validate({
        rules:{
            fname:{
                required: true,
                minlength: 5,
            },
            sname:{
                required: true,
                minlength: 2,
            },
            mblnum: {
                required: true,
            },
            pass: {
                required: true,
            },
            day: {
                required: true,
            },
            month: {
                required: true,
            },
            year: {
                required: true,
            },
            gen: {
                required: true,
            },

        }
    })
})

var overlay=document.querySelector(".overlay")
var box=document.querySelector(".box")

function btn(){
    overlay.style.display="none"
    box.style.display="none"
}