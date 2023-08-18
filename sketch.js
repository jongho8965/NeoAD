function setup() {
  createCanvas(displayWidth, displayHeight);
  }


function draw() {
  
  //AD변수
  let AD = random(0,0)
  
  background(random(0,255),random(0,255),random(0,255));
  fill(2,245)
  strokeWeight(0.7)
  fill(255,255,255)
  rect(2,2,displayWidth - 4, displayHeight - 4)
  strokeWeight(1.5)
//------------------------------------------------------
  fill(0,0,0)
  push()
  textSize (40)
  textStyle(BOLD)
  text("Most-Simple-Ad",10,45)
  textSize(9.5)
  text("rp.of_JHJH ©",15,55)
  textSize(12)
  //text("Ver-2.1.3",40,73.5)
  pop()
  textSize (20)
  text("광고등록 방법",10,100)
  textSize(15)
  text("디스코드 neoguri0311 또는 jongho8965@kakao.com 으로 문의해주세요.",10,120)
  text("사이트에 접속하면 랜덤한 사이트를 팝업해서 보여줍니다.",7,138)
  text("가격 : 영구 1000원 (컬쳐랜드로만 결제)",7,155)
 //===================================================================
  if (AD == 1) {
    //AD == 1 일때 광고
    window.open("[링크]","_blank");
  }
 //===================================================================
}

//<iframe width="[ 가로 ]" height="[ 세로 ]" src="[ 링크 ]" frameborder="0"></iframe>
//index.html 마지막에 써두기 
