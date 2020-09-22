"use strict";

// 步驟一
var btnStepOne = document.getElementById('stepOne');

if (btnStepOne) {
  var getStepOne = function getStepOne(e) {
    e.preventDefault();
    var name = document.getElementById("userName");
    var companyName = document.getElementById("companyName");
    var address = document.getElementById("userAddress"); //無障礙提示

    if (name.value === "" && companyName.value === "" && address.value === "") {
      name.classList.add("is-invalid");
      companyName.classList.add("is-invalid");
      address.classList.add("is-invalid");
    } else if (name.value !== "" && companyName.value === "" && address.value === "") {
      name.classList.add("is-valid");
      name.classList.remove("is-invalid");
      companyName.classList.add("is-invalid");
      address.classList.add("is-invalid");
    } else if (name.value === "" && companyName.value !== "" && address.value === "") {
      name.classList.add("is-invalid");
      companyName.classList.add("is-valid");
      companyName.classList.remove("is-invalid");
      address.classList.add("is-invalid");
    } else if (name.value === "" && companyName.value === "" && address.value !== "") {
      name.classList.add("is-invalid");
      companyName.classList.add("is-invalid");
      address.classList.add("is-valid");
      address.classList.remove("is-invalid");
    } else if (name.value !== "" && companyName.value !== "" && address.value === "") {
      name.classList.add("is-valid");
      name.classList.remove("is-invalid");
      companyName.classList.add("is-valid");
      companyName.classList.remove("is-invalid");
      address.classList.add("is-invalid");
    } else if (name.value === "" && companyName.value !== "" && address.value !== "") {
      name.classList.add("is-invalid");
      companyName.classList.add("is-valid");
      companyName.classList.remove("is-invalid");
      address.classList.add("is-valid");
      address.classList.remove("is-invalid");
    } else if (name.value !== "" && companyName.value === "" && address.value !== "") {
      name.classList.add("is-valid");
      name.classList.remove("is-invalid");
      companyName.classList.add("is-invalid");
      address.classList.add("is-valid");
      address.classList.remove("is-invalid");
    } else if (name.value !== "" && companyName.value !== "" && address.value !== "") {
      name.classList.add("is-valid");
      name.classList.remove("is-invalid");
      companyName.classList.add("is-valid");
      companyName.classList.remove("is-invalid");
      address.classList.add("is-valid");
      address.classList.remove("is-invalid");
      var data = {
        "name": name.value,
        "companyName": companyName.value,
        "address": address.value
      };
      localStorage.setItem('worshipUserInfo', JSON.stringify(data));
      document.location.href = "./worshipChooseOfferings.html";
    }
  };

  btnStepOne.addEventListener('click', getStepOne, false);
} // 步驟二 toggleClass、push


var apple = document.getElementById("apple");
var orange = document.getElementById("orange");
var banana = document.getElementById("banana");
var grape = document.getElementById("grape");
var threeAnimals = document.getElementById("threeAnimals");
var flower = document.getElementById("flower"); // 監聽 checkbox 點選事件

if (apple) {
  apple.checked == true;
  apple.addEventListener('click', getChecked, false);
}

if (orange) {
  orange.checked == true;
  orange.addEventListener('click', getChecked, false);
}

if (banana) {
  banana.checked == true;
  banana.addEventListener('click', getChecked, false);
}

if (grape) {
  grape.checked == true;
  grape.addEventListener('click', getChecked, false);
}

if (threeAnimals) {
  threeAnimals.checked == true;
  threeAnimals.addEventListener('click', getChecked, false);
}

if (flower) {
  flower.checked == true;
  flower.addEventListener('click', getChecked, false);
}

