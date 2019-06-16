var is_16_9=1;
var orientation=null;
$(function () {

    'use strict';
    var console = window.console || { log: function () {} },
        $alert = $('.docs-alert'),
        $message = $alert.find('.message'),
        showMessage = function (message, type) {
            $message.text(message);

            if (type) {
                $message.addClass(type);
            }

            $alert.fadeIn();

            setTimeout(function () {
                $alert.fadeOut();
            }, 3000);
        };

    var window_width=$(window).width();
    var middle_width=window_width/2-22;
    var cartoon_height=$('#cartoon').height();

    function my_graduate_setTimeout_removeClass(index,time_delay,type){
        setTimeout(function(){
            if(type==0) {$('#graduate'+index).removeClass('hidden');}
            else if(type==1) {$('#graduate_new_'+index).removeClass('hidden');}
        },time_delay);
    }

    function my_graduate_setTimeout_move(index,time_delay,left_position,top_position,type){
        setTimeout(function(){
            if(type==0) {$('#graduate'+index).animate({left:left_position+'px',top:top_position+'px'},250)}
            else if(type==1) {$('#graduate_new_'+index).animate({left:left_position+'px',top:top_position+'px'},250)}
        },time_delay);
    }

    function cartoon_sysu_graduate(){
        $('#sysu1').show().animate({left:'4%'},1500);
        $('#sysu2').show().animate({top:'40%'},1500);
        $('#sysu3').show().animate({top:'40%'},1500);
        $('#sysu4').show().animate({right:'4%'},1500);
        setTimeout(function(){
            $('#sysu1').hide();
            $('#sysu2').hide();
            $('#sysu3').hide();
            $('#sysu4').hide();
        },2000);
        /*
        setTimeout(function(){
            $('.graduate').fadeIn(1500,function(){
                $('.graduate').fadeOut(1500,function(){
                    $('#cartoon').hide();
                    $('#main').css('visibility','visible');
                    $('body').css('background-image','url("./picture/background.jpg")')
                })
            })
        },2500);*/
        var left_position=[window_width*2/100,window_width*10/100,window_width*20/100,window_width*30/100,middle_width,window_width*70/100-44,window_width*80/100-44,window_width*90/100-44,window_width*98/100-44];
        var top_position=[cartoon_height*55/100,cartoon_height*48/100,cartoon_height*44/100,cartoon_height*41/100,cartoon_height*39/100,cartoon_height*41/100,cartoon_height*44/100,cartoon_height*48/100,cartoon_height*55/100];
        var left_position_new=[window_width*20/100,window_width*30/100,middle_width,window_width*70/100-44,window_width*80/100-44,window_width*90/100-44];
        var top_position_new=[cartoon_height*30/100,cartoon_height*27/100,cartoon_height*25/100,cartoon_height*27/100,cartoon_height*30/100,cartoon_height*34/100];
        var array_length=9;
        setTimeout(function(){
                var i,j,time_delay,item_get;
                for(i=6;i>=1;i--)
                {
                    time_delay=250*(7-i);
                    my_graduate_setTimeout_removeClass(i,time_delay,1);
                    for(j=6;j>=i;j--)
                    {
                        my_graduate_setTimeout_move(j,time_delay,left_position_new[j-i],top_position_new[j-i],1);
                    }
                }
                for(i=3;i<=11;i++)
                {
                    time_delay=250*(i-2);
                    my_graduate_setTimeout_removeClass(i,time_delay,0);
                    for(j=3;j<=i;j++)
                    {
                        my_graduate_setTimeout_move(j,time_delay,left_position[array_length-1-i+j],top_position[array_length-1-i+j],0);
                    }
                }
                setTimeout(function(){
                   for(i=3;i<=11;i++){
                       $('#graduate'+i).addClass('graduate'+i);
                   }
                   for(i=1;i<=6;i++){
                       $('#graduate_new_'+i).addClass('graduate_new_'+i);
                   }
                },2500);
                setTimeout(function(){
                    $('.graduate').animate({top:'120%'},1000);
                    $('.graduate').fadeOut(1200,function(){
                        $('#cartoon').hide();
                        $('#main').removeClass('hidden');
                        $('body').css('background-image','url("./picture/background.jpg")');
                    });
                },3700);

        },3000);
        
    }

    //cartoon
    
    $('#year1').fadeIn(500,function(){
        $('#year2').fadeIn(500,function(){
            $('#year3').fadeIn(500,function(){
                $('#year4').fadeIn(500,function(){
                    $('#year1').fadeOut(500);
                    $('#year2').fadeOut(500);
                    $('#year3').fadeOut(500);
                    $('#year4').fadeOut(500);
                    setTimeout(cartoon_sysu_graduate(),1000)
                });
            })
        });
    })
    

    //$('#cartoon').hide();
    //$('#main').css('visibility','visible');
    //$('body').css('background-image','url("./picture/background.jpg")')
    /*
    $('.graduate').removeClass('hidden');
    for(var i=3;i<=11;i++){
        $('#graduate'+i).addClass('graduate'+i).removeClass('graduate_class2');
    }
    */

  // Demo
  // -------------------------------------------------------------------------

    function abc(img) {
        var newImg = new Image;
        return newImg.crossOrigin = "*",
        newImg.src = img, 
       newImg
    }

    (function () {
        var $image = $('.img-container > img'),
            $dataX = $('#dataX'),
            $dataY = $('#dataY'),
            $dataHeight = $('#dataHeight'),
            $dataWidth = $('#dataWidth'),
            $dataRotate = $('#dataRotate'),
            options = {
                // strict: false,
                // responsive: false,
                // checkImageOrigin: false

                // modal: false,
                guides: false,
                // highlight: false,
                // background: false,

                // autoCrop: false,
                // autoCropArea: 0.5,
                // dragCrop: false,
                movable: false,
                resizable: false,
                // rotatable: false,
                // zoomable: false,
                // touchDragZoom: false,
                // mouseWheelZoom: false,

                // minCanvasWidth: 320,
                // minCanvasHeight: 180,
                // minCropBoxWidth: 160,
                // minCropBoxHeight: 90,
                // minContainerWidth: 320,
                // minContainerHeight: 180,

                // build: null,
                // built: null,
                // dragstart: null,
                // dragmove: null,
                // dragend: null,
                // zoomin: null,
                // zoomout: null,
                viewMode : 1,
                aspectRatio: 16/9,
                preview: '.img-preview',
                dragMode: 'none',
                crop: function (data) {
                    $dataX.val(Math.round(data.x));
                    $dataY.val(Math.round(data.y));
                    $dataHeight.val(Math.round(data.height));
                    $dataWidth.val(Math.round(data.width));
                   $dataRotate.val(Math.round(data.rotate));
                }
            };

        $image.on({
            'build.cropper': function (e) {
                console.log(e.type);
            },
            'built.cropper': function (e) {
                console.log(e.type);
            },
            'dragstart.cropper': function (e) {
                console.log(e.type, e.dragType);
            },
            'dragmove.cropper': function (e) {
                console.log(e.type, e.dragType);
           },
            'dragend.cropper': function (e) {
                console.log(e.type, e.dragType);
           },
            'zoomin.cropper': function (e) {
                console.log(e.type);
           },
            'zoomout.cropper': function (e) {
                console.log(e.type);
            }
        }).cropper(options);

        var mystyle = abc("./picture/pic1.png");

        $("#pic1").on("click", function() {
            var totalpath = "./picture/pic1.png";
            mystyle = abc(totalpath);
            mystyle.onload = function() {
                $("#avatarPreview").attr("src", mystyle.src);
                document.getElementById("operating").scrollIntoView();
            };
        });

        $("#pic2").on("click", function() {
            var totalpath = "./picture/pic2.png";
            mystyle = abc(totalpath);
            mystyle.onload = function() {
                $("#avatarPreview").attr("src", mystyle.src);
                document.getElementById("operating").scrollIntoView();
            };
        });

        $("#pic3").on("click", function() {
            var totalpath = "./picture/pic3.png";
            mystyle = abc(totalpath);
            mystyle.onload = function() {
                $("#avatarPreview").attr("src", mystyle.src);
                document.getElementById("operating").scrollIntoView();
            };
        });

        $("#pic4").on("click", function() {
            var totalpath = "./picture/pic4.png";
            mystyle = abc(totalpath);
            mystyle.onload = function() {
                $("#avatarPreview").attr("src", mystyle.src);
                document.getElementById("operating").scrollIntoView();
            };
        });

        $("#pic5").on("click", function() {
            var totalpath = "./picture/pic5.png";
            mystyle = abc(totalpath);
            mystyle.onload = function() {
                $("#avatarPreview").attr("src", mystyle.src);
                document.getElementById("operating").scrollIntoView();
            };
        });

        $("#pic6").on("click", function() {
            var totalpath = "./picture/pic6.png";
            mystyle = abc(totalpath);
            mystyle.onload = function() {
                $("#avatarPreview").attr("src", mystyle.src);
                document.getElementById("operating").scrollIntoView();
            };
        });

        $('#width_height_button1').on('click',function(){
            $('#choose_width_height').addClass('hidden');
            $('#inputimg_tip').removeClass('hidden');
        });

        $('#width_height_button2').on('click',function(){
            $('#choose_width_height').addClass('hidden');
            $('#inputimg_tip').removeClass('hidden');
            $('#image').cropper('setAspectRatio',9/16);
            $('#avatarPreview').css('width',112.5+'px').css('height',200+'px');
            $('.img-preview').addClass('hidden');
            $('.img-preview-new').removeClass('hidden');
            is_16_9=0;
        });


        $("#reset").on("click", function () {
            $('#image').cropper('reset');
        });


        $("#generate").on("click", function() {
            if (!$(this).hasClass("disabled")) {
                $("#outputImage").attr("src", null);
                const e = 640;
                var t = $image.cropper('getData');
                var a = t.width;
                var n = t.x;
                var i = t.y;
                var o = e / a;
                if(is_16_9) {o=o*16/9;}
                var l = $image.cropper('getImageData');
                var c = l.naturalHeight;
                var d = l.naturalWidth;
                var m = document.getElementById("myCanvas");
                //m.width = e;
                //m.height = e;
                if(is_16_9) {m.width=e*16/9;m.height=e;}
                else        {m.width=e;m.height=e*16/9;}
                var u = m.getContext("2d");
                u.fillStyle = "#fff";
                //u.fillRect(0, 0, e, e);
                if(is_16_9) {u.fillRect(0,0,e*16/9,e);}
                else        {u.fillRect(0,0,e,e*16/9);}
                var g = document.getElementById("image");
                g.crossOrigin = "*";
                if(is_16_9){u.drawImage(mystyle,0,0,e*16/9,e);}
                else{u.drawImage(mystyle,0,0,e,e*16/9);}
                if(orientation==6){
                    u.save();
                    u.translate(m.width/2,m.height/2);
                    u.rotate(90*Math.PI/180);
                    u.drawImage(g,-m.height/2-i*o,-m.width/2-n*o,c*o,d*o);
                    u.restore();
                    alert('right');
                }
                else{
                    u.drawImage(g, -n * o, -i * o, d * o, c * o);
                    alert('false');
                }
                //u.drawImage(g, -n * o, -i * o, d * o, c * o);
                //u.drawImage(mystyle, 0, 0, e, e);
                var v = document.getElementById("outputImage");
                v.src = m.toDataURL("");
            }                
            $(".generating").removeClass("hidden"), 
            document.getElementById("generatingImg").scrollIntoView();
        });


        var $inputImage = $('#inputImage'),
            URL = window.URL || window.webkitURL,
            blobURL;

        if (URL) {
            $inputImage.change(function () {
                var files = this.files,
                file;

                if (files && files.length) {
                    file = files[0];
                    if (/^image\/\w+$/.test(file.type)) {
                        blobURL = URL.createObjectURL(file);
                        $("#image").attr('src' , blobURL);
                        $image.one('built.cropper', function () {
                            URL.revokeObjectURL(blobURL); // Revoke when load complete
                        }).cropper('reset', true).cropper('replace', blobURL);
                        $inputImage.val('');
                        $(".operate").removeClass("hidden"),
                        document.getElementById("choose").scrollIntoView()
                        EXIF.getData(file,function(){
                            EXIF.getAllTags(this);
                            orientation=EXIF.getTag(this,'Orientation');
                            alert(orientation);
                            alert(type(orientation));
                        });
                    } else {
                        showMessage('请选择图片！');
                    }
                }
            });
        } else {
            $inputImage.parent().remove();
        };


    }());
    

});
