// 클래스 탈부착 방식으로 창을 띄워주고 없애고를 반복.
$("#login").on("click", function () {
  $(".black-bg").addClass("show-modal");
});
$("#close").on("click", function () {
  $(".black-bg").removeClass("show-modal");
});

// one-way 애니메이션 만드는 법
// 1. 시작 스타일 만들어 놓기
// 2. 최종 스타일 만들어 놓기(class로 만들어 놓으면 됨)
// 3. 자바스크립트로 조작해서 원할 때 변하게 하기
// 4. transition 추가해주기

$(".btn-primary").click(function (e) {
  let accountVal = $("#account").val();
  let pswVal = $("#psw").val();

  if (accountVal == "" && pswVal == "") {
    alert("아이디와 비밀번호를 입력하세요.");
    e.preventDefault();
  } else if (!/\S+@\S+.\S+/.test(accountVal)) {
    alert("올바른 이메일 형식을 입력하세요.");
    e.preventDefault();
  } else if (pswVal.length < 8) {
    alert("비밀번호는 8자리 이상이어야 합니다.");
    e.preventDefault();
  } else if (!/[A-Z]/.test(pswVal)) {
    alert("비밀번호에 대문자가 없습니다.");
    e.preventDefault();
  }
});

let second = $(".sec").html();

setInterval(function () {
  second -= 1;
  if (second != 0) {
    $(".sec").html(`${second}`);
  } else {
    $(".alert").hide();
  }
}, 1000);
// 이벤트 버블링 : 모달창에서 '닫기' 버튼이 아니라 바깥쪽 검은 배경을 클릭하면 모달창 닫기
$(".black-bg").click(function (e) {
  $(e.target).removeClass("show-modal");
});
// e.target을 활용하지 않으면 이벤트 버블링 현상으로 인하여 white-bg를 클릭해도 창이 닫히는 버그가 발생한다.
// 그래서 e.target을 활용하여 버그를 고쳐주었다.
