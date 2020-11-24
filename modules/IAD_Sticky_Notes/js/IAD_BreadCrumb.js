//*********************************
// BREADCRUMB
//*********************************
function breadcrumb()
{
    // se non in detailview allora esce
    // prende l'attuale (il primo)
    // prende il secondo
    // se il secondo è comune ed il primo non lo è >
     if(($(".detail.view").length==0)&&($("#EditView").length==0))
       return;
     $.ajax({
            type: "POST",
            url: 'index.php?module=IAD_BreadCrumb&action=breadcrumb&to_pdf=1',
            async:false,
            dataType: "text",
            data: {	
               id0:$('#iconrecents li').eq(0).attr('id'),
               module0:$('#iconrecents li').eq(0).attr('module'),
               module0name:$('.moduleTitle>h2').text(),
               id1:$('#iconrecents li').eq(1).attr('id'),
               module1:$('#iconrecents li').eq(1).attr('module'),      
               id2:$('#iconrecents li').eq(2).attr('id'),
               module2:$('#iconrecents li').eq(2).attr('module'), 
               parent_id:$('input[name="parent_id"]').val(),
               parent_name:$('input[name="parent_name"]').val()                 
            },
            success: function(data) {	  
                $('.moduleTitle').html(data);
       }      
     });
}

//*********************************
// READY
//*********************************
if(window.jQuery)  
{
    $(function() 
    {
     breadcrumb();   
    });         
}
 