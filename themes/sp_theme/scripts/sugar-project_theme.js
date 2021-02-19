//è presente in \Include\InlineEditing\inlineEditing.js  ma questo file non viene allegato e quindi ho messo la dichiarazione qui

var currentModule = "";
if (typeof module_sugar_grp1 !== 'undefined') {
   currentModule = module_sugar_grp1;
}

$(document).ready(function () {
    
// PATCH FOR SCHEDULERS 
  	$('#job_interval_advanced').parent().html('<div>'+$('#job_interval_advanced').parent().html()+'</div>');
  	$('#job_interval_basic').parent().html('<div>'+$('#job_interval_basic').parent().html()+'</div>');

  
    $('.footable').footable();
    
    // Add special class to minimalize page elements when screen is less than 768px
    setBodySmall();

    // Handle minimalize sidebar menu
    $('.hide-menu').on('click', function(event){
        event.preventDefault(); 
        if ($(window).width() < 769) {
            $("body").toggleClass("show-sidebar");
        } else {
            $("body").toggleClass("hide-sidebar");
        }
        if($("body").hasClass("hide-sidebar"))
        {
            setCookie("hidesidebar", 'hide', 100);  
        }
        else
        {
            setCookie("hidesidebar", '', 100);
        }
    });
   
    // Handle grid/index Listview
    $('.switch-listview').find('#lsmenu').on('click', function(event){
   
        setCookie("view_"+$('.search_form').find('input[name=module]').val(), '', 100);  
    });
     $('.switch-listview').find('#lsgrid').on('click', function(event){
 
        setCookie("view_"+$('.search_form').find('input[name=module]').val(), 'cards', 100);  
    });   
    $('.switch-listview').find('#lscal').on('click', function(event){
 
        setCookie("view_"+$('.search_form').find('input[name=module]').val(), 'calendar', 100);  
    });   
    $('.switch-listview').find('#lskanb').on('click', function(event){
 
        setCookie("view_"+$('.search_form').find('input[name=module]').val(), 'kanban', 100);  
    });   
    $('.switch-listview').find('#lsedit').on('click', function(event){
 
        setCookie("view_"+$('.search_form').find('input[name=module]').val(), 'edit', 100);  
    });   
    
    // Initialize metsiMenu plugin to sidebar menu
    $('#side-menu').metisMenu();

    // Initialize iCheck plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green'
    });

    // Initialize animate panel function
    $('.animate-panel').animatePanel();

    // Function for collapse hpanel
    $('.searchpanel > .panel-heading').on('click', function (event) {
        event.preventDefault();
        var hpanel = $(this).closest('div.hpanel');
        var icon = $(this).find('i:first');
        var body = hpanel.find('div.panel-body');
        var footer = hpanel.find('div.panel-footer');
        body.slideToggle(300);
        footer.slideToggle(200);

        // Toggle icon from up to down
        icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        hpanel.toggleClass('').toggleClass('panel-collapse');
        setTimeout(function () {
            hpanel.resize();
            hpanel.find('[id^=map-]').resize();
        }, 50);
    });

    // Function for close hpanel
    $('.closebox').on('click', function (event) {
        event.preventDefault();
        var hpanel = $(this).closest('div.hpanel');
        hpanel.remove();
        if($('body').hasClass('fullscreen-panel-mode')) { $('body').removeClass('fullscreen-panel-mode');}
    });

    // Fullscreen for fullscreen hpanel
    $('.fullscreen').on('click', function() {
        var hpanel = $(this).closest('div.hpanel');
        var icon = $(this).find('i:first');
        $('body').toggleClass('fullscreen-panel-mode');
        icon.toggleClass('fa-expand').toggleClass('fa-compress');
        hpanel.toggleClass('fullscreen');
        setTimeout(function() {
            $(window).trigger('resize');
        }, 100);
    });

    // Open close right sidebar
    $('.right-sidebar-toggle').on('click', function () {
        $('#right-sidebar').toggleClass('sidebar-open');
    });

    // Function for small header
    $('.small-header-action').on('click', function(event){
        event.preventDefault();
        var icon = $(this).find('i:first');
        var breadcrumb  = $(this).parent().find('#hbreadcrumb');
        $(this).parent().parent().parent().toggleClass('small-header');
        breadcrumb.toggleClass('m-t-lg');
        icon.toggleClass('fa-arrow-up').toggleClass('fa-arrow-down');
        if(icon.hasClass("fa-arrow-down"))
        {
            setCookie("mainpanel", 'nomargin', 100);  
        }
        else
        {
            setCookie("mainpanel", '', 100);
        }
    });
    
 
    
    // Set minimal height of #wrapper to fit the window
    setTimeout(function () {
        fixWrapperHeight();
    });

   
         
    // Initialize tooltips
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]"
    });

    // Initialize popover
    $("[data-toggle=popover]").popover();

    // Move modal to body
    // Fix Bootstrap backdrop issu with animation.css
    $('.modal').appendTo("body")
    
    active_filters();
    
    getstickeynotes(1);
    
    $('#txtfilternotes').keyup(function() {
      $('#notes').find('.note-link').hide();
      $('#notes').find('.note-link').filter(":contains('" + $(this).val() + "')").show();
    });
    
    $('#subpanel_hpanel a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href").replace('#',''); // activated tab
        setCookie($('input[name="module"]').val()+'_subpanel', target, 120);
      });
  
  //  $('#subpanel_hpanel a').on('click', function(e) {
  //    e.preventDefault();
  //     document.location.href=$(this).attr("href")+'&return_module='+$('input[name="module"]').val()+'&return_id='+$('input[name="record"]').val()+'&return_name='+$('.breadcrumb .active').text();
  //  });
 
 // AOR REPORTS EDITVIEW 
  if($("#detailpanel_fields_select").length ) {
    $( "#EditView .panel-body" ).css('width','78%');
    $( "#EditView .panel-body" ).css('float','left');
    
  }
  
});

