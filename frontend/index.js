
if (!window.location.href.includes('ModuleBuilder')) {
  $('head').append('<base href="'+window.location.href+'">');
  $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
  $('head').append('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');
  $('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">');

  if(!window.location.search.includes('action=Login')) {
    $('body').prepend('<app-root></app-root>');
  }

  $('body').append('<script src="frontend/dist/frontend/main.js" type="text/javascript"></script>');
  $('body').append('<script src="frontend/dist/frontend/polyfills.js" type="text/javascript"></script>');
  $('body').append('<script src="frontend/dist/frontend/runtime.js" type="text/javascript"></script>');
  $('body').append('<script src="frontend/dist/frontend/styles.js" type="text/javascript"></script>');
  $('body').append('<script src="frontend/dist/frontend/vendor.js" type="text/javascript"></script>');
}

//$('head').append('<style rel="stylesheet" href="frontend/dist/assets/inspinia/css/bootstrap.min.css"></style>');
//$('head').append('<style rel="stylesheet" href="frontend/dist/assets/inspinia/font-awesome/css/font-awesome.css"></style>');
//$('head').append('<style rel="stylesheet" href="frontend/dist/assets/inspinia/css/animate.css"></style>');

// $('head').append('<script src="frontend/dist/assets/inspinia/js/jquery-2.1.1.js"></script>');
// $('head').append('<script src="frontend/dist/assets/inspinia/js/bootstrap.min.js"></script>');
// $('head').append('<script src="frontend/dist/assets/inspinia/js/plugins/metisMenu/jquery.metisMenu.js"></script>');
// $('head').append('<script src="frontend/dist/assets/inspinia/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>');


// $('body').append('<script src="frontend/dist/runtime-es2015.js" type="text/javascript"></script>');
// $('body').append('<script src="frontend/dist/runtime-es5.js" type="text/javascript"></script>');
// $('body').append('<script src="frontend/dist/polyfills-es5.js" type="text/javascript"></script>');
// $('body').append('<script src="frontend/dist/polyfills-es2015.js" type="text/javascript"></script>');
// $('body').append('<script src="frontend/dist/main-es2015.js" type="text/javascript"></script>');
// $('body').append('<script src="frontend/dist/main-es5.js" type="text/javascript"></script>');


// fixWithJquery();
//
// $('a[data-toggle="tab"]').click(() => {
//   setTimeout(fixWithJquery, 2000);
// });
//
// setTimeout(fixWithJquery, 2000);
//
// function fixWithJquery() {
//   console.log('fixed with jquery');
//   $('.xdebug-error').css('display','none');
//   $("br").remove();
//   $(".dashletcontainer").css('width','100%');
// }
//
// $(function(){
//   let currentMenu = $('.navbar-right .dropdown-menu').html();
//   let featuresMenu = `
// 		<div style="width:130px;height:40px;float:left;text-align:center;">
//    		<a href="">
//       	Configuraciones
//       </a>
//     </div>
// 	`;
//   $('.navbar-right .dropdown-menu').append(featuresMenu);
// });
