// 步驟一
var btnStepOne = document.getElementById('stepOne');
if (btnStepOne) {
  btnStepOne.addEventListener('click', getStepOne, false);
  function getStepOne(e) {
    e.preventDefault();
    var name = document.getElementById("userName").value;
    var companyName = document.getElementById("companyName").value;
    var address = document.getElementById("userAddress").value;
    // 判斷是否為空值
    if (name === "") {
      alert('請輸入姓名');
    } else if (companyName === "") {
      alert('請輸入公司名稱');
    } else if (address === "") {
      alert('請輸入地址');
    } else if (name && companyName && address) {
      var data = {
        "name": name,
        "companyName": companyName,
        "address": address
      }
      localStorage.setItem('worshipUserInfo', JSON.stringify(data));
      document.location.href = "./worshipChooseOfferings.html";
    }
  }
}


// 步驟二
var apple = document.getElementById("apple");
var orange = document.getElementById("orange");
var banana = document.getElementById("banana");
var grape = document.getElementById("grape");
var threeAnimals = document.getElementById("threeAnimals");
var flower = document.getElementById("flower");
// 監聽 checkbox 點選事件
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
    document.querySelector(`[for='apple']`).classList.add("border");
    document.querySelector(`[for='apple']`).classList.add("border-primary");
    document.querySelector(`[for='apple']`).classList.add("bg-babyPrimary");
  } else {
    document.querySelector(`[for='apple']`).classList.remove("border");
    document.querySelector(`[for='apple']`).classList.remove("border-primary");
    document.querySelector(`[for='apple']`).classList.remove("bg-babyPrimary");
  }

  if (orange.checked == true) {
    document.querySelector(`[for='orange']`).classList.add("border");
    document.querySelector(`[for='orange']`).classList.add("border-primary");
    document.querySelector(`[for='orange']`).classList.add("bg-babyPrimary");
  } else {
    document.querySelector(`[for='orange']`).classList.remove("border");
    document.querySelector(`[for='orange']`).classList.remove("border-primary");
    document.querySelector(`[for='orange']`).classList.remove("bg-babyPrimary");
  }

  if (banana.checked == true) {
    document.querySelector(`[for='banana']`).classList.add("border");
    document.querySelector(`[for='banana']`).classList.add("border-primary");
    document.querySelector(`[for='banana']`).classList.add("bg-babyPrimary");
  } else {
    document.querySelector(`[for='banana']`).classList.remove("border");
    document.querySelector(`[for='banana']`).classList.remove("border-primary");
    document.querySelector(`[for='banana']`).classList.remove("bg-babyPrimary");
  }

  if (grape.checked == true) {
    document.querySelector(`[for='grape']`).classList.add("border");
    document.querySelector(`[for='grape']`).classList.add("border-primary");
    document.querySelector(`[for='grape']`).classList.add("bg-babyPrimary");
  } else {
    document.querySelector(`[for='grape']`).classList.remove("border");
    document.querySelector(`[for='grape']`).classList.remove("border-primary");
    document.querySelector(`[for='grape']`).classList.remove("bg-babyPrimary");
  }

  if (threeAnimals.checked == true) {
    document.querySelector(`[for='threeAnimals']`).classList.add("border");
    document.querySelector(`[for='threeAnimals']`).classList.add("border-primary");
    document.querySelector(`[for='threeAnimals']`).classList.add("bg-babyPrimary");
  } else {
    document.querySelector(`[for='threeAnimals']`).classList.remove("border");
    document.querySelector(`[for='threeAnimals']`).classList.remove("border-primary");
    document.querySelector(`[for='threeAnimals']`).classList.remove("bg-babyPrimary");
  }

  if (flower.checked == true) {
    document.querySelector(`[for='flower']`).classList.add("border");
    document.querySelector(`[for='flower']`).classList.add("border-primary");
    document.querySelector(`[for='flower']`).classList.add("bg-babyPrimary");
  } else {
    document.querySelector(`[for='flower']`).classList.remove("border");
    document.querySelector(`[for='flower']`).classList.remove("border-primary");
    document.querySelector(`[for='flower']`).classList.remove("bg-babyPrimary");
  }

}
// 監聽點選下一步事件
var btnStepTwo = document.getElementById('stepTwo');
var count = 0; // 計算被點選的祭品數目
if (btnStepTwo) {
  btnStepTwo.addEventListener('click', getStepTwo, false);
  function getStepTwo(e) {
    e.preventDefault();
    // 判斷是否為空值
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
      alert('請選擇祭品');
      return;
    }
    document.location.href = "./worship.html";
  }
}