function getChecked() {
  if (apple.checked == true) {
    document.querySelector("[for='apple']").classList.add("border");
    document.querySelector("[for='apple']").classList.add("border-primary");
    document.querySelector("[for='apple']").classList.add("bg-babyPrimary");
  } else {
    document.querySelector("[for='apple']").classList.remove("border");
    document.querySelector("[for='apple']").classList.remove("border-primary");
    document.querySelector("[for='apple']").classList.remove("bg-babyPrimary");
  }

  if (orange.checked == true) {
    document.querySelector("[for='orange']").classList.add("border");
    document.querySelector("[for='orange']").classList.add("border-primary");
    document.querySelector("[for='orange']").classList.add("bg-babyPrimary");
  } else {
    document.querySelector("[for='orange']").classList.remove("border");
    document.querySelector("[for='orange']").classList.remove("border-primary");
    document.querySelector("[for='orange']").classList.remove("bg-babyPrimary");
  }

  if (banana.checked == true) {
    document.querySelector("[for='banana']").classList.add("border");
    document.querySelector("[for='banana']").classList.add("border-primary");
    document.querySelector("[for='banana']").classList.add("bg-babyPrimary");
  } else {
    document.querySelector("[for='banana']").classList.remove("border");
    document.querySelector("[for='banana']").classList.remove("border-primary");
    document.querySelector("[for='banana']").classList.remove("bg-babyPrimary");
  }

  if (grape.checked == true) {
    document.querySelector("[for='grape']").classList.add("border");
    document.querySelector("[for='grape']").classList.add("border-primary");
    document.querySelector("[for='grape']").classList.add("bg-babyPrimary");
  } else {
    document.querySelector("[for='grape']").classList.remove("border");
    document.querySelector("[for='grape']").classList.remove("border-primary");
    document.querySelector("[for='grape']").classList.remove("bg-babyPrimary");
  }

  if (threeAnimals.checked == true) {
    document.querySelector("[for='threeAnimals']").classList.add("border");
    document.querySelector("[for='threeAnimals']").classList.add("border-primary");
    document.querySelector("[for='threeAnimals']").classList.add("bg-babyPrimary");
  } else {
    document.querySelector("[for='threeAnimals']").classList.remove("border");
    document.querySelector("[for='threeAnimals']").classList.remove("border-primary");
    document.querySelector("[for='threeAnimals']").classList.remove("bg-babyPrimary");
  }

  if (flower.checked == true) {
    document.querySelector("[for='flower']").classList.add("border");
    document.querySelector("[for='flower']").classList.add("border-primary");
    document.querySelector("[for='flower']").classList.add("bg-babyPrimary");
  } else {
    document.querySelector("[for='flower']").classList.remove("border");
    document.querySelector("[for='flower']").classList.remove("border-primary");
    document.querySelector("[for='flower']").classList.remove("bg-babyPrimary");
  }
} // 監聽點選下一步事件


var btnStepTwo = document.getElementById('stepTwo');
var count = 0; // 計算被點選的祭品數目

if (btnStepTwo) {
  var getStepTwo = function getStepTwo(e) {
    e.preventDefault(); // 判斷是否為空值

    if (apple.checked == true) {
      count++;
      localStorage.setItem('checkbox_apple', 'apple');
    }

    if (orange.checked == true) {
      count++;
      localStorage.setItem('checkbox_orange', 'orange');
    }

    if (banana.checked == true) {
      count++;
      localStorage.setItem('checkbox_banana', 'banana');
    }

    if (grape.checked == true) {
      count++;
      localStorage.setItem('checkbox_grape', 'grape');
    }

    if (threeAnimals.checked == true) {
      count++;
      localStorage.setItem('checkbox_threeAnimals', 'threeAnimals');
    }

    if (flower.checked == true) {
      count++;
      localStorage.setItem('checkbox_flower', 'flower');
    }

    if (count === 0) {
      // document.querySelector(`[for='apple']`).classList.add("border");
      // document.querySelector(`[for='apple']`).classList.add("border-primary");
      // document.querySelector(`[for='apple']`).classList.add("bg-babyPrimary");
      // document.querySelector(`[for='orange']`).classList.add("border");
      // document.querySelector(`[for='orange']`).classList.add("border-primary");
      // document.querySelector(`[for='orange']`).classList.add("bg-babyPrimary");
      // document.querySelector(`[for='banana']`).classList.add("border");
      // document.querySelector(`[for='banana']`).classList.add("border-primary");
      // document.querySelector(`[for='banana']`).classList.add("bg-babyPrimary");
      // document.querySelector(`[for='grape']`).classList.add("border");
      // document.querySelector(`[for='grape']`).classList.add("border-primary");
      // document.querySelector(`[for='grape']`).classList.add("bg-babyPrimary");
      // document.querySelector(`[for='threeAnimals']`).classList.add("border");
      // document.querySelector(`[for='threeAnimals']`).classList.add("border-primary");
      // document.querySelector(`[for='threeAnimals']`).classList.add("bg-babyPrimary");
      // document.querySelector(`[for='flower']`).classList.add("border");
      // document.querySelector(`[for='flower']`).classList.add("border-primary");
      // document.querySelector(`[for='flower']`).classList.add("bg-babyPrimary");
      // setTimeout(() => {
      //   document.querySelector(`[for='apple']`).classList.remove("border");
      //   document.querySelector(`[for='apple']`).classList.remove("border-primary");
      //   document.querySelector(`[for='apple']`).classList.remove("bg-babyPrimary");
      //   document.querySelector(`[for='orange']`).classList.remove("border");
      //   document.querySelector(`[for='orange']`).classList.remove("border-primary");
      //   document.querySelector(`[for='orange']`).classList.remove("bg-babyPrimary");
      //   document.querySelector(`[for='banana']`).classList.remove("border");
      //   document.querySelector(`[for='banana']`).classList.remove("border-primary");
      //   document.querySelector(`[for='banana']`).classList.remove("bg-babyPrimary");
      //   document.querySelector(`[for='grape']`).classList.remove("border");
      //   document.querySelector(`[for='grape']`).classList.remove("border-primary");
      //   document.querySelector(`[for='grape']`).classList.remove("bg-babyPrimary");
      //   document.querySelector(`[for='threeAnimals']`).classList.remove("border");
      //   document.querySelector(`[for='threeAnimals']`).classList.remove("border-primary");
      //   document.querySelector(`[for='threeAnimals']`).classList.remove("bg-babyPrimary");
      //   document.querySelector(`[for='flower']`).classList.remove("border");
      //   document.querySelector(`[for='flower']`).classList.remove("border-primary");
      //   document.querySelector(`[for='flower']`).classList.remove("bg-babyPrimary");
      // }, 1000);
      // alert('請選擇祭品');
      return;
    }

    document.location.href = "./worship.html";
  };

  btnStepTwo.addEventListener('click', getStepTwo, false);
} // 步驟三


var checkbox_apple = localStorage.getItem('checkbox_apple');
var checkbox_orange = localStorage.getItem('checkbox_orange');
var checkbox_banana = localStorage.getItem('checkbox_banana');
var checkbox_grape = localStorage.getItem('checkbox_grape');
var checkbox_threeAnimals = localStorage.getItem('checkbox_threeAnimals');
var checkbox_flower = localStorage.getItem('checkbox_flower'); // 判斷是否開啟圖片

if (checkbox_apple === 'apple' && document.querySelector('#appleImg')) {
  document.querySelector('#appleImg').classList.add("d-block");
}

if (checkbox_orange === 'orange' && document.querySelector('#orangeImg')) {
  document.querySelector('#orangeImg').classList.add("d-block");
}

if (checkbox_banana === 'banana' && document.querySelector('#bananaImg')) {
  document.querySelector('#bananaImg').classList.add("d-block");
}

if (checkbox_grape === 'grape' && document.querySelector('#grapeImg')) {
  document.querySelector('#grapeImg').classList.add("d-block");
}

if (checkbox_threeAnimals === 'threeAnimals' && document.querySelector('#threeAnimalsImg')) {
  document.querySelector('#threeAnimalsImg').classList.add("d-block");
}

