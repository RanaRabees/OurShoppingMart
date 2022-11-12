// Jewellery Congratulation!

function scrolldiv() {
    var element = document.getElementById("Wishlist");
    element.scrollIntoView();
    swal({
        title: "Congratulation!",
        text: ` Your Item ${Jewelleryproduct} Is Added Into Your Wishlist\n Now Proceed On, Purchase Your Item So We Can Deliever It At Your Door Step.`,
        icon: "success",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Thank You!", {
                    icon: "success",
                });
            } else {
                swal(`Sorry Your Item ${Jewelleryproduct} Is Not Added Into Your Wishlist`, {
                    icon: "error",
                })
            }
        });;
}





//   <!-- darkLight Mode Javasript  -->
const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark-mode") {
    body.classList.add("dark");
}

// js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    // js code to keep user selected mode even page refresh or file reopen
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});

// js code to toggle search box
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
});


//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

body.addEventListener("click", e => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")) {
        nav.classList.remove("active");
    }
});
