// 直接给jQuery添加全局函数
// jQuery.myAlert = function(str){
//     alert(str);
// }

// $.myAlert('容易发生重名！');

// 使用命名空间
// jQuery.guo = {
//     myAlert: function(str){
//         alert(str);
//     }
// }

// $('#id').click(function(){
//     $.guo.myAlert('使用了命名空间！');
// })

// 对象级别的插件开发
;(function($, window, document, undefined){
    // 定义构造函数
    var MyPop = function(obj, opt){
        this.$element = obj;
        this.defaults = {
            txt: '默认内容'
        };
        this.options = $.extend({}, this.defaults, opt);
    }

    // 定义方法
    MyPop.prototype = {
        popTxt: function(){
            $('#pop-back').show();
            $('#pop-content').show();
            $('#pop-back, #pop-close').on('click', function(){
                $('#pop-content').hide();
                $('#pop-back').hide();
            })
            this.$element.children('.pop-body').text(this.options.txt);
            return this.$element;
        },
        popBgcolor: function(){
            $('.pop-body').css({background: this.options.bodyBg});
            return this.$element;
        }
    }

    // 插件中使用对象创建实力并返回
    $.fn.popPlugin = function(options){
        var myPop = new MyPop($(this), options);
        return myPop;
    }
})(jQuery, window, document);