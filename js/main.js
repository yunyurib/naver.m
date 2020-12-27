let listNum = 0;
function goRTK() {
  "use strict";
  const tg = document.getElementById("Rlist");
  listNum++;
  if (listNum === 20) {
    listNum = 0;
  }
  tg.style.top = -40 * listNum + "px";
}

window.addEventListener("load", function () {
  "use strict";
  setInterval(goRTK, 2000);

  const menu = document.getElementById("mwrap");
  document.getElementById("ham").onclick = function () {
    menu.style.left = "0%";
    menu.style.transition = "left .6s ease-out";
  };

  document.querySelector(".close").onclick = function () {
    menu.style.left = "-100%";
  };

  let hlsts = 0;
  document.querySelector(".rtk_toggle").onclick = function () {
    hlsts ? (hlsts = "0px") : (hlsts = "450px");

    const tglist = document.querySelector("#hidelist");
    tglist.style.transition = "height .6s ease-in-out";
    tglist.style.height = hlsts;

    hlsts === "0px"
      ? this.setAttribute("class", "rtk_toggle")
      : this.setAttribute("class", "rtk_toggle toggle2");

    hlsts === "0px" ? (hlsts = 0) : (hlsts = 1);
  };

  document.querySelectorAll(".rtkbox a")[0].onclick = function () {
    document.querySelector(".rtk1").style.display = "block";
    document.querySelector(".rtk2").style.display = "none";

    this.querySelector("span").setAttribute("class", "nowsel");

    document
      .querySelectorAll(".rtkbox a")[1]
      .querySelector("span")
      .setAttribute("class", "");
  };

  document.querySelectorAll(".rtkbox a")[1].onclick = function () {
    document.querySelector(".rtk1").style.display = "none";
    document.querySelector(".rtk2").style.display = "block";
    this.querySelector("span").setAttribute("class", "nowsel");
    document
      .querySelectorAll(".rtkbox a")[0]
      .querySelector("span")
      .setAttribute("class", "");
  };
});
