$(document).ready(() => {
    $("#btnTinh").click(() => { 
        if ($("#stId").val() === "") {
            $("#stId").toggleClass("error");
            return;
        }

        let soTien = parseFloat($("#stId").val());
        let kyHan = parseFloat($("#khId").val());
        let laiSuat = parseFloat($("#lsId").val());

        let tienLai = 12000; // áp dụng công thức tính
        $("#kq").html(`<h2>Tiền lãi là: ${tienLai}</h2>`);
    });

    $(".content > div:not(:first-child)").hide();
    $(".tab a").click(function() {
        // Mở tab
        $(".tab li").removeClass("active");
        $(this).parent().addClass("active");

        // Mở nội dung của tab
        let to = $(this).attr("href");
        $(".content > div").hide("slow");
        $(to).show("slow");
    }); 

    let current = -1;
    let num = $(".slider div").length;
    let buttons = "";
    for (let i = 0; i < num; i++)
        buttons += `
        <button class="digit">${i+1}</button>
        `;
    
    $(".button :first-child").after(buttons);

    let showSlider = (current) => {
        $(".slider > div").slideUp("slow");
        $(".slider > div").eq(current).slideDown("slow");

        $("button.digit").removeClass("active");
        $("button.digit").eq(current).addClass("active")
    }

    $(".button button.digit").click(function() {
        let idx = parseInt($(this).text());
        current = idx - 1;
        
        showSlider(current);
    });

    $(".next").click(() => {
        current++;
        if (current === num)
            current = 0;
        showSlider(current);

        clearInterval(timer);
        runSlider(5000);
    }); 

    $(".prev").click(() => {
        current--;
        if (current < 0)
            current = num - 1;
        showSlider(current);
    }); 

    $(".slider").height($(".slider img").height());

    let timer = null;
    let runSlider = (duration) => {
        timer = setInterval(() => {
            $(".next").click();
        }, duration)
    }

    runSlider(5000);
});