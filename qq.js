$(function(){

    //框内输入就会显示clear
   $('input').keyup(function(){
        if($(this).val()){
            $(this).next('.clear').css('display','block');
        }
    });
   //输入框获取焦点，并且判断输入框内容是否符合要求
    $('input[type=text]').focusin(function(){
        $(this).css('border','1px solid #3F89EC');
    }).focusout(function(){
        $(this).css('border','1px solid #ccc');
         value=$('.number').val();

        if (/[\u4E00-\u9FA5]/g.test(value)){
            $('.number').prev('.jinggao').html('请输入正确的用户名!');
        }else if(/[A-Za-z]+/g.test(value)){
            value +='@qq.com';
            $('.number').val(value);
        }

        else {
            $('.number').prev('.jinggao').hide();
        }

    });

    //给clear添加事件
    $('.clear').click(function(){
        $(this).prev('input').val('');
        $(this).prev('input').focus();
        $(this).hide();
    });
    $('#login').click(function(){

        $(this).css('color','black');
        $(this).next('#pas').css('color','#999');
        $(this).parent().next('.two').css('display','none');
        $(this).parent().next('.two').next('.one').show();
    });
    $('#pas').click(function(){
        $(this).css('color','black');
        $(this).prev('#login').css('color','#999');
        $(this).parent().next('.two').css('display','block');
        $(this).parent().next('.two').next('.one').css('display','none');
    });
    $('.q-phone').click(function () {
        document.location.href='http://im.qq.com/mobileqq/#from=login';
    });
    $('.q-phone').mouseover(function(){
        $(this).css('background-color','#999');
    });
    $('.q-phone').mouseout(function(){
        $(this).css('background-color','#ccc');
    })




    var isUsr = function(){
        if($('.number').val().length==0)
        {
            return false;
        }
        else{
            return true;
        }
    };
    var isPas=function(){
        if($('.password').val().length==0)
        {
            return false;
        }
        else
        {
            return true;
        }
    };

$('.ok').click(function(){
    if(isUsr()&&isPas())
    {
        alert('登录成功！');
    }
    else
        {

            if(!isPas())
            {
                $('.number').prev('.jinggao').html('你还没有输入密码!');
            }
            if(!isUsr())
        {
            $('.number').prev('.jinggao').html('你还没有输入账号!');
        }
        }
})
})