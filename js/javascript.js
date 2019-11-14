$(document).ready(function () {

  $("form[name='dnhap']").validate({
    rules : {
      tendangnhap: {
        required : true,
      },
      password : {
        required : true,
        minlength: "8"
      }
    },
    messages : {
      tendangnhap: {
        required : "Tên đăng nhập không được để trống!",
      },
      password : {
        required : "Mật khẩu không được để trống!!",
        minlength: "Mật khẩu có ít nhất 8 kí tự"
      }
    },
    submitHandler : function(form) {
      var mnw = window.open("","KetQua");
      mnw.document.write("==========================================================================<br>");
      mnw.document.write("Tên đăng nhập: " + $("#tendangnhap").val() + "<br>");
      mnw.document.write("Mật khẩu: " + $("#password").val() + "<br>");
      window.open("../../index.html","_self");
      // form.submit();
    },
    wrapper : 'span',
    errorPlacement: function (error, element) {
        error.insertAfter(element);
    }
  });

  $("form[name='dki']").validate({
    rules:{
      tendangki: "required",
      email: {
        email:true,
        required:true
      },
      ngay: {
        min: 1,
        max: 31,
        required:true,
        digits: true
      },
      nam: {
        required:true,
        digits: true
      },
      pass: {
        required:true,
        minlength: 8
      },
      repass: {
        equalTo: "#pa",
        required:true
      },
      dieukhoan: "required"
    },
    messages:{
      tendangki: "Tên đăng kí không được để trống!",
      email: "Email phải có dạng abc@email.com",
      ngay: {
        min: "Ngày sinh phải nằm trong khảong 1 - 31 !",
        max: "Ngày sinh phải nằm trong khảong 1 - 31 !",
        required:"Ngày sinh không được để trống!",
        digits: "Ngày phải là một số!"
      },
      nam: {
        required:"Năm sinh không được để trống",
        digits: "Năm phải là một số!"
      },
      pass: {
        required:"Mật khẩu không để trống!",
        minlength: "Mật khẩu có ít nhất 8 kí tự"
      },
      repass: {
        equalTo: "Mật khẩu không trùng khớp!",
        required:"Mật khẩu không để trống!"
      },
      dieukhoan: "Vui lòng click để chấp nhận điều khoản!"
    },
    submitHandler : function(form) {
      var mnw = window.open("","KetQua");
      mnw.document.write("==========================================================================<br>");
      mnw.document.write("Tên đăng kí: " + $("#tendangki").val() + "<br>");
      mnw.document.write("Mật khẩu: " + $("#pa").val() + "<br>");
      mnw.document.write("Ngày sinh: " + $("#ngay").val() + "/" + $("#chonthang").val() + "/" + $("#nam").val() + "<br>");
      mnw.document.write("Email: " + $("#email").val() + "<br>");
      mnw.document.write("Phái: " + $("input[type=radio]:checked").val() + "<br>");
      window.open("../../index.html","_self");
    },
    // wrapper : 'span',
    errorPlacement: function (error, element) {
        error.insertAfter(element);
    }
  });

});


var slideIndex = 1;
// var slides = document.getElementsByClassName("imggg");
// for (var i = 0; i < slides.length; i++) {
//   slides[i].style.display = "none";
// }

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imggg");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function nextslide () {
  slideIndex++;
  showSlides(slideIndex);
}
// NUT SEARCH
function Nutsearch() {
  var x = document.getElementsByClassName("subsub");
  if (x[0].style.display == "none") {
    x[0].style.display = "block";
  } else {
    x[0].style.display = "none";
  }
}
//tab
function opentab(evt, tabname, tablinks, tabcontent) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(tabcontent);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName(tablinks);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";


  // var nuttab = document.getElementsByClassName(tablinks);
  for(var i in tablinks) {
    var cdtab = 100 / tablinks.length;
    var cdtabstring = cdtab +'%';
    tablinks[i].style.width = cdtabstring;
    // alert(tablinks.length);
  }

}

function themthongtinngsi() {
  var more = document.getElementById("hiddeninfo");
  var morex = document.getElementById("themthongtin");
  if (more.style.display == "none") {
    more.style.display = "block";
    morex.value = morex.value.replace("Xem thêm", "Ẩn bớt");
  } else {
    more.style.display = "none";
    morex.value = morex.value.replace("Ẩn bớt", "Xem thêm")
  }
}

// Phâtlbum

var tenbh = document.getElementsByClassName("albumdanhsach0");
var tencs = document.getElementsByClassName("albumcasi");
function Playnhac(i) {
  // nhac.src = nhacs[i];
  // nhac.play();
  document.getElementById("tenbaihat").innerHTML = tenbh[i].innerHTML;
  document.getElementById("tencasi").innerHTML = tencs[i].innerHTML;
  document.getElementById("audioaudio").src = nhacs[i];
  document.getElementById("audioaudio").autoplay = "autoplay";
  document.getElementById("stt").innerHTML = i + 1;
}

function prev() {
  var stt = document.getElementById("stt").innerHTML;
  document.getElementById("tenbaihat").innerHTML = tenbh[stt - 2].innerHTML;
  document.getElementById("tencasi").innerHTML = tencs[stt - 2].innerHTML;
  document.getElementById("audioaudio").src = nhacs[stt - 2];
  document.getElementById("audioaudio").autoplay = "autoplay";
  document.getElementById("stt").innerHTML = stt - 1;
}

function next() {
  var stt = document.getElementById("stt").innerHTML;
  document.getElementById("tenbaihat").innerHTML = tenbh[stt].innerHTML;
  document.getElementById("tencasi").innerHTML = tencs[stt].innerHTML;
  document.getElementById("audioaudio").src = nhacs[stt];
  document.getElementById("audioaudio").autoplay = "autoplay";
  document.getElementById("stt").innerHTML = parseInt(stt) + 1;
}

document.getElementById("defaultplay").click();
document.getElementById("audioaudio").pause();