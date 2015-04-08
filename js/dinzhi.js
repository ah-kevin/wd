$(function(){

        nstSlider($(".nstSlider1"),$('.leftLabel1'), $('.leftSpan1'));
        nstSlider($(".nstSlider2"),$('.leftLabel2'), $('.leftSpan2'));
        nstSlider($(".nstSlider3"),$('.leftLabel3'), $('.leftSpan3'));

         $(".leftLabel1").on("change",function(){
            changeNum(this);
         });

         $(".leftLabel2").on("change",function(){
            changeNum(this);
         });

         $(".leftLabel3").on("change",function(){
            changeNum(this);
         });

        function changeNum(th){
             var th=$(th),
                 max=parseInt(th.data("max")),
                 unitPrice=parseFloat(th.data("unitprice")),
                 val=parseInt(th.val());
            if(val > max){
                alert("最大值为"+max);
                th.val(max);
                changeLeft(th,max,max,unitPrice);
            }else{
                changeLeft(th,max,val,unitPrice);    
            }
        } 

        function changeLeft(th,max,val,unitPrice){
            var table=$(th).parent().parent().parent().parent().parent(),   
                nst=table.find(".nstSlider"),
                bar=nst.find(".bar"),
                leftLabel=nst.find(".leftGrip"),
                span=table.find(".inner03>span"),
                nstWidth=nst.width(),
                percentage=val/max,
                left=nstWidth*percentage;
            bar.width(left);
            span.text(val*unitPrice);
            leftLabel.css("left",left-9.5+'px');    
        }

        function clearLeft(th){
            setTimeout(function(){
                for(var i=0,le=th.length;i<le;i++){
                $(th[i]).css("left","0px");
            }
        },1000);
        }

        function nstSlider(ns,la,span){
              $(ns).nstSlider({
            "left_grip_selector": ".leftGrip",
            "value_bar_selector": ".bar",
            "value_changed_callback": function(cause, leftValue, rightValue) {
                var $container = $(this).parent(),
                    val=parseFloat(leftValue*0.15).toFixed(2);
                $(la).val(leftValue);
                $(span).text(val);
                $(this).find('.bar').css('background', '#fed04f');
                clearLeft($(".bar"));    
                 }
             })       
         }

    })