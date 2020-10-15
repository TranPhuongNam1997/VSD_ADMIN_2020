$( document ).ready(function() {

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

    // $('.btn-selectall input').click(function () {
    //     $('.btn-selectchild input').prop('checked',this.checked);
    //     $('.btn-selectchild, .btn-selectall').addClass('active');
    // });











    // $('.btn-selectall').click(function () {
    //     if($(this).attr('data-selected') == 0){//hien tai dang chua chon
    //         $('.btn-selectall input, .btn-selectchild input'). prop('checked', true);
    //         $('.btn-selectchild, .btn-selectall').addClass('active');
    //
    //         $('.btn-selectchild').attr('data-selected', 1);
    //         $(this).attr('data-selected', 1);
    //     }else{//hien tai dang check => dong lai
    //         $('.btn-selectall, .btn-selectchild').removeClass('active');
    //         $('.btn-selectchild input, .btn-selectall input').prop('checked', false);
    //         $('.btn-selectchild').attr('data-click', 0);
    //         $(this).attr('data-selected', 0);
    //     }
    // });
    //
    // $('.btn-selectchild').click(function () {
    //     if($(this).attr('data-selected') == 0 && $('btn-selectall').attr('data-selected') == 1){//hien tai dang k chon  + selectedAll => bo chon checkbox hien tai
    //         $('.btn-selectall input'). prop('checked', false);
    //         $('.btn-selectall').removeClass('active');
    //
    //         $(this).find('input'). prop('checked', false);
    //         $(this).removeClass('active');
    //         $(this).attr('data-selected', 1);
    //
    //
    //     }
        // else if(flag2 == 1 && flag1 == 1){//mo check (dang CHECK all)
        //
        //
        //     $('.btn-selectall input, .btn-selectchild input'). prop('checked', false);
        //     $('.btn-selectchild, .btn-selectall').removeClass('active');
        //     flag1 = 2;
        //
        //     $(this).find('input'). prop('checked', true);
        //     $(this).addClass('active');
        //     flag2 = 2;
        // }
    //end check box



    // var flag2= 1;
    // $('.btn-selectchild').click(function () {
    //     if(flag2 == 1 && flag1 == 2){//=> mo check (dang  KHONG check all)
    //         $('.btn-selectall input'). prop('checked', false);
    //         $('.btn-selectall').removeClass('active');
    //         flag1 = 1;
    //
    //         $(this).find('input'). prop('checked', false);
    //         $(this).removeClass('active');
    //         flag2 = 2;
    //
    //     }else if(flag2 == 1 && flag1 == 1){//mo check (dang CHECK all)
    //
    //
    //         $('.btn-selectall input, .btn-selectchild input'). prop('checked', false);
    //         $('.btn-selectchild, .btn-selectall').removeClass('active');
    //         flag1 = 2;
    //
    //         $(this).find('input'). prop('checked', true);
    //         $(this).addClass('active');
    //         flag2 = 2;
    //     }else if(flag2 == 2 && flag1 == 1){//mo check (dang CHECK all)
    //
    //
    //         $('.btn-selectall input, .btn-selectchild input'). prop('checked', false);
    //         $('.btn-selectchild, .btn-selectall').removeClass('active');
    //         flag1 = 2;
    //
    //         $(this).find('input'). prop('checked', true);
    //         $(this).addClass('active');
    //         flag2 = 2;
    //     }
    //     else{//dong check
    //
    //
    //         $(this).find('input'). prop('checked', false);
    //         $(this).removeClass('active');
    //         flag2 = 1;
    //     }
    // });
    //
    //
    // $('.btn-selectchild input').change(function () {
    //     var check = ($('.btn-selectchild input').filter(":checked").length == $('.btn-selectchild input').length);
    //     $('.btn-selectall input').prop("checked", check);
    // });

    // $('.btn-selectall').click(function () {
    //     $('.btn-selectchild').prop('checked', this.checked);
    //     $('.check-1 label').toggleClass('active');
    //
    // });
    // $('.btn-selectchild').change(function () {
    //     var check = ($('.btn-selectchild').filter(":checked").length == $('.btn-selectchild').length);
    //     $(this).next().toggleClass('active');
    //     $('.btn-selectall').prop("checked", check);
    // });

    // $('.btn-selectall').click(function () {
    //     $('.btn-general input').toggle('checked','checked');
    //     $('.btn-general').toggleClass('active');
    //     $('.btn-selectchild input').prop('checked', this.checked);
    // });
    // $('.btn-selectchild input').change(function () {
    //     var check = ($('.btn-selectchild input').filter(":checked").length == $('.btn-selectchild input').length);
    //     $('.btn-selectall input').prop("checked", check);
    // });


        // $('#customCheck').on('click',function(){
        //     if(this.checked){
        //         $('.btn-selectchild').each(function(){
        //             this.checked = true;
        //             // $(this).next().addClass('active');
        //             $(this).next().attr('style','background: red');
        //             // $('#customCheck').next().addClass('active');
        //
        //         });
        //     }else{
        //         $('.btn-selectchild').each(function(){
        //             this.checked = false;
        //             // $(this).next().removeClass('active');
        //             // $('#customCheck').next().removeClass('active');
        //
        //             $(this).next().attr('style','background: transparent');
        //         });
        //     }
        // });
        //
        // $('.btn-selectchild').on('click',function(){
        //     if($('.btn-selectchild:checked').length == $('.btn-selectchild').length){
        //         $('#customCheck').prop('checked',true);
        //         // $(this).next().addClass('active');
        //         $(this).next().attr('style','background: red');
        //     }else{
        //         $('#customCheck').prop('checked',false);
        //         // $(this).next().removeClass('active');
        //         $(this).next().attr('style','background: transparent');
        //     }
        // });

    // var $tbl = $('.check-1');
    // var $bodychk = $tbl.find('input');
    //
    // $bodychk.on('change', function () {
    //     if($(this).is(':checked')) {
    //         $(this).next().addClass('active');
    //     }
    //     else {
    //         $(this).next().removeClass('active');
    //     }
    // });
    //
    // $tbl.find('input.btn-selectall:checkbox').change(function () {
    //     var c = this.checked;
    //     $bodychk.prop('checked', c);
    //     $bodychk.trigger('change');
    // });


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
    //checkvalidate
    $(".form-check-validate").validate(
        {
            rules:
                {
                    tentcph:
                        {
                            required: true
                        },
                    tentienganh:
                        {
                            required: true
                        },
                    noicap:
                        {
                            required: true
                        }
                },
            messages:
                {
                    tentcph:
                        {
                            required: "Vui lòng nhập Tên TCPH"
                        },
                    tentienganh:
                        {
                            required: "Vui lòng nhập Tên tiếng anh"
                        },
                    noicap:
                        {
                            required: "Vui lsfsdafsd"
                        }

                }
        });

});

