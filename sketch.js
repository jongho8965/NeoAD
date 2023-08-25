//https://forms.gle/ahJY1FnLVUXyo1C67

function setup() {
  createCanvas(windowWidth, windowHeight);
  }

let j = true

function draw() {
  
  //AD변수
  let AD = floor(random(1,4))
  
  background(random(0,255),random(0,255),random(0,255));
  fill(2,245)
  strokeWeight(0.7)
  fill(255,255,255)
  rect(2,2,windowWidth - 4, windowHeight - 4)
  strokeWeight(1.5)
//------------------------------------------------------
  fill(0,0,0)
  push()
  textSize (40)
  textStyle(BOLD)
  text("Most-Simple-Ad | NeoAD",10,45)
  textSize(9.5)
  text("rp.of_JHJH ©",15,55)
  pop()
  
  push();
  strokeWeight(10);
  pop();
  
  if(mouseX > 150 && mouseX < 250 
     && mouseY > 100 && mouseY < 150) 
  {
    fill(200, 200, 200)
  }
  else{
    fill(255, 255, 255)
  }
  
  rect(150,100,100,50);
  
  push()
  textStyle(BOLD)
  textSize(15)
  fill(22)
  text("광고문의 버튼",153,130)
  pop()
 //===================================================================
  //https://open.kakao.com/o/gTAuCcnf
  if (j == true) {
        if (AD == 1) {
        //AD == 1 일때 광고
        window.open("https://open.kakao.com/o/gTAuCcnf","_blank");
        j = false
    }
    if (AD == 2) {
      window.open("https://mine.page/server/rmz.kr","_blank");
      j = false
    }
    if (AD == 3) {
      window.open("https://forms.gle/ahJY1FnLVUXyo1C67","_blank");
      j = false
    }
 //===================================================================
  }
}
//<iframe width="[ 가로 ]" height="[ 세로 ]" src="[ 링크 ]" frameborder="0"></iframe>
//index.html 마지막에 써두기 
//https://open.kakao.com/o/gIBVJeCf
function mousePressed()
{
  if(mouseX > 150 && mouseX < 250 && mouseY > 100 &&   mouseY < 150) {
      window.open("https://open.kakao.com/o/gIBVJeCf","_blank");
  }
}
