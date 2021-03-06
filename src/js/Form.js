/**
 * Created by Vineeth on 09-10-2017.
 */
import SmoothScroll from 'smooth-scroll';
export default  function () {
    $('#registerContainer').click(function(){
        let scroll = new SmoothScroll();
        let anchor = document.querySelector( '#registerContainer' );
        scroll.animateScroll( anchor );
        $(this).removeClass('wht').addClass('cardWhite');
        $(this).find('#register').css({
            'height':'100%',
        })
    });
    $('#roomandblock').hide();
    $('#hostel').on('click', function() {
       $('#roomandblock').fadeIn(1500);
    });
    $('#dayboard').on('click', function () {
        $('#roomandblock').fadeOut();
    });
    $('form#register').click(function (e) {
        e.stopPropagation();
    });
    function send(x){
        let obj={};
        for(let i=0;i<x.length;i++){
            obj[x[i].name]=x[i].value;
        }
        console.log(obj);
        $.ajax({
            url:'http://139.59.82.201:8081',
            type:'post',
            data:JSON.stringify(obj),
            'processData': false,
            'contentType': 'application/json',
            success:function (data) {
                console.log(data);
                alert("Successfully register");
                // swal({
                //     title: "Thanks for registering!",
                //     text: "Stay tuned!!",
                //     timer: 2000,
                //     showConfirmButton: false,
                //
                // });
                $('#register').parent().html('')
            }
        })
    }
    $('#register').submit(function (e) {
       e.preventDefault();
       send($(this).serializeArray());
    });

}