if (checkbox_flower === 'flower' && document.querySelector('#flowerImg')) {
  document.querySelector('#flowerImg').classList.add("d-block");
} // 監聽點選下一步事件


var btnStepThree = document.getElementById('stepThree');

if (btnStepThree) {
  var getStepThree = function getStepThree(e) {
    e.preventDefault();
    document.location.href = "./worshipShuwen.html";
  };

  btnStepThree.addEventListener('click', getStepThree, false);
} // 步驟四


var info = localStorage.getItem('worshipUserInfo');

if (info && document.getElementById("userInfo_name") && document.getElementById("userInfo_companyName") && document.getElementById("userInfo_address")) {
  document.getElementById("userInfo_name").textContent = JSON.parse(info).name;
  document.getElementById("userInfo_companyName").textContent = JSON.parse(info).companyName;
  document.getElementById("userInfo_address").textContent = JSON.parse(info).address;
} // 監聽點選下一步事件


var btnStepFour = document.getElementById('stepFour');

if (btnStepFour) {
  var getStepFour = function getStepFour(e) {
    e.preventDefault();
    document.location.href = "./worshipBurn.html";
  };

  btnStepFour.addEventListener('click', getStepFour, false);
} // 步驟五
// 監聽點選下一步事件


var btnStepFive = document.getElementById('stepFive');

if (btnStepFive) {
  var getStepFive = function getStepFive(e) {
    e.preventDefault(); // 清空 localStorage

    localStorage.clear();
    document.location.href = "./worshipCarryOut.html";
  };

  btnStepFive.addEventListener('click', getStepFive, false);
} // 下拉選單修正


$(".navbar-nav .nav-item").hover(function () {
  $(this).toggleClass("show");
  $(this).find(".dropdown-menu").toggleClass("show");
}); //寺廟資訊

$.ajax({
  url: "https://raw.githubusercontent.com/yinmin8610/kaohsiung-a11y-2.0/file/app/assets/file/templeInfo.json",
  type: "GET",
  dataType: "json",
  success: function success(data) {
    var districtSelect = document.getElementById('districtSelect');
    var templeTable = document.getElementById('templeTable');
    var templeData = data;
    var cacheDistrict = [];
    var option = '';

    if (districtSelect) {
      templeData.forEach(function (item) {
        cacheDistrict.push(item.district);
      }); //篩選相同的地區

      var templeDistrict = cacheDistrict.filter(function (item, index, arr) {
        return arr.indexOf(item) === index;
      }); //把地區資料塞進 select

      templeDistrict.forEach(function (item) {
        option += "<option value=\"".concat(item, "\">").concat(item, "</option>");
      });
      districtSelect.innerHTML = "<option selected disabled>\u8ACB\u9078\u64C7\u884C\u653F\u5340</option>".concat(option);

      var changeInfo = function changeInfo() {
        var tableData = '';
        var selected = districtSelect.value;
        templeData.forEach(function (item) {
          //把資料塞進 table
          if (selected === item.district) {
            tableData += "<tr>\n        <th scope=\"row\">".concat(item.id, "</th>\n        <td>").concat(item.name, "</td>\n        <td>").concat(item.district, "</td>\n        <td>").concat(item.address, "</td>\n        <td>").concat(item.religion, "</td>\n        <td>").concat(item.facility, "</td>\n      </tr>");
          }
        }); //將資料染到 table 上

        templeTable.innerHTML = tableData;
      };

      districtSelect.addEventListener('change', changeInfo, false);
    }
  }
}); //阻止Bootstrap Carousel自動播放

$('.carousel').carousel({
  interval: false
}); //swiper

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 100,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    960: {
      slidesPerView: 5
    },
    760: {
      slidesPerView: 4
    },
    540: {
      slidesPerView: 3
    }
  },
  a11y: {
    prevSlideMessage: '上一張',
    nextSlideMessage: '下一張',
    paginationBulletMessage: '前進到第{{index}}張',
    firstSlideMessage: '第一張',
    lastSlideMessage: '最後一張'
  }
});
//# sourceMappingURL=all.js.map
