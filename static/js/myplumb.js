;(function(){
    //初始位置
    var drop_left = parseInt($(".b5bpm-main").offset().left) + 1;
    var drop_top = parseInt($(".b5bpm-main").offset().top);
    var app = new Vue({
        el: "#app",
        data: {
            title:"请假流程审批",
            test:{
                p1:{
                    nodeList:[
                        {
                            "type": "start",
                            "title": "开始",
                            "id": "1648882828278f3q_wjyd_yc",
                            "is_sign": "0",
                            "is_back": "0",
                            "user_type": "0",
                            "user_value": "",
                            "user_name": "",
                            "condition": "",
                            "condition_type": "and",
                            "left": "229px",
                            "top": "46px",
                            "remark": ""
                        },
                        {
                            "type": "process",
                            "title": "组长审批",
                            "id": "1648882830261q4npnzei562",
                            "is_sign": "0",
                            "is_back": "1",
                            "user_type": "0",
                            "user_value": "5",
                            "user_name": "",
                            "condition": "",
                            "condition_type": "and",
                            "left": "209px",
                            "top": "186px",
                            "remark": ""
                        },
                        {
                            "type": "gateway",
                            "title": "小于3天",
                            "id": "1648882840437rc9_tfczs6e",
                            "is_sign": "0",
                            "is_back": "0",
                            "user_type": "0",
                            "user_value": "",
                            "user_name": "",
                            "condition": "['day','<','3']",
                            "condition_type": "and",
                            "left": "224px",
                            "top": "292px",
                            "remark": ""
                        },
                        {
                            "type": "end",
                            "title": "结束",
                            "id": "1648882844308nl7if3vfaw9",
                            "is_sign": "0",
                            "is_back": "0",
                            "user_type": "0",
                            "user_value": "",
                            "user_name": "",
                            "condition": "",
                            "condition_type": "and",
                            "left": "238px",
                            "top": "464px",
                            "remark": ""
                        },
                        {
                            "type": "process",
                            "title": "部门副经理审批",
                            "id": "16488828506612cxmuf9pw52",
                            "is_sign": "0",
                            "is_back": "1",
                            "user_type": "0",
                            "user_value": "4",
                            "user_name": "",
                            "condition": "",
                            "condition_type": "and",
                            "left": "363px",
                            "top": "363px",
                            "remark": ""
                        }
                    ],
                    lineList: [
                        {
                            "from": "1648882828278f3q_wjyd_yc",
                            "to": "1648882830261q4npnzei562",
                            "label": "",
                            "from_pos": "Bottom",
                            "to_pos": "Top"
                        },
                        {
                            "from": "1648882830261q4npnzei562",
                            "to": "1648882840437rc9_tfczs6e",
                            "label": "",
                            "from_pos": "Bottom",
                            "to_pos": "Top"
                        },
                        {
                            "from": "1648882840437rc9_tfczs6e",
                            "to": "1648882844308nl7if3vfaw9",
                            "label": "是",
                            "from_pos": "Left",
                            "to_pos": "Top"
                        },
                        {
                            "from": "1648882840437rc9_tfczs6e",
                            "to": "16488828506612cxmuf9pw52",
                            "label": "否",
                            "from_pos": "Right",
                            "to_pos": "Top"
                        },
                        {
                            "from": "16488828506612cxmuf9pw52",
                            "to": "1648882844308nl7if3vfaw9",
                            "label": "",
                            "from_pos": "Bottom",
                            "to_pos": "Top"
                        }
                    ]
                },
                p2:{
                    nodeList:[
                        {
                            "type": "start",
                            "title": "开始",
                            "id": "1648889716767gjcigpapyx8",
                            "is_sign": "0",
                            "is_back": "0",
                            "user_type": "0",
                            "user_value": "",
                            "user_name": "",
                            "condition": "",
                            "condition_type": "and",
                            "left": "385.0500030517578px",
                            "top": "48px",
                            "remark": ""
                        },
                        {
                            "type": "process",
                            "title": "部门副经理",
                            "id": "1648889728661opxn1g84kgn",
                            "is_sign": "0",
                            "is_back": "1",
                            "user_type": "0",
                            "user_value": "4",
                            "user_name": "",
                            "condition": "",
                            "condition_type": "and",
                            "left": "365px",
                            "top": "158px",
                            "remark": ""
                        },
                        {
                            "type": "gateway",
                            "title": "小于1000",
                            "id": "1648889732390meiythq5hc1",
                            "is_sign": "0",
                            "is_back": "0",
                            "user_type": "0",
                            "user_value": "",
                            "user_name": "",
                            "condition": "['money','<','1000']",
                            "condition_type": "and",
                            "left": "380px",
                            "top": "336px",
                            "remark": ""
                        },
                        {
                            "type": "process",
                            "title": "部门经理",
                            "id": "16488897564774c__4_91umg",
                            "is_sign": "0",
                            "is_back": "1",
                            "user_type": "0",
                            "user_value": "3",
                            "user_name": "",
                            "condition": "",
                            "condition_type": "and",
                            "left": "365px",
                            "top": "241px",
                            "remark": ""
                        },
                        {
                            "type": "process",
                            "title": "财务部",
                            "id": "16488897966406hsmiba_r2o",
                            "is_sign": "0",
                            "is_back": "1",
                            "user_type": "1",
                            "user_value": "",
                            "user_name": "",
                            "condition": "",
                            "condition_type": "and",
                            "left": "374px",
                            "top": "511px",
                            "remark": ""
                        },
                        {
                            "type": "process",
                            "title": "出纳",
                            "id": "1648889831776vqeggd2sfhb",
                            "is_sign": "0",
                            "is_back": "1",
                            "user_type": "1",
                            "user_value": "",
                            "user_name": "",
                            "condition": "",
                            "condition_type": "and",
                            "left": "374px",
                            "top": "603px",
                            "remark": ""
                        },
                        {
                            "type": "process",
                            "title": "副总经理",
                            "id": "1648889845294751v_zjdink",
                            "is_sign": "0",
                            "is_back": "1",
                            "user_type": "0",
                            "user_value": "2",
                            "user_name": "",
                            "condition": "",
                            "condition_type": "and",
                            "left": "592px",
                            "top": "406px",
                            "remark": ""
                        },
                        {
                            "type": "end",
                            "title": "结束",
                            "id": "1648889898279i44e34mp7da",
                            "is_sign": "0",
                            "is_back": "0",
                            "user_type": "0",
                            "user_value": "",
                            "user_name": "",
                            "condition": "",
                            "condition_type": "and",
                            "left": "394px",
                            "top": "698px",
                            "remark": ""
                        }
                    ],
                    lineList:[
                        {
                            "from": "1648889716767gjcigpapyx8",
                            "to": "1648889728661opxn1g84kgn",
                            "label": "",
                            "from_pos": "Bottom",
                            "to_pos": "Top"
                        },
                        {
                            "from": "1648889728661opxn1g84kgn",
                            "to": "16488897564774c__4_91umg",
                            "label": "",
                            "from_pos": "Bottom",
                            "to_pos": "Top"
                        },
                        {
                            "from": "16488897564774c__4_91umg",
                            "to": "1648889732390meiythq5hc1",
                            "label": "",
                            "from_pos": "Bottom",
                            "to_pos": "Top"
                        },
                        {
                            "from": "1648889732390meiythq5hc1",
                            "to": "16488897966406hsmiba_r2o",
                            "label": "是",
                            "from_pos": "Left",
                            "to_pos": "Top"
                        },
                        {
                            "from": "1648889732390meiythq5hc1",
                            "to": "1648889845294751v_zjdink",
                            "label": "否",
                            "from_pos": "Right",
                            "to_pos": "Top"
                        },
                        {
                            "from": "1648889845294751v_zjdink",
                            "to": "16488897966406hsmiba_r2o",
                            "label": "",
                            "from_pos": "Bottom",
                            "to_pos": "Top"
                        },
                        {
                            "from": "16488897966406hsmiba_r2o",
                            "to": "1648889831776vqeggd2sfhb",
                            "label": "",
                            "from_pos": "Bottom",
                            "to_pos": "Top"
                        },
                        {
                            "from": "1648889831776vqeggd2sfhb",
                            "to": "1648889898279i44e34mp7da",
                            "label": "",
                            "from_pos": "Bottom",
                            "to_pos": "Top"
                        }
                    ]
                }
            },
            nodeList: {
                "start": {
                    title: "开始",
                    anchor:[
                        {pos:"Bottom",source:true,target:false,max:1}
                    ]
                },
                "process": {
                    title: "流程步骤",
                    anchor:[
                        {pos:"Top",source:false,target:true,max:-1},
                        {pos:"Bottom",source:true,target:false,max:1}
                    ]
                },
                "gateway": {
                    title: "网关",
                    anchor:[
                        {pos:"Top",source:false,target:true,max:-1},
                        {pos:"Left",source:true,target:false,max:1,label:"是"},
                        {pos:"Right",source:true,target:false,max:1,label:"否"}
                    ]
                },
                "end": {
                    title: "结束",
                    anchor:[
                        {pos:"Top",source:false,target:true,max:-1}
                    ]
                }
            },
            checkedIndex: -1,//当前选中的
            list: [],//元素列表
            lineList:[],//连接线
            size:1,//当前放大缩小数值
            jsPlumbObj:null,
            nodeJson:{},
            jsonShow:false,
            plumbConfig:{//默认参数
                connector:"Flowchart",
                endpoint:"Dot",
                maxConnections:1,
                paintStyle: {//锚点样式
                    radius: 4,
                    fill: "#555",
                    stroke: "#555",
                    strokeWidth: 2,
                },
                hoverPaintStyle:{
                    fill: "#FF0000",
                    stroke: "#FF0000",
                },
                connectorStyle: {//连接线样式
                    stroke: "#555",
                    strokeWidth: 2,
                    lineWidth: 2
                },
                connectorHoverStyle: {
                    stroke: "#FF0000"
                },
                connectorOverlays: [
                    ["Arrow", {
                        width: 6,
                        length: 6,
                        location: 1
                    }]
                ]
            }
        },
        mounted(){
            setup_draggable();
            this.jsPlumbObj = jsPlumb.getInstance();
            //创建连线监听 ,在已存在的上编辑会不准 故使用getLineList来获取所有的
            // this.jsPlumbObj.bind("connection",(info)=>{
            //     var type = info.source.dataset.type;
            //     var from_pos = info.sourceEndpoint.anchor.hasOwnProperty('anchors')?info.sourceEndpoint.anchor.anchors[0].type:info.sourceEndpoint.anchor.type;
            //     var to_pos = info.targetEndpoint.anchor.hasOwnProperty('anchors')?info.targetEndpoint.anchor.anchors[0].type:info.targetEndpoint.anchor.type;
            //     var label = this.getNodeLabel(type,from_pos);
            //     this.lineList.push({from:info.sourceId,to:info.targetId,label:label?label:"",from_pos:from_pos,to_pos:to_pos});
            // });
            //删除连线监听 ,在已存在的上编辑会不准
            // this.jsPlumbObj.bind("connectionDetached",(info)=>{
            //     for (var i = 0; i < this.lineList.length; i++) {
            //         if(this.lineList[i].from === info.sourceId && this.lineList[i].to === info.targetId){
            //             this.lineList.splice(i,1);
            //         }
            //     }
            // });
            //创建连线前监听 不能自己连接自己
            this.jsPlumbObj.bind("beforeDrop", (info) => {
                if(info.sourceId === info.targetId){
                    alert("不能连接自己");
                    return false;
                }
                return true;
            })
            //双击删除连线事件
            this.jsPlumbObj.bind("dblclick",(connection, e)=>{
                if(confirm("确定删除该连线吗？")){
                    this.jsPlumbObj.deleteConnection(connection);
                }
            });
        },
        methods: {
            //拖动时的处理方法
            addList(data,check = true) {
                var list = [...this.list]
                var index = list.length
                list.push(data);
                this.list = list;
                if(check){
                    this.checkDropperSave(index);
                }
                this.addAnchor(data.id,data.type);
            },
            //节点点击，时处理点中操作
            checkDropped(e){
                var id = e.currentTarget.id;
                var index = -1;
                for (var i = 0; i < this.list.length; i++) {
                    if(id === this.list[i].id){
                        index = i;
                        break;
                    }
                }
                if(index !== this.checkedIndex){
                    this.checkDropperSave(index);
                }
                e.stopPropagation();
            },
            //选中节点
            checkDropperSave(index){
                this.checkedIndex = parseInt(index);
                $(".dropped").removeClass("active");
                if(index>-1){
                    $(".flow-map .dropped").eq(index).addClass("active");
                }
            },
            //增加jsplumb 锚点，用于连线
            addAnchor(id,type){
                var _this = this
                this.$nextTick(()=>{
                    //增加拖动
                    this.jsPlumbObj.draggable(id, {
                        containment: "parent",
                        //拖动位置监听，更新数据
                        stop:function (info){
                            var selects = info.selection;
                            for (var i = 0; i < selects.length; i++) {
                                var id = $(selects[i][0]).attr('id');
                                var left = selects[i][1]['left'];
                                var top = selects[i][1]['top'];
                                _this.changePos(id,left,top);
                            }
                        }
                    })
                    //增加锚点
                    var anchors = this.nodeList[type].anchor
                    for (var i = 0; i < anchors.length; i++) {
                        var item = anchors[i];
                        var plumbConfig = JSON.parse(JSON.stringify(this.plumbConfig))
                        var config = {...plumbConfig,...{isSource: item.source, isTarget: item.target, anchor: item.pos,maxConnections: item.max}};
                        config.uuid = id+'_'+item.pos;//唯一标识，为了编辑时的连接
                        if(item.label){
                            config.connectorOverlays.push(this.getArrLabel(item.label))
                        }
                        this.jsPlumbObj.addEndpoint(id, config);
                    }
                })
            },
            //删除某个节点
            dropNode(){
                if(this.checkedIndex>-1){
                    let list = [...this.list]
                    if(list.hasOwnProperty(this.checkedIndex)){
                        var info = list[this.checkedIndex];
                        list.splice(this.checkedIndex,1);
                        this.checkedIndex = -1;
                        this.list = list;
                        this.jsPlumbObj.deleteConnectionsForElement(info.id);//删除连线
                        this.jsPlumbObj.deleteEndpoint(info.id);//删除锚点
                        this.jsPlumbObj.remove(info.id);//删除元素
                    }
                }
            },
            //重置
            rest(){
                this.checkedIndex = -1;
                this.list = [];
                this.lineList = [];
                $(".flow-map").html('');
                this.jsPlumbObj.deleteEveryConnection();
                this.jsPlumbObj.deleteEveryEndpoint();
                // this.jsPlumbObj.repaintEverything();
            },
            //保存节点信息
            saveNode(){
                this.list.forEach(function (item){
                    $("#"+item.id).find("span").text(item.title)
                })
            },
            //放大缩小
            mapSize(e){
                var type = e.target.dataset.type;
                var size = this.size
                if(type == 'repeat'){
                    size = 1;
                } else if (type == 'add'){
                    size += 0.1;
                } else {
                    if(size<0.3) return false;
                    size -= 0.1;
                }
                this.size = size;
            },
            //获取node的label
            getNodeLabel(type,pos){
                if(!type || !pos) return "";
                if(!this.nodeList.hasOwnProperty(type)) return "";
                for (var  i = 0; i < this.nodeList[type].anchor.length; i++) {
                    if(this.nodeList[type].anchor[i].pos.indexOf(pos)>-1){
                        return this.nodeList[type].anchor[i].label
                    }
                }
                return "";
            },
            //获取label连线文字
            getArrLabel(label){
                return ["Label", {
                    label: label,
                    cssClass: "b5bpm-line-label",
                    location: 0.5
                }]
            },
            //修改list的位置
            changePos(id,left,top){
                for (var j = 0; j < this.list.length; j++) {
                    if(this.list[j].id === id){
                        this.list[j].left = left+'px';
                        this.list[j].top = top+'px';
                        break;
                    }
                }
            },
            //对齐方法
            alignClick(type){
                if($(".ui-selected").length<2) return false;
                var firstObj = $(".ui-selected").eq(0);
                var left = firstObj.position().left;
                var width = firstObj.width();
                var _this = this;
                if(type === 'left'){
                    $(".ui-selected").each(function (){
                        $(this).css('left',left+'px');
                        _this.changePos($(this).attr('id'),left,$(this).position().top);
                    })
                }else if (type === 'right'){
                    var right = left+width;
                    $(".ui-selected").each(function (){
                        var cellWidth = $(this).width();
                        var newLeft = right - cellWidth;
                        $(this).css('left',newLeft+'px');
                        _this.changePos($(this).attr('id'),newLeft,$(this).position().top);
                    })
                }else if (type === 'center'){
                    var center = left+parseInt(width/2);
                    $(".ui-selected").each(function (){
                        var cellWidth = $(this).width();
                        var newLeft = center - parseInt(cellWidth/2);
                        $(this).css('left',newLeft+'px');
                        _this.changePos($(this).attr('id'),newLeft,$(this).position().top);
                    })
                }else if (type === 'middle'){
                    var height = firstObj.height();
                    var top = firstObj.position().top;
                    var middle = top+parseInt(height/2);
                    $(".ui-selected").each(function (){
                        var cellHeight = $(this).height();
                        var newTop = middle - parseInt(cellHeight/2);
                        $(this).css('top',newTop+'px');
                        _this.changePos($(this).attr('id'),$(this).position().left,newTop);
                    })
                }
                this.jsPlumbObj.repaintEverything();
            },
            //生成随机数
            randCode(len){
                len = len || 11;
                var $chars = "abcdefghijklmnopqrstuvwxyz123456789_";
                var maxPos = $chars.length;
                var rand = "";
                for (var i = 0; i < len; i++) {
                    rand += $chars.charAt(Math.floor(Math.random() * maxPos));
                }
                return new Date().getTime()+rand;
            },
            //获取所有连线信息
            getLineList(){
                var list = this.jsPlumbObj.getAllConnections();
                var lineList = [];
                for (var i = 0; i < list.length; i++) {
                    var type =list[i].source.dataset.type
                    var from_pos = list[i].endpoints[0].anchor.type
                    var label = this.getNodeLabel(type,from_pos);
                    var data = {
                        from:list[i].sourceId,
                        to:list[i].targetId,
                        label:label?label:"",
                        from_pos:list[i].endpoints[0].anchor.type,
                        to_pos:list[i].endpoints[1].anchor.type
                    };
                    lineList.push(data);
                }
                this.lineList = lineList;
                return lineList;
            },
            //查看流程json
            showJson(){
                var lineList = this.getLineList();
                var title = this.title
                var nodeList = this.list
                // var lineList = this.lineList
                this.nodeJson = {title:title,node:nodeList,line:lineList}
                this.jsonShow = true
                this.$nextTick(()=>{
                    CodeMirror.fromTextArea(document.getElementById("editor_content"), {
                        mode: "text/javascript",
                        lineNumbers: true,  //显示行号
                        theme: "default", //设置主题
                        lineWrapping: true, //代码折叠
                        foldGutter: true,
                        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                        matchBrackets: true,  //括号匹配
                        autoCloseBrackets: true,
                        showHint: true,
                    });
                })
            },
            hideJson(){
                this.jsonShow = false
            },
            //查看测试流程
            showTest(e){
                var type = e.target.dataset.type;
                if(!this.test.hasOwnProperty(type)){
                    alert("无此示例")
                    return false;
                }
                this.rest();
                var test = JSON.parse(JSON.stringify(this.test[type]));
                //添加节点元素
                var list = test.nodeList;
                for (var i = 0; i < list.length; i++) {
                    var info = list[i];
                    var $el = $(".b5bpm-menu-list .b5bpm-mdc-"+info.type).clone();
                    $el.find("span").html(info.title);
                    $el.addClass("dropped").attr("id",info.id).attr("data-id",info.id).removeClass("draggable").bind("click",this.checkDropped).css({
                        "position": "absolute",
                        "left": info.left,
                        "top": info.top
                    }).appendTo($(".flow-map"));
                    this.addList(info,false);
                }
                setTimeout(()=>{
                    var lineList = test.lineList;
                    for (var i = 0; i < lineList.length; i++) {
                        //通过uuid连接两个已知的端点
                        this.jsPlumbObj.connect({ uuids: [lineList[i].from+'_'+lineList[i].from_pos, lineList[i].to+'_'+lineList[i].to_pos ]});
                    }
                },200);

            },
        }
    });

    //锚点的隐藏显示
    $(document).on("mouseover",".dropped,.jtk-endpoint",function (){
        $(".jtk-endpoint").addClass("b5bpm-endpoint");
    }).on("mouseout",".dropped,.jtk-endpoint",function (){
        $(".jtk-endpoint").removeClass("b5bpm-endpoint");
    });
    //点击空白 未选择
    $(".flow-map").on("click",function (e){
        if(!$(e.currentTarget).hasClass("dropped")){
            app.checkDropperSave(-1)
        }
    });

    //开启选择框和多个拖动
    new mouseRect("flow-map");
    $(".flow-map").selectable({
        filter:".dropped",
        stop:function (event, ui ){
            $(".ui-selected").each(function (){
                app.jsPlumbObj.addToDragSelection($(this).attr("id"))
            })
        },
        unselected: function (event,ui){
            app.jsPlumbObj.removeFromDragSelection($(ui.unselected).attr("id"))
        }
    });

    //拖放初始化 不放在vue中，是因为删除节点时会出现错误
    function setup_draggable() {
        $(".draggable").draggable({//拖动
            appendTo: "body",
            helper: "clone",
            addClasses: false,
            scroll: false
        });
        $(".droppable").droppable({//放置
            accept: ".draggable",
            addClasses: false,
            activeClass: "active",
            drop: function (event, ui) {
                var $orig = ui.draggable;//元素对象
                var position = ui.position;//元素位置
                if ($orig.hasClass("dropped")) return false;

                //如果是添加的元素
                var type = $orig.data("type");
                var list = [...app.list];
                if (type === "start" || type === 'end') {
                    for (var i = 0; i < list.length; i++) {
                        if(list[i].type === type){
                            console.log("开始或结束只能存在一个")
                            return false
                        }
                    }
                }
                //滚动条位置
                var scroll_left = parseInt($(".b5bpm-main").scrollLeft());
                var scroll_top = parseInt($(".b5bpm-main").scrollTop());
                var left = position.left - drop_left + scroll_left
                var top = position.top - drop_top + scroll_top
                left = parseInt(left  * 100 / app.size)/100
                top = parseInt(top * 100 / app.size)/100
                var randCode = app.randCode()
                var data = {
                    type: type,
                    title: $orig.text(),
                    id: randCode,
                    is_sign:"0",//是否会签
                    is_back:"0",//是否回退
                    user_type:"0",//人员类型
                    user_value:"",//人员或职位值
                    user_name:"",//人员名称
                    condition:"",//网关条件
                    condition_type:"and",//类型
                    left:left+"px",//类型
                    top:top+"px",//类型
                    remark: "",
                }
                $orig.clone().addClass("dropped").attr("data-id",randCode).removeClass("draggable").attr("id",randCode).bind("click",app.checkDropped).css({
                    "position": "absolute",
                    "left": left+"px",
                    "top": top+"px"
                }).appendTo(this);
                app.addList(data);
            }
        }).sortable();
    }
})();
