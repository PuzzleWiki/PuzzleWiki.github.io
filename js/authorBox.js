document.querySelectorAll('ul.author').forEach(
    function (e) {
        let a = e;
        if (a) {
            let ns = a.querySelectorAll("li");
            let str = '<div class="container"><div class="row">';
            for (let i = 0; i < ns.length; i += 5) {
                str += (`<div class="col-md-6" style="margin-top:1em">
                            <div class="card">
                                <div class="card-header">${ns[i].innerText}</div>
                                <div class="row no-gutters">
                                    <div class="col-4"><img src="${ns[i + 3].innerText}" class="img-fluid rounded-circle w-75" style="position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);"></div>
                                    <div class="col-8">
                                        <div class="card-body">
                                            <h5 class="card-title"><a href="${ns[i + 2].innerText}"target="_blank">${ns[i + 1].innerText}</a></h5>
                                            <p class="card-text">${ns[i + 4].innerText}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`)
            }
            str += `</div></div>`;
            let n1 = document.createElement("div");
            n1.innerHTML = str;
            a.parentNode.insertBefore(n1, a);
            a.style = "display: none;"
        }
        else { console.log('No such id "author"') }
    });