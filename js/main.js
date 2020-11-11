// write your code here
// use one of the following urls  to get the products
// https://json-project3.herokuapp.com/products
// https://bikes-app.herokuapp.com/products // if you use this one you don't need img folder :)
$(function () {

    $.get('https://bikes-app.herokuapp.com/products')
        .then(function (data) {
            $(".all").text(data.length);
            let maleBikes = data.filter(function (e) {
                return e.gender == "MALE";
            })
            let femaleBikes = data.filter(function (e) {
                return e.gender == "FEMALE";
            })
            let leGrandBikes = data.filter(function (e) {
                return e.brand == "LE GRAND BIKES";
            })
            let kross = data.filter(function (e) {
                return e.brand == "KROSS";
            })
            let explorer = data.filter(function (e) {
                return e.brand == "EXPLORER";
            })
            let visitor = data.filter(function (e) {
                return e.brand == "VISITOR";
            })
            let force = data.filter(function (e) {
                return e.brand == "FORCE";
            })
            let eBikes = data.filter(function (e) {
                return e.brand == "E-BIKES";
            })
            let ideal = data.filter(function (e) {
                return e.brand == "IDEAL";
            })

            $(".male").text(maleBikes.length);
            $(".female").text(femaleBikes.length);
            $(".leGrandBikes").text(leGrandBikes.length);
            $(".kross").text(kross.length);
            $(".explorer").text(explorer.length);
            $(".visitor").text(visitor.length);
            $(".force").text(force.length);
            $(".eBikes").text(eBikes.length);
            $(".ideal").text(ideal.length);

            data.forEach(element => {
                $("#all").children().first().addClass("filter_text");
                $("#all").children().last().addClass("filter_badge");
                createCard(element.image, element.name, element.price);
            });
        })
        .catch(function (err) {
            console.log("Error:", err)
        })

    $(".filter_btn").on("click", function (e) {
        e.preventDefault();
        $(".filter_text").removeClass("filter_text");
        $(".filter_badge").removeClass("filter_badge");
        $(this).children().first().addClass("filter_text");
        $(this).children().last().addClass("filter_badge");
        $(".cards").empty();
    })


    $("#all").on("click", function (e) {
        $.get('https://bikes-app.herokuapp.com/products')
            .then(function (data) {
                data.forEach(element => {
                    createCard(element.image, element.name, element.price);
                });
            })
            .catch(function (err) {
                console.log("Error:", err)
            })

    })

    $("#male").on("click", function (e) {
        $.get('https://bikes-app.herokuapp.com/products')
            .then(function (data) {
                data.filter(function (element) {
                    if (element.gender == "MALE") {
                        createCard(element.image, element.name, element.price);
                        return true;
                    }
                })
            })
            .catch(function (err) {
                console.log("Error:", err)
            })
    });

    $("#female").on("click", function (e) {
        $.get('https://bikes-app.herokuapp.com/products')
            .then(function (data) {
                data.filter(function (element) {
                    if (element.gender == "FEMALE") {
                        createCard(element.image, element.name, element.price);
                        return true;
                    }
                })
            })
            .catch(function (err) {
                console.log("Error:", err)
            })
    });

    $("#leGrandBikes").on("click", function (e) {
        $.get('https://bikes-app.herokuapp.com/products')
            .then(function (data) {
                data.filter(function (element) {
                    if (element.brand == "LE GRAND BIKES") {
                        createCard(element.image, element.name, element.price);
                        return true;
                    }
                })
            })
            .catch(function (err) {
                console.log("Error:", err)
            })
    });

    $("#kross").on("click", function (e) {
        $.get('https://bikes-app.herokuapp.com/products')
            .then(function (data) {
                data.filter(function (element) {
                    if (element.brand == "KROSS") {
                        createCard(element.image, element.name, element.price);
                        return true;
                    }
                })
            })
            .catch(function (err) {
                console.log("Error:", err)
            })
    });

    $("#explorer").on("click", function (e) {
        $.get('https://bikes-app.herokuapp.com/products')
            .then(function (data) {
                data.filter(function (element) {
                    if (element.brand == "EXPLORER") {
                        createCard(element.image, element.name, element.price);
                        return true;
                    }
                })
            })
            .catch(function (err) {
                console.log("Error:", err)
            })
    });

    $("#visitor").on("click", function (e) {
        $.get('https://bikes-app.herokuapp.com/products')
            .then(function (data) {
                data.filter(function (element) {
                    if (element.brand == "VISITOR") {
                        createCard(element.image, element.name, element.price);
                        return true;
                    }
                })
            })
            .catch(function (err) {
                console.log("Error:", err)
            })
    });

    $("#force").on("click", function (e) {
        $.get('https://bikes-app.herokuapp.com/products')
            .then(function (data) {
                data.filter(function (element) {
                    if (element.brand == "FORCE") {
                        createCard(element.image, element.name, element.price);
                        return true;
                    }
                })
            })
            .catch(function (err) {
                console.log("Error:", err)
            })
    });

    $("#eBikes").on("click", function (e) {
        $.get('https://bikes-app.herokuapp.com/products')
            .then(function (data) {
                data.filter(function (element) {
                    if (element.brand == "E-BIKES") {
                        createCard(element.image, element.name, element.price);
                        return true;
                    }
                })
            })
            .catch(function (err) {
                console.log("Error:", err)
            })
    });

    $("#ideal").on("click", function (e) {
        $.get('https://bikes-app.herokuapp.com/products')
            .then(function (data) {
                data.filter(function (element) {
                    if (element.brand == "IDEAL") {
                        createCard(element.image, element.name, element.price);
                        return true;
                    }
                })
            })
            .catch(function (err) {
                console.log("Error:", err)
            })
    });

    $(".filter_btn").on("mouseover", function (e) {
        $(this).children().first().css({ color: "orange" });
        $(this).children().last().css({ backgroundColor: "orange" });
    });

    $(".filter_btn").on("mouseout", function (e) {
        $(this).children().first().css({ color: "black" });
        $(this).children().last().css({ backgroundColor: "#e7e7e7" });
    });


    function createCard(_img, _title, _price) {
        let cards = $(".cards");
        $(cards).append(`
            <div class="col-md-4">
                <div class="thumbnail">
                    <img src="${_img}" class="img-responsive">
                    <div class="caption orange_bg">
                        <h5 class="bold">${_title}</h5>
                        <p>${_price} $</p>
                    </div>
                </div>
            </div>`)
    }
});