$(window).bind("load", function () {
    // Remove splash screen after load
    $('.splash').css('display', 'none')
});

$(window).bind("resize click", function () {

    // Add special class to minimalize page elements when screen is less than 768px
    setBodySmall();

    // Waint until metsiMenu, collapse and other effect finish and set wrapper height
    setTimeout(function () {
        fixWrapperHeight();
    }, 300);
});

function fixWrapperHeight() {
    
    // Get and set current height
    var headerH = 46;//62;
    var navigationH = $("#navigation").height();
    var contentH = $(".content").height();

    // Set new height when contnet height is less then navigation
    if (contentH < navigationH) {
        $("#wrapper").css("min-height", navigationH + 'px');
    }

    // Set new height when contnet height is less then navigation and navigation is less then window
    if (contentH < navigationH && navigationH < $(window).height()) {
   
        $("#wrapper").css("min-height", $(window).height() - headerH  + 'px');
    }

    // Set new height when contnet is higher then navigation but less then window
    if (contentH > navigationH && contentH < $(window).height()) {

        $("#wrapper").css("min-height", $(window).height() - headerH + 'px');
    }
    
      if($("#detailpanel_fields_select").length ) {
        h1=$( "#EditView .panel-body" ).height();
        h2=$("#detailpanel_fields_select").height();

        if(h1>h2)
           $("#wrapper").css("min-height",h1 + 200 + 'px');
        else
           $("#wrapper").css("min-height",h2 + 200 + 'px');

    
  }

}


function setBodySmall() {
    if ($(this).width() < 769) {
        $('body').addClass('page-small');
    } else {
        $('body').removeClass('page-small');
        $('body').removeClass('show-sidebar');
    }
}

// Animate panel function
$.fn['animatePanel'] = function() {

    var element = $(this);
    var effect = $(this).data('effect');
    var delay = $(this).data('delay');
    var child = $(this).data('child');

    // Set default values for attrs
    if(!effect) { effect = 'zoomIn'}
    if(!delay) { delay = 0.06 } else { delay = delay / 10 }
    if(!child) { child = '.row > div'} else {child = "." + child}

    //Set defaul values for start animation and delay
    var startAnimation = 0;
    var start = Math.abs(delay) + startAnimation;

    // Get all visible element and set opacity to 0
    var panel = element.find(child);
    panel.addClass('opacity-0');

    // Get all elements and add effect class
    panel = element.find(child);
    panel.addClass('stagger').addClass('animated-panel').addClass(effect);

    var panelsCount = panel.length + 10;
    var animateTime = (panelsCount * delay * 10000) / 10;

    // Add delay for each child elements
    panel.each(function (i, elm) {
        start += delay;
        var rounded = Math.round(start * 10) / 10;
        $(elm).css('animation-delay', rounded + 's');
        // Remove opacity 0 after finish
        $(elm).removeClass('opacity-0');
    });

    // Clear animation after finish
    setTimeout(function(){
        $('.stagger').css('animation', '');
        $('.stagger').removeClass(effect).removeClass('animated-panel').removeClass('stagger');
    }, animateTime)

};


function active_filters()
{

   var strvalue="";
   var fil='';
   var lbl='';

    
   _obj=$('#search_form'); 
   if(_obj.length==0)
       return;
   
   _obj.find('td').each(function(index) {    
        strvalue='';
        if(($(this).find('input').length==0)&&($(this).find('select').not('#saved_search_select').not('#orderBySelect').length==0))
        {
            lbl=$(this).text()+':';  
        }
        $(this).find('input[type=text]').each(function(index2) { 
             if($(this).val()!='')
             {  
               strvalue+=' '+lbl+' <b>'+$(this).val()+'</b> ';
             }
            }); 
        $(this).find('input[type=checkbox]').each(function(index2) { 
             if($(this).is(':checked'))
             {  
               strvalue+=' '+lbl+' <b>yes</b> ';
             }
            });  
         $(this).find('select').not('#saved_search_select').not('#orderBySelect').find(':selected').each(function(index2) { 
             if($(this).val()!='')
             {  
               strvalue+=' '+lbl+' <b>'+$(this).val()+'</b> ';
               lbl='';
             }
            });      
        if(strvalue!='')
        {
           if(fil.length+strvalue.length<220)
            fil+=strvalue; 
       
        }
        
     
    }); 
    if(fil.length>=220)
       fil+="... and more";        
   $('#lblheading').html(fil);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function getstickeynotes(what)
{
    $.ajax({
        type: "POST",
        url: 'index.php?module=IAD_Sticky_Notes&action=getlist&to_pdf=1',
        async:false,
        dataType: "text",
        data: {	offset:0 },
        success: function(data) {
            if(what!=1)
             $('#notes').html(data);    
            else
             $('#notes').html($('#notes').html()+data);
        }      
       });               
}
 
 function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }


function get_m(id,what)
{
    if(what==2) // archive
    {
        $.ajax({
        type: "POST",
        url: 'index.php?module=IAD_Sticky_Notes&action=archive&to_pdf=1',
        async:false,
        dataType: "html",
        data: {	record:id },
        success: function(data) {
            getstickeynotes(0);
        }      
       });    
       return;
    }
    if(what==1)
     action="DetailView"; 
    else
     action="EditView";
  
     $.ajax({
        type: "POST",
        url: 'index.php?module=IAD_Sticky_Notes&action='+action+'&sugar_body_only=1&record='+id,
        async:false,
        dataType: "html",
        data: {	 },
        success: function(data) {	  
            $('#stickymodal .modal-body').html(data);
            $('#stickymodal form').prop("target", 'iframe_submit');  
            $('#stickymodal div .buttons').not(':first').css('display','none');
            $('#stickymodal #CANCEL_HEADER').css('display','none');
            var res = $("#stickymodal #SAVE_HEADER").attr("onclick").replace("return false;", "setTimeout(getstickeynotes,2000);$('#stickymodal').modal('hide');return false;");
            $("#stickymodal #SAVE_HEADER").attr("onclick",res);               
             $('#stickymodal .modal-body .hpanel :first').css('display','none'); 
             $('#stickymodal .modal-title').text($('#stickymodal .modal-body .hpanel h2').text());
             $('#stickymodal').modal();          
        }      
       });            
 
}
 

function get_editpopup(id,module,what)
{
   
    if(what==1)
     action="DetailView"; 
    else
     action="EditView";
  
     $.ajax({
        type: "POST",
        url: 'index.php?module='+module+'&action='+action+'&sugar_body_only=1&record='+id,
        async:false,
        dataType: "html",
        data: {	 },
        success: function(data) {	  
            $('#stickymodal .modal-body').html(data);
            $('#stickymodal form').prop("target", 'iframe_submit');  
            $('#stickymodal div .buttons').not(':first').css('display','none');
            $('#stickymodal #CANCEL_HEADER').css('display','none');
            var res = $("#stickymodal #SAVE_HEADER").attr("onclick").replace("return false;", "$('#stickymodal').modal('hide');return false;");
            $("#stickymodal #SAVE_HEADER").attr("onclick",res);         
            $("#stickymodal #SAVE_HEADER").attr("onclick",res);               
             $('#stickymodal .modal-body .hpanel :first').css('display','none'); 
             $('#stickymodal .modal-title').text($('#stickymodal .modal-body .hpanel h2').text());
             $('#stickymodal').modal();          
        }      
       });            
 
} 