// 步驟三
var checkbox_apple = localStorage.getItem('checkbox_apple');
var checkbox_orange = localStorage.getItem('checkbox_orange');
var checkbox_banana = localStorage.getItem('checkbox_banana');
var checkbox_grape = localStorage.getItem('checkbox_grape');
var checkbox_threeAnimals = localStorage.getItem('checkbox_threeAnimals');
var checkbox_flower = localStorage.getItem('checkbox_flower');
// 判斷是否開啟圖片
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
}
// 監聽點選下一步事件
var btnStepThree = document.getElementById('stepThree');
if (btnStepThree) {
  btnStepThree.addEventListener('click', getStepThree, false);
  function getStepThree(e) {
    e.preventDefault();
    document.location.href = "./worshipShuwen.html";
  }
}


// 步驟四
var info = localStorage.getItem('worshipUserInfo');
if (info && document.getElementById("userInfo_name") && document.getElementById("userInfo_companyName") && document.getElementById("userInfo_address")) {
  document.getElementById("userInfo_name").textContent = JSON.parse(info).name;
  document.getElementById("userInfo_companyName").textContent = JSON.parse(info).companyName;
  document.getElementById("userInfo_address").textContent = JSON.parse(info).address;
}
// 監聽點選下一步事件
var btnStepFour = document.getElementById('stepFour');
if (btnStepFour) {
  btnStepFour.addEventListener('click', getStepFour, false);
  function getStepFour(e) {
    e.preventDefault();
    document.location.href = "./worshipBurn.html";
  }
}


// 步驟五
// 監聽點選下一步事件
var btnStepFive = document.getElementById('stepFive');
if (btnStepFive) {
  btnStepFive.addEventListener('click', getStepFive, false);
  function getStepFive(e) {
    e.preventDefault();
    // 清空 localStorage
    localStorage.clear();
    document.location.href = "./worshipCarryOut.html";
  }

}

// 下拉選單修正
$(".navbar-nav .nav-item").hover(function () {
  $(this).toggleClass("show");
  $(this).find(".dropdown-menu").toggleClass("show");
})

//寺廟資訊
$.ajax({
  url: "../assets/file/templeInfo.json",
  type: "GET",
  dataType: "json",
  success: function (data) {

    const districtSelect = document.getElementById('districtSelect');
    const templeTable = document.getElementById('templeTable');
    const templeData = data;
    let cacheDistrict = [];
    let option = '';
   

    if (districtSelect) {
      templeData.forEach(item => {
        cacheDistrict.push(item.district);
      })

    
      //篩選相同的地區
      const templeDistrict = cacheDistrict.filter((item, index, arr) => {
        return arr.indexOf(item) === index;
      });
  
      //把地區資料塞進 select
      templeDistrict.forEach(item => {
        option += `<option value="${item}">${item}</option>`;
      })
      districtSelect.innerHTML = `<option selected disabled>請選擇行政區</option>${option}`;
    



      const changeInfo = () => {
        let tableData = '';
        let selected = districtSelect.value;

        templeData.forEach(item => {
          //把資料塞進 table
          if (selected === item.district) {
            tableData += `<tr>
        <th scope="row">${item.id}</th>
        <td>${item.name}</td>
        <td>${item.district}</td>
        <td>${item.address}</td>
        <td>${item.religion}</td>
        <td>${item.facility}</td>
      </tr>`
          }
        });

        //將資料染到 table 上
        templeTable.innerHTML = tableData;
      }
      districtSelect.addEventListener('change', changeInfo, false);
    }
  }
})

