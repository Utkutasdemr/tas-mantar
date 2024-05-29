function olay(){
    alert("ÜRETİCİDEN TÜKECİYE LEZZET")
}

document.querySelector("h3").addEventListener("click",olay);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

function changeText(id) {
    id.innerHTML = "GÖRÜŞMEK ÜZERE";
}

function mOver(obj) {
    obj.innerHTML = "Teşekkürler"
  }
  
  function mOut(obj) {
    obj.innerHTML = "İmleci Buraya Getir!"
  }


  
