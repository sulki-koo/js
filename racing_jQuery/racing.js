let speedRate = 1.0;
let rate = [];

let interval1 = null;
let interval2 = null;
let interval3 = null;

$(function() {
    $("#count").hide();
    $("#horse1, #horse2, #horse3, #horse4").css('left', '0px');
    $("#start").click(e => {
        $("#count").show().slideUp('slow');
        $("#start, #level").prop('disabled', true);
        $("#result").text("STARTED! PRESS SPACE BAR KEY!");
        
        setTimeout(() => {
            $("#count").html(2);
            $("#count").slideDown('slow');
        }, 1000);
        setTimeout(() => {
            $("#count").html(1);
            $("#count").slideUp('slow');
        }, 2000);
        setTimeout(() => {
            $("#count").hide();
            comStart();
            const keyupHandler = e => {
                if(e.keyCode===32) { // e.keyCode===38||e.keyCode===40
                    let horse4Left = parseInt($("#horse4").css('left'));
                    
                    $("#horse4").css('left', (horse4Left+ 18) + 'px');
                    if(horse4Left > 1188){
                        rate.push(4);
                        $(document).off('keyup', keyupHandler);
                    }
                    printResult();
                }
            };
            $(document).keyup(keyupHandler);
        }, 3000);
    });

    const comStart = () => {
        interval1 = setInterval(run, Math.ceil(Math.random()*50) + 100, $("#horse1"));
        interval2 = setInterval(run, Math.ceil(Math.random()*50) + 100, $("#horse2"));
        interval3 = setInterval(run, Math.ceil(Math.random()*50) + 100, $("#horse3"));
    };
    
    const run = function(horse) {
        const currLeft = parseInt(horse.css('left'));
            if (currLeft > 1170) {
                if (horse.attr("id")=="horse1") {
                    clearInterval(interval1);
                    rate.push(1);
                }
                if (horse.attr("id")=="horse2") {
                    clearInterval(interval2);
                    rate.push(2);
                }
                if (horse.attr("id")=="horse3") {
                    clearInterval(interval3);
                    rate.push(3);
                }
            }
        horse.css('left', (currLeft + (Math.ceil(Math.random()*speedRate*17) + 8)) + 'px');
        printResult();
    };

    $("#level").change(e => {
        switch($("#level").val()){
            case "medium" :
                speedRate = 1.25;
                break;
            case "hard" :
                speedRate = 1.5;
        }
    });

    const printResult = () => {
        if (rate.length==4) {
            let printStr = "";
            for (let i=0; i<rate.length; i++) {
                printStr += (i+1) + "등 : " + rate[i] + "레인&nbsp;&nbsp;&nbsp;"
            }
            $("#result").html(printStr);
        }
    };
});


