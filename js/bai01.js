function validate(ele) {
    if (ele.value === "") {
        ele.classList.remove("error");
        setTimeout(() =>  ele.classList.add("error"), 10);
        return true;
    }

    return false;
}

function giaiBac2() {
    let a = document.getElementById("aId");
    let b = document.getElementById("bId");
    let c = document.getElementById("cId");
    if (a !== null && b !== null && c !== null) {
        if (validate(a) === true || validate(b) === true || validate(c) === true)
            return;

        a = parseFloat(a.value);
        b = parseFloat(b.value);
        c = parseFloat(c.value);

        // Bien luan
        let msg = "Kết quả";
        // ...


        let k = document.getElementById("kq");
        k.innerHTML = `<h2 style="color:red;">${msg}</h2>`;
    }
}

function doiTien() {
    let st = document.getElementById("stId")
    let dv = document.getElementById("dvId")
    if (st !== null && dv !== null) {
        if (validate(st) === true || validate(dv) === true)
            return;
        st = parseFloat(st.value);
        dv = dv.value;
        let re;
        switch(dv) {
            case "usd":
                re = st/22000;
                break;
            case "aud":
                re = st/16000;
                break;
            case "eur":
                re = st/26000;
        }

        let d = document.getElementById("kq2");
        d.innerHTML = `${st} VNĐ = ${re.toFixed(2)} ${dv.toUpperCase()}`;
    }
}

window.onload = function() {
    let images = document.querySelectorAll(".thumb img"); 
    for (let im of images)
        im.onmousemove = function() {
            let i = document.getElementById("main");
            i.src = this.src;
        }

    let buttons = document.querySelectorAll(".btn button")
    for (let b of buttons)
        b.onclick = function() {
            let i = document.getElementById("main");
            i.src = `images/galaxys8/${this.getAttribute("rel")}_1.jpg`

            for (let i = 0; i < images.length; i++)
                images[i].src = `images/galaxys8/${this.getAttribute("rel")}_${i+1}.jpg`
        }
}