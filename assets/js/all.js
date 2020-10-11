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
} // 步驟二


var arr = []; // 監聽 checkbox 點選事件

$(document).on('change', '.checkbox', function () {
  $(this).closest('label').toggleClass('border border-primary bg-babyPrimary');
  var id = $(this).data("id");

  if ($(this).is(":checked")) {
    arr.push(id);
  } else {
    var cache = arr.filter(function (item) {
      return item != id;
    });
    arr = cache;
  }
}); // 監聽點選下一步事件

var btnStepTwo = document.getElementById('stepTwo');

if (btnStepTwo) {
  var getStepTwo = function getStepTwo(e) {
    e.preventDefault();

    if (arr.length === 0) {
      arr.push("apple");
      localStorage.setItem('checkbox_object', JSON.stringify(arr));
      document.location.href = "./worship.html";
    }

    if (arr.length > 0) {
      localStorage.setItem('checkbox_object', JSON.stringify(arr));
      document.location.href = "./worship.html";
    }
  };

  btnStepTwo.addEventListener('click', getStepTwo, false);
} // 步驟三


var getArr = JSON.parse(localStorage.getItem('checkbox_object')); // 顯示圖片

if (location.pathname === '/worship.html') {
  getArr.forEach(function (item) {
    return document.querySelector("[data-img=\"".concat(item, "\"]")).classList.add("d-block");
  });
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
