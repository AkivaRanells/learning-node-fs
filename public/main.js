$('.btn').on('click', function(){
    serveFile();
})
const serveFile = function(){
    $.ajax({
        method: 'get',
        url: 'file',
        dataType: 'json',
        success: function(data){
            console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    })
}