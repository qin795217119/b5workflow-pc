//鼠标按住滑动显示选择框
function mouseRect(parent){
    var _this = this;
    this.parent = parent
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
    this.dragging = false;
    this.target = "mouse_box";
    $("."+parent).on("mousedown",function (e){
        _this.mouseDown(e)
    });
    $("."+parent).on("mousemove",function (e){
        _this.mouseMove(e)
    });
    $("."+parent).on("mouseup",function (e){
        _this.mouseUp(e)
    });
}
mouseRect.prototype = {
    constructor:this,
    mouseDown:function (e){
        // startX, startY 为鼠标点击时初始坐标
        this.startX = e.offsetX;
        this.startY = e.offsetY;
        if($(e.currentTarget).hasClass(this.parent)){
            //删除已经存在的
            $("."+this.target).remove();
            // 是否拖动
            this.dragging =  true ;
            // 在页面创建 box
            var mouse_box = document.createElement( "div" );
            mouse_box.className =  this.target;
            mouse_box.style.top = this.startY +  'px' ;
            mouse_box.style.left = this.startX +  'px' ;
            $("."+this.parent).append(mouse_box);
        }
    },
    mouseMove:function (e){
        this.endX = e.offsetX
        this.endY = e.offsetY
        if(!this.dragging) return false;
        $("."+this.target).css({
            width:( this.endX-this.startX)+'px',
            height:(this.endY-this.startY)+'px',
        })
    },
    mouseUp:function (){
        this.dragging = false;
        $("."+this.target).remove();
        if(this.startX === this.endX && this.startY === this.endY){
            $("."+this.parent).click();//解决mousedown覆盖click事件
        }
    }
}