const menuList = document.querySelectorAll(".footer__list");
const itemClickShowList = document.querySelectorAll(".footer__block-title");

for (let i = 0; i < itemClickShowList.length; i++) {

    itemClickShowList[i].addEventListener("click", () => {
        if(menuList[i].classList.contains("active")) {
            menuList[i].classList.remove("active");
            itemClickShowList[i].classList.remove("active");
        } else {
            menuList[i].classList.add("active");
            itemClickShowList[i].classList.add("active");
        }
    });
}