$(function(){
    // 어른 조식 +,- 클릭
    $(".breakfast > .adult > .button-wrap > .btn-down").click(function(){
        let totalPrice = parseInt($(".total-wrap > .total > .total-price").text());
        let currentNumber = parseInt($(".breakfast > .adult > .button-wrap > .num").text());
        if(currentNumber > 0){
            currentNumber -= 1;
            totalPrice -= 60000;
        }
        $(".breakfast > .adult > .button-wrap > .num").text(currentNumber);
        $(".total-wrap > .total > .total-price").text(totalPrice);
    })
    $(".breakfast > .adult > .button-wrap > .btn-up").click(function(){
        let totalPrice = parseInt($(".total-wrap > .total > .total-price").text());
        let memberNumber = parseInt($(".rsv-info > .adult > .mem-num").text());
        let currentNumber = parseInt($(".breakfast > .adult > .button-wrap > .num").text());
        if(currentNumber < memberNumber){
            currentNumber += 1;
            totalPrice += 60000;
        }
        $(".breakfast > .adult > .button-wrap > .num").text(currentNumber);
        $(".total-wrap > .total > .total-price").text(totalPrice);
    })
    // 어린이 조식 +,- 클릭
    $(".child > .button-wrap > .btn-down").click(function(){
        let totalPrice = parseInt($(".total-wrap > .total > .total-price").text());
        let currentNumber = parseInt($(".child > .button-wrap > .num").text());
        if(currentNumber > 0){
            currentNumber -= 1;
            totalPrice -= 38000;
        }
        $(".child > .button-wrap > .num").text(currentNumber);
        $(".total-wrap > .total > .total-price").text(totalPrice);
    })
    $(".child > .button-wrap > .btn-up").click(function(){
        let totalPrice = parseInt($(".total-wrap > .total > .total-price").text());
        let memberNumber = parseInt($(".child > .mem-num").text());
        let currentNumber = parseInt($(".child > .button-wrap > .num").text());
        if(currentNumber < memberNumber){
            currentNumber += 1;
            totalPrice += 38000;
        }
        $(".child > .button-wrap > .num").text(currentNumber);
        $(".total-wrap > .total > .total-price").text(totalPrice);
    })

    // 엑스트라베드 +,- 클릭
    $(".bed > .button-wrap > .btn-down").click(function(){
        let totalPrice = parseInt($(".total-wrap > .total > .total-price").text());
        let currentNumber = parseInt($(".bed > .button-wrap > .num").text());
        if(currentNumber > 0){
            currentNumber -= 1;
            totalPrice -= 66000;
        }
        $(".bed > .button-wrap > .num").text(currentNumber);
        $(".total-wrap > .total > .total-price").text(totalPrice);
    })
    $(".bed > .button-wrap > .btn-up").click(function(){
        let totalPrice = parseInt($(".total-wrap > .total > .total-price").text());
        let currentNumber = parseInt($(".bed > .button-wrap > .num").text());
        if(currentNumber < 1){
            currentNumber += 1;
            totalPrice += 66000;
        }
        $(".bed > .button-wrap > .num").text(currentNumber);
        $(".total-wrap > .total > .total-price").text(totalPrice);
    })
    
    //결제하기 버튼 클릭시 alert
    $("#pay").click(function(e){
        let alertText = document.getElementsByClassName('modal-txt');    

        if($("#in-time :selected").val()==""){ 
            $(alertText).text("체크인 예정 시간을 확인해주세요.");
            return false
        }
        else if(!($("#guide-chk").is(":checked"))){ 
            $(alertText).text("유의사항, 취소 및 환불 규정을 확인해주세요.");
            return false
        }
        else if(!($("#col-arg").is(":checked"))){ 
            $(alertText).text("개인정보 수집ㆍ이용에 동의해야만 결제하실 수 있습니다.");
            return false
        }
        else if(!($("#sug-arg").is(":checked"))){ 
            $(alertText).text("개인정보 제3자 제공에 동의해야만 결제하실 수 있습니다.");
            return false
        }
        else{
            document.querySelector(".lypop").style.display = "none";
        }
    })
})

