var backgroundImg,backgroundImg2;
var ram,ramImg;
var button1,button2;
var m2,mo1Img;
var fire1;
var fire1Img;
var m1,m1Img;
var fire,fireImg;
var ground;
var forest,forestImg;



function preload()
{
backgroundImg=loadImage("images/dhanush/paths.jpg");
ramImg=loadImage("images/dhanush/rama.png");
backgroundImg2=loadImage("images/dhanush/forest1.jpg");
forestImg=loadImage("images/dhanush/forest1.jpg");
}

function setup()
{
    createCanvas(displayWidth-30,displayHeight-100);
    forest=createSprite(500,300,displayWidth+300,displayHeight)
    ram=createSprite(displayWidth-1000/2,600,20,20);
    ground=createSprite(displayWidth-1000/2,600,700,20);
    ground.visible=false;
    forest.y=forest.height/2;
    


    ram.addImage(ramImg);
    forest.addImage(forestImg)
    forest.scale=0.65
    forest.velocityY=-2
    backgroundImg2.scale=8;
    ram.scale=0.2;
   
 button1=createButton('left');
 button1.position((displayWidth/4)+30,(displayHeight/2)-40,150,150);
 button2=createButton('right');
button2.position((displayWidth/2)+200,(displayHeight-180/2)-40,150,150);
}

function draw()
{
    background(backgroundImg2);
    //backgroundImg2.velocityY=2;
    ram.collide(ground);
    
if(forest.y<+100)
    {
        forest.y = forest.height/2;
}
    if(keyDown("space"))
    
    {
        // background(backgroundImg2);
        image(backgroundImg2,displayWidth,displayHeight,800,800);
       
        m1Img=loadImage("images/dhanush/m1.png");
        m1=createSprite(displayWidth-3000/3,displayHeight-180,50,50);
        m1.addImage(m1Img);
        m1.scale=0.8;
        var fire;
        var fireImg;
        fireImg=loadImage("images/dhanush/lazer.png");
  fire=createSprite(displayWidth-1500/2,displayHeight-180,50,50);
fire.addImage(fireImg);
fire.scale=0.5


mo1Img=loadImage("images/dhanush/m2.png");
m2=createSprite(displayWidth-1000/3,displayHeight-250,50,50);
m2.addImage(mo1Img);
m2.scale=0.8;
var fire1;
var fireImg2;
fireImg2=loadImage("images/dhanush/laser2.png");
fire1=createSprite(displayWidth-1000/2,displayHeight-400,50,50);
fire1.addImage(fireImg2);
fire1.scale=0.5


   }
   
  if(keyDown(UP_ARROW))
{
    ram.velocityY = -12 ;
    
}
ram.velocityY = ram.velocityY + 0.8;


    //button1.mousePressed(()=>{

 


    drawSprites();
}


