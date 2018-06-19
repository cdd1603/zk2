require(["jquery,handlebars"],function($,handlebars){
    $.ajax({
        url:"/api/list",
        dataType:"json",
        success:function(res){
            var tpl=$("#tpl").html();
            var template=handlebars.compile();
            var html=template(res)
            $("#top").html(html)
        },
        error:function(error){
            console.log(error)
        }
    })
})