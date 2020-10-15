$( document ).ready(function() {


    //js menubar
    $(".menuchild").hide();
    $(".has-dropdown.active .menuchild").show();

    $(".has-dropdown").click(function(){
        $(".has-dropdown").removeClass('rotate-down');

        $(".menuchild").slideUp();
        if(!$(this).children(".menuchild").is(":visible"))
        {
            $(this).children(".menuchild").slideDown();
            $(this).addClass('rotate-down');
        }
    });

    $('.icon-close-ip').click(function () {
       $('.text-null').innerHTML = '';
    });

    $('.btn-expand-narrow').click(function () {
       $('header').toggleClass('active');
    });





    //nut scroll top

    $("#back-to-top").click(function () {
        $("html, body").animate({scrollTop : 0},"slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >=300) {
            $('#back-to-top').show();
        }
        else {
            $('#back-to-top').hide();
        }
    });

    //script sidebar

    $(".menucate-lv2").hide();
    $(".rotate-down .menucate-lv2").show();
    $(".menucate-lv1 > li > a").click(function(){
        $(".menucate-lv1 > li.hasdrop-cate").removeClass('rotate-down');

        $(".menucate-lv2").slideUp();
        if(!$(this).next(".menucate-lv2").is(":visible"))
        {
            $(this).next(".menucate-lv2").slideDown();
            $(this).parent().addClass('rotate-down');
        }
    });

    //js nut bars
    $('.bars-close').click(function () {
        $('.width-resize').toggleClass('change-width');
        $('.col-vsd-60').toggleClass('change-width');
    });
    $('.bars-close').hover(function () {
        $('.heading-diary').toggleClass('change-color');
    });


    // js nut thay đổi trạng thái của từ popup
    $('.item-word').click(function () {
       $(this).toggleClass('active');
    });

    //check box

    $('.btn-selectall input').click(function () {
        $('.btn-selectchild input').prop('checked', this.checked);
    });
    $('.btn-selectchild input').change(function () {
        var check = ($('.btn-selectchild input').filter(":checked").length == $('.btn-selectchild input').length);
        $('.btn-selectall input').prop("checked", check);
    });



    // custom datepicker

    jQuery('.datepicker-vsd').datetimepicker({
        timepicker:false,
        format: 'd/m/Y'
    });
    jQuery('.datetimepicker-vsd').datetimepicker({
        format: 'd/m/Y H:m'
    });
    $.datetimepicker.setLocale('vi');

    $('input[name="daterange"]').daterangepicker({
        opens: 'left',
        "autoApply": true
    },
 function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });


});

