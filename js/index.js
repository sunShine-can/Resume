/**
 * Created by zc on 2016/11/10.
 */

$(function () {

    var sections = $('.section');
    //背景颜色的随机
    sections.each(function (i, element) {
        $(this).css('background', 'rgba(' + random() + ',' + random() + ',' + random() + ',0.5)');
    });
    //随机数的生成
    function random() {
        return parseInt(Math.random() * 255);
    }

    // 工作经历中的小球随机乱弹
    function ball(){
        var can = document.getElementById('can');
        var obj = can.getContext('2d');

        function random(num){
            return Math.floor(Math.random()*num);
        }

        //声明一个构造函数
        function Ball() {
            //定义半径
            this.r = random(20) + 1;
            //初始化x，y坐标
            this.x = this.y = this.r;
            //初始化随机颜色
            this.color = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
            //初始化运动速度
            this.speedX = random(10)+1;
            this.speedY = random(10)+1;
            //初始化画布宽高
            this.width = can.width;
            this.height = can.height;
        }

        //向原型中添加方法
        Ball.prototype = {

            play:function(){

                //7.1 XY坐标每次递增
                this.x+=this.speedX;
                this.y+=this.speedY;

                //7.1.1判断X Y坐标最大值 最小值

                if(this.x>this.width-this.r){

                    this.speedX = -this.speedX;
                }
                else if(this.y>this.height-this.r){

                    this.speedY = - this.speedY;
                }

                if(this.x<this.r){

                    this.speedX = Math.abs(this.speedX);

                }else if(this.y<this.r){

                    this.speedY = Math.abs(this.speedY);
                }


                //7.2开启新的路径
                obj.beginPath();

                //7.3设置 颜色
                obj.fillStyle = this.color;

                //7.4球绘制
                obj.arc(this.x,this.y,this.r,0,2*Math.PI);

                obj.fill();

            }
        };

        //8.循环创建50个球对象

        var balls = [];

        for(var i = 0; i<10;i++){

            //9.实例化一个球存入数组
            balls.push(new Ball());

        }

        setInterval(function(){

            //定时器每次画个新的，画之前清除之前的
            obj.clearRect(0,0,200,250);

            for(var i = 0; i<balls.length;i++){

                //每次循环执行球的play进行重绘
                balls[i].play();

            }
        },30);

    }
    ball();
    

    var yxh = $('.myWorks .yxh');
    var love11 = $('.myWorks .love11');
    yxh.click(function(){
        
        $('.myWorks ul').css({
            'margin-top': 20,
            'transition': 'all 0.4s'
        });
        $('.myWorks .love11dec').css('display','none');
        $('.myWorks .yxhdec').fadeToggle(500);
    });
    love11.click(function(){
        
        $('.myWorks ul').css({
            'margin-top': 20,
            'transition': 'all 0.4s'
        });
        $('.myWorks .yxhdec').css('display','none');
        $('.myWorks .love11dec').fadeToggle(500);
    });

    $('.container').fullpage({
        scrollingSpeed: 400,
        css3: true,
        resize: true,
        afterLoad: function (link, index) {
            if (index == 1) {
                $('.section:eq(0) .box').addClass('down');
                $('.section:eq(0) .p1').addClass('right');
                $('.section:eq(0) .dec .p2').animate({width: 600}, 1000);
                $('.section:eq(0) .p3').addClass('right');
                $('.section:eq(0) .p4').addClass('left');
                $('.section:eq(0) .p5').addClass('right');
                $('.section:eq(0) .p6').addClass('left');
            }
            if (index == 2) {
                $('.section:eq(1) .aboutme .p1').addClass('down');
                $('.section:eq(1) .aboutme .p2').animate({width: 200}, 1000);
                $('.section:eq(1) .aboutme .dec .p4').addClass('right');
                $('.section:eq(1) .aboutme .dec .p3').addClass('left');
            }
            if(index==3){
                $('.section:eq(2) .skill .p1').addClass('down');
                $('.section:eq(2) .skill .p2').animate({width: 200}, 1000);

                $('.section:eq(2) .skill_con img').addClass('up');
                //切换
                $('.section:eq(2) .skill_con .html').click(function () {
                    $('.deca').fadeToggle(1000);
                });
                $('.section:eq(2) .skill_con .css').click(function () {
                    $('.decb').fadeToggle(1000);
                });
                $('.section:eq(2) .skill_con .js').click(function () {
                    $('.decc').toggle(1000);
                });
                $('.section:eq(2) .skill_con .else').click(function () {
                    $('.decd').toggle(1000);
                });
            }
            if(index==4){
                $('.section:eq(3) .history .p1').addClass('down');
                $('.section:eq(3) .history .p2').animate({width: 200}, 1000);
                $('.section:eq(3) .history_con').addClass('up');

            }
            if(index==5){
                $('.section:eq(4) .history .p1').addClass('down');
                $('.section:eq(4) .history .p2').animate({width: 200}, 1000);
                $('.section:eq(4) .myWorks .li1').addClass('left');
                $('.section:eq(4) .myWorks .li2').addClass('down');

                $('.section:eq(4) .myWorks .li3').addClass('up');
                $('.section:eq(4) .myWorks .li5').addClass('right');


            }
            if(index==6){
                $('.section:eq(5) .history .p1').addClass('down');
                $('.section:eq(5) .history .p2').animate({width: 200}, 1000);

                $('.section:eq(5) .callme .p1').addClass('up');
                $('.section:eq(5) .callme .p2').addClass('up');
                $('.section:eq(5) .callme .p3').addClass('up');
                $('.section:eq(5) .callme .p4').addClass('up');
                $('.section:eq(5) .callme .p5').addClass('up');

            }
        },
        onLeave: function (link, index, next) {


        }

    });

});
