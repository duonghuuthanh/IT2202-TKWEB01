function loadCates() {
    fetch("data/categories.json").then(res => res.json()).then(data => {
        let h = "";
        for (let c of data) {
            h += `<li><a href="#">${c.name}</a></li>`
        }

        // let e = document.getElementById("menu");
    
        // if (e !== null)
        //     e.innerHTML += h;

        let e = document.querySelector("#menu :first-child");
    
        if (e !== null)
            e.insertAdjacentHTML("afterend", h);
    });
}

function loadProducts() {
    fetch("data/products.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data) {
            h += `
            <div class="product">
                <div>
                    <div><img src="${p.image}" alt="iPhone" /></div>
                    <h3>${p.name}</h3>
                    <p>${p.price} VNĐ</p>
                    <a href="javascript:;" class="del">&times;</a>
                    
                </div>
            </div>
            `
        }

        let e = document.getElementById("products");
        e.innerHTML = h;

        // Bắt sự kiện click
        let buttons = document.getElementsByClassName("del");
        for (let b of buttons)
            b.addEventListener("click", function() {
                if (confirm("Bạn chắc chắn xóa không?") === true)
                    this.parentNode.parentNode.remove();
            });
        })
}

window.onload = () => {
    loadCates();
    loadProducts();

    let kw = document.getElementById("kw");
    if (kw !== null)
        kw.addEventListener("blur", function() {
            if (this.value === "")
                this.classList.remove("error");
                setTimeout(() => this.classList.add("error"), 5)
        });

    let e = document.querySelector(".show");
    e.onclick = function() {
        let n = document.querySelector("nav");
        n.classList.toggle("show-nav");
    }
}