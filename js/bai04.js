$(document).ready(() => {
    $("#btnThem").click(() => {
        let name = $("#colorId").val();
        $(".buttons").append(`
            <div><button style="background-color:${name}"></button></div>
        `)
    });

    $(".rdo > input[type=radio]").click(function() {
        let id = $(this).attr("rel");
        $(".shape > svg").hide();
        $(id).show();
    });

    $(".buttons").on("click", "button", function() {
        let color = $(this).css("background-color");
        $(".shape > svg > *").attr("fill", color);
    })

    const colors = ["yellow", "orange", "brown", "pink", "bluesky"];
    $("#colorId").keyup(function() {
        let t = $(this).val();
        let h = "";
        for (let c of colors)
            if (c.indexOf(t) >= 0)
                h += `<li><a href="javascript:;">${c}</a></li>`;
        
        $("#colorSuggest").html(h);
    })
})