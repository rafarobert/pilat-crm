<?php
if(!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');


    global $current_user;
    global $timedate;
    global $current_language;
    global $mod_strings;
    global $sugar_config; // declare global $sugar_config array
    
    require_once 'modules/Configurator/Configurator.php';
    $configurator = new Configurator();
   
    $icons=array();
    if(!empty($sugar_config['sp_toolbar']))
      $icons = json_decode($sugar_config['sp_toolbar']);

    if(empty($icons))
    {
     $icons[]=json_decode('{"id":"firstrow","name":"","url":"","target":0}');
    }
       
   if(empty($_REQUEST["wizard_step"]))
    {       
    ?>
       <style>
       .icons-box span,.icons-box i
       {
       cursor:pointer;
       }
       </style>
       <script>
       var lastFocused;
       $(function() {
         $('.showhideicons').on('click', function (event) {
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
           $('input').focus(function(){
            if($(this).hasClass("ic"))
              lastFocused = $(this);
          });  
          $('.icons-box span,.icons-box i').on('click', function (event) {   
            lastFocused.val($(this).parent().find('i').attr('class'));
           }); 
          $('.showhideicons').click();
       }); 
                        

          function removerow(id)
          {
            if(id!='firstrow')
            {
             $('#row_'+id).remove();
            }
            else
            {
               $('#row_firstrow').find('#icon_firstrow').val('');
               $('#row_firstrow').find('#url_firstrow').val('');
               $('#row_firstrow').find('#name_firstrow').val('');
            }             
          }

          function addrow()
          {    
               var guid=genguid();    
               var strid=$('#row_firstrow').html();  
               var re = new RegExp('firstrow', 'g');
               strid = strid.replace(re, guid);
               $('#row_firstrow').clone().insertAfter($('#row_firstrow')).html(strid).attr('id','row_'+guid);
               $('#row_'+guid).find('#rmb').css('display','');  
               $('#row_'+guid).find('#icon_'+guid).val('');  
               $('#row_'+guid).find('#url_'+guid).val('');
               $('#row_'+guid).find('#name_'+guid).val('');
               $('#row_'+guid).find('#target_'+guid).attr('checked', false);
               $(document).on('focus', 'input', function(){
                   if($(this).hasClass("ic"))
                      lastFocused = $(this);
                });    
          }  
       
          function s4() {
              return Math.floor((1 + Math.random()) * 0x10000)
                         .toString(16)
                         .substring(1);
          }
          
          function genguid() {
              return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                     s4() + '-' + s4() + s4() + s4();
          };         
       </script>
      <table style="width:100%">
          <tbody>
            <tr>
            <td>
              <div style="padding-bottom:5px;">
                <h2><?php echo $mod_strings['LBL_SP_THEME_TOP_TOOLBAR_TITLE'];?></h2>
              </div>
               <form action="index.php" method="POST" name="report_form" id="report_form">
                <input type="hidden" name="module" value="Administration">
                <input type="hidden" name="action" value="sp_theme_toptoolbar">
                <input type="hidden" value="1" name="wizard_step"> 
                <input type="hidden" name="process" value="true">
                  <div class="hpanel">
                  <div class="panel-heading">
                     <table width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tbody>
                        <tr>
                          <td align="left"> 
                          <br>
                              <input type="submit" id="gonext" value="<?php echo $mod_strings['LBL_SP_THEME_CONFIRM'];?>" onclick="conferma();" name="button" class="button primary" title="<?php echo $mod_strings['LBL_SP_THEME_CONFIRM'];?>" >
                              <input type="button" onclick="document.location.href='index.php?module=Administration&action=index';" value="<?php echo $mod_strings['LBL_SP_THEME_CANCEL'];?>" name="button" class="button" title="<?php echo $mod_strings['LBL_SP_THEME_CANCEL'];?>">
                          </td>
                        </tr>
                        </tbody>
                    </table>                 
                  </div>
                  <div class="panel-body">     
                  <br>
                     <table border="0" id="importOptions" style="" class="edit view noBorder"> 
                           <tr> 
                             <th>
                             <?php echo $mod_strings['LBL_SP_THEME_TOP_TOOLBAR_ICON'];?>
                             </th>
                             <th>
                             <?php echo $mod_strings['LBL_SP_THEME_TOP_TOOLBAR_URL'];?>
                             </th>
                             <th>
                             <?php echo $mod_strings['LBL_SP_THEME_TOP_TOOLBAR_NAME'];?>
                             </th>
                             <th>
                             <?php echo $mod_strings['LBL_SP_THEME_TOP_TOOLBAR_TARGET'];?>
                             </th>
                          </tr>  
                          <?php
                          foreach($icons as $ar)
                          {
                         
                          ?>
                             <tr id="row_<?php echo $ar->id;?>">
                                 <td style="width:20%;">   
                                      <input type='text' class="ic" id="icon_<?php echo $ar->id;?>" name="icon_<?php echo $ar->id;?>" value="<?php echo $ar->icon;?>"/>
                                      <input type="hidden" name="id_row[]" value="<?php echo $ar->id;?>">
                                 </td>
                                <td style="width:50%;">     
                                     <input type='text' id="url_<?php echo $ar->id;?>" name="url_<?php echo $ar->id;?>" value="<?php echo $ar->url;?>"/>
                                 </td>
                                 <td style="width:30%;">     
                                      <input type='text' id="name_<?php echo $ar->id;?>" name="name_<?php echo $ar->id;?>" value="<?php echo $ar->name;?>"/>
                                 </td>
                                 <td style="width:10%;">     
                                      <input type='checkbox' id="target_<?php echo $ar->id;?>" <?php if($ar->target==1) echo 'checked=true';?> name="target_<?php echo $ar->id;?>" value="1"/>
                                 </td>
                                 <td >
                                 <input type="button" id="rmb" onclick="removerow('<?php echo $ar->id;?>');" value="<?php echo $mod_strings['LBL_SP_THEME_TOP_TOOLBAR_REMOVE'];?>" name="button" class="button" title="<?php echo $mod_strings['LBL_SP_THEME_TOP_TOOLBAR_REMOVE'];?>">
                                 </td>
                              </tr>   
                            <?php
                            }
                            ?> 
                            <tr>
                                 <td colspan=3>   
                                    <input type="button" onclick="addrow();" value="<?php echo $mod_strings['LBL_SP_THEME_TOP_TOOLBAR_ADD'];?>" name="button" class="button" title="<?php echo $mod_strings['LBL_SP_THEME_TOP_TOOLBAR_ADD'];?>">
                                 </td>
                           </tr>                         
                        </table>    
                      <br>                

                   </div>  
                  </form>
               </div>
               </div>  
            </td>
            </tr>
           </tbody>
         </table> 
         
         <div class="row" style="margin-top:20px;">
          <div class="col-lg-12">
          <div class="hpanel panel-collapse">
          <div class="panel-heading">
              <div class="panel-tools">
                  <a class="showhideicons"><i class="fa fa-chevron-down"></i></a>
              </div>
              <?php echo $mod_strings['LBL_SP_THEME_TOP_TOOLBAR_SELICONS'];?>:
          </div>
          <div class="panel-body" style="display: none;">
          
          <div class="icons-box">
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-cloud-upload"></i><span class="font-icon-name"> pe-7s-cloud-upload</span>
                  </div>
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-close"></i><span class="font-icon-name"> pe-7s-close</span>
                  </div>
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-cloud-download"></i><span class="font-icon-name"> pe-7s-cloud-download</span>
                  </div>
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-close-circle"></i><span class="font-icon-name"> pe-7s-close-circle</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-angle-up"></i><span class="font-icon-name"> pe-7s-angle-up</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-angle-up-circle"></i><span class="font-icon-name"> pe-7s-angle-up-circle</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-angle-right"></i><span class="font-icon-name"> pe-7s-angle-right</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-angle-right-circle"></i><span class="font-icon-name"> pe-7s-angle-right-circle</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-angle-left"></i><span class="font-icon-name"> pe-7s-angle-left</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-angle-left-circle"></i><span class="font-icon-name"> pe-7s-angle-left-circle</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-angle-down"></i><span class="font-icon-name"> pe-7s-angle-down</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-angle-down-circle"></i><span class="font-icon-name"> pe-7s-angle-down-circle</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-wallet"></i><span class="font-icon-name"> pe-7s-wallet</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-volume2"></i><span class="font-icon-name"> pe-7s-volume2</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-volume1"></i><span class="font-icon-name"> pe-7s-volume1</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-voicemail"></i><span class="font-icon-name"> pe-7s-voicemail</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-video"></i><span class="font-icon-name"> pe-7s-video</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-user"></i><span class="font-icon-name"> pe-7s-user</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-upload"></i><span class="font-icon-name"> pe-7s-upload</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-unlock"></i><span class="font-icon-name"> pe-7s-unlock</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-umbrella"></i><span class="font-icon-name"> pe-7s-umbrella</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-trash"></i><span class="font-icon-name"> pe-7s-trash</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-tools"></i><span class="font-icon-name"> pe-7s-tools</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-timer"></i><span class="font-icon-name"> pe-7s-timer</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-ticket"></i><span class="font-icon-name"> pe-7s-ticket</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-target"></i><span class="font-icon-name"> pe-7s-target</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-sun"></i><span class="font-icon-name"> pe-7s-sun</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-study"></i><span class="font-icon-name"> pe-7s-study</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-stopwatch"></i><span class="font-icon-name"> pe-7s-stopwatch</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-star"></i><span class="font-icon-name"> pe-7s-star</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-speaker"></i><span class="font-icon-name"> pe-7s-speaker</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-signal"></i><span class="font-icon-name"> pe-7s-signal</span>
                  </div>
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-shuffle"></i><span class="font-icon-name"> pe-7s-shuffle</span>
                  </div>
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-shopbag"></i><span class="font-icon-name"> pe-7s-shopbag</span>
                  </div>
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-share"></i><span class="font-icon-name"> pe-7s-share</span>
                  </div>
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-server"></i><span class="font-icon-name"> pe-7s-server</span>
                  </div>
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-search"></i><span class="font-icon-name"> pe-7s-search</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-science"></i><span class="font-icon-name"> pe-7s-science</span>
                  </div>
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-ribbon"></i><span class="font-icon-name"> pe-7s-ribbon</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-repeat"></i><span class="font-icon-name"> pe-7s-repeat</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-refresh"></i><span class="font-icon-name"> pe-7s-refresh</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-refresh-cloud"></i><span class="font-icon-name"> pe-7s-refresh-cloud</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-radio"></i><span class="font-icon-name"> pe-7s-radio</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-print"></i><span class="font-icon-name"> pe-7s-print</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-prev"></i><span class="font-icon-name"> pe-7s-prev</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-power"></i><span class="font-icon-name"> pe-7s-power</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-portfolio"></i><span class="font-icon-name"> pe-7s-portfolio</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-plus"></i><span class="font-icon-name"> pe-7s-plus</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-play"></i><span class="font-icon-name"> pe-7s-play</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-plane"></i><span class="font-icon-name"> pe-7s-plane</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-photo-gallery"></i><span class="font-icon-name"> pe-7s-photo-gallery</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-phone"></i><span class="font-icon-name"> pe-7s-phone</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-pen"></i><span class="font-icon-name"> pe-7s-pen</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-paper-plane"></i><span class="font-icon-name"> pe-7s-paper-plane</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-paint"></i><span class="font-icon-name"> pe-7s-paint</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-notebook"></i><span class="font-icon-name"> pe-7s-notebook</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-note"></i><span class="font-icon-name"> pe-7s-note</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-next"></i><span class="font-icon-name"> pe-7s-next</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-news-paper"></i><span class="font-icon-name"> pe-7s-news-paper</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-musiclist"></i><span class="font-icon-name"> pe-7s-musiclist</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-music"></i><span class="font-icon-name"> pe-7s-music</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-mouse"></i><span class="font-icon-name"> pe-7s-mouse</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-more"></i><span class="font-icon-name"> pe-7s-more</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-moon"></i><span class="font-icon-name"> pe-7s-moon</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-monitor"></i><span class="font-icon-name"> pe-7s-monitor</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-micro"></i><span class="font-icon-name"> pe-7s-micro</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-menu"></i><span class="font-icon-name"> pe-7s-menu</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-map"></i><span class="font-icon-name"> pe-7s-map</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-map-marker"></i><span class="font-icon-name"> pe-7s-map-marker</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-mail"></i><span class="font-icon-name"> pe-7s-mail</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-mail-open"></i><span class="font-icon-name"> pe-7s-mail-open</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-mail-open-file"></i><span class="font-icon-name"> pe-7s-mail-open-file</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-magnet"></i><span class="font-icon-name"> pe-7s-magnet</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-loop"></i><span class="font-icon-name"> pe-7s-loop</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-look"></i><span class="font-icon-name"> pe-7s-look</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-lock"></i><span class="font-icon-name"> pe-7s-lock</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-lintern"></i><span class="font-icon-name"> pe-7s-lintern</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-link"></i><span class="font-icon-name"> pe-7s-link</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-like"></i><span class="font-icon-name"> pe-7s-like</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-light"></i><span class="font-icon-name"> pe-7s-light</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-less"></i><span class="font-icon-name"> pe-7s-less</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-keypad"></i><span class="font-icon-name"> pe-7s-keypad</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-junk"></i><span class="font-icon-name"> pe-7s-junk</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-info"></i><span class="font-icon-name"> pe-7s-info</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-home"></i><span class="font-icon-name"> pe-7s-home</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-help2"></i><span class="font-icon-name"> pe-7s-help2</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-help1"></i><span class="font-icon-name"> pe-7s-help1</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-graph3"></i><span class="font-icon-name"> pe-7s-graph3</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-graph2"></i><span class="font-icon-name"> pe-7s-graph2</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-graph1"></i><span class="font-icon-name"> pe-7s-graph1</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-graph"></i><span class="font-icon-name"> pe-7s-graph</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-global"></i><span class="font-icon-name"> pe-7s-global</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-gleam"></i><span class="font-icon-name"> pe-7s-gleam</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-glasses"></i><span class="font-icon-name"> pe-7s-glasses</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-gift"></i><span class="font-icon-name"> pe-7s-gift</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-folder"></i><span class="font-icon-name"> pe-7s-folder</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-flag"></i><span class="font-icon-name"> pe-7s-flag</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-filter"></i><span class="font-icon-name"> pe-7s-filter</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-file"></i><span class="font-icon-name"> pe-7s-file</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-expand1"></i><span class="font-icon-name"> pe-7s-expand1</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-exapnd2"></i><span class="font-icon-name"> pe-7s-exapnd2</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-edit"></i><span class="font-icon-name"> pe-7s-edit</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-drop"></i><span class="font-icon-name"> pe-7s-drop</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-drawer"></i><span class="font-icon-name"> pe-7s-drawer</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-download"></i><span class="font-icon-name"> pe-7s-download</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-display2"></i><span class="font-icon-name"> pe-7s-display2</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-display1"></i><span class="font-icon-name"> pe-7s-display1</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-diskette"></i><span class="font-icon-name"> pe-7s-diskette</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-date"></i><span class="font-icon-name"> pe-7s-date</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-cup"></i><span class="font-icon-name"> pe-7s-cup</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-culture"></i><span class="font-icon-name"> pe-7s-culture</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-crop"></i><span class="font-icon-name"> pe-7s-crop</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-credit"></i><span class="font-icon-name"> pe-7s-credit</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-copy-file"></i><span class="font-icon-name"> pe-7s-copy-file</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-config"></i><span class="font-icon-name"> pe-7s-config</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-compass"></i><span class="font-icon-name"> pe-7s-compass</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-comment"></i><span class="font-icon-name"> pe-7s-comment</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-coffee"></i><span class="font-icon-name"> pe-7s-coffee</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-cloud"></i><span class="font-icon-name"> pe-7s-cloud</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-clock"></i><span class="font-icon-name"> pe-7s-clock</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-check"></i><span class="font-icon-name"> pe-7s-check</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-chat"></i><span class="font-icon-name"> pe-7s-chat</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-cart"></i><span class="font-icon-name"> pe-7s-cart</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-camera"></i><span class="font-icon-name"> pe-7s-camera</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-call"></i><span class="font-icon-name"> pe-7s-call</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-calculator"></i><span class="font-icon-name"> pe-7s-calculator</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-browser"></i><span class="font-icon-name"> pe-7s-browser</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-box2"></i><span class="font-icon-name"> pe-7s-box2</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-box1"></i><span class="font-icon-name"> pe-7s-box1</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-bookmarks"></i><span class="font-icon-name"> pe-7s-bookmarks</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-bicycle"></i><span class="font-icon-name"> pe-7s-bicycle</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-bell"></i><span class="font-icon-name"> pe-7s-bell</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-battery"></i><span class="font-icon-name"> pe-7s-battery</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-ball"></i><span class="font-icon-name"> pe-7s-ball</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-back"></i><span class="font-icon-name"> pe-7s-back</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-attention"></i><span class="font-icon-name"> pe-7s-attention</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-anchor"></i><span class="font-icon-name"> pe-7s-anchor</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-albums"></i><span class="font-icon-name"> pe-7s-albums</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-alarm"></i><span class="font-icon-name"> pe-7s-alarm</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-airplay"></i><span class="font-icon-name"> pe-7s-airplay</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-cash"></i><span class="font-icon-name"> pe-7s-cash</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-bluetooth"></i><span class="font-icon-name"> pe-7s-bluetooth</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-way"></i><span class="font-icon-name"> pe-7s-way</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-id"></i><span class="font-icon-name"> pe-7s-id</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-wristwatch"></i><span class="font-icon-name"> pe-7s-wristwatch</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-world"></i><span class="font-icon-name"> pe-7s-world</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-volume"></i><span class="font-icon-name"> pe-7s-volume</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-users"></i><span class="font-icon-name"> pe-7s-users</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-user-female"></i><span class="font-icon-name"> pe-7s-user-female</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-up-arrow"></i><span class="font-icon-name"> pe-7s-up-arrow</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-switch"></i><span class="font-icon-name"> pe-7s-switch</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-scissors"></i><span class="font-icon-name"> pe-7s-scissors</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-safe"></i><span class="font-icon-name"> pe-7s-safe</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-right-arrow"></i><span class="font-icon-name"> pe-7s-right-arrow</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-plug"></i><span class="font-icon-name"> pe-7s-plug</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-pin"></i><span class="font-icon-name"> pe-7s-pin</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-paperclip"></i><span class="font-icon-name"> pe-7s-paperclip</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-note2"></i><span class="font-icon-name"> pe-7s-note2</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-network"></i><span class="font-icon-name"> pe-7s-network</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-mute"></i><span class="font-icon-name"> pe-7s-mute</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-medal"></i><span class="font-icon-name"> pe-7s-medal</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-like2"></i><span class="font-icon-name"> pe-7s-like2</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-left-arrow"></i><span class="font-icon-name"> pe-7s-left-arrow</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-key"></i><span class="font-icon-name"> pe-7s-key</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-joy"></i><span class="font-icon-name"> pe-7s-joy</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-film"></i><span class="font-icon-name"> pe-7s-film</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-disk"></i><span class="font-icon-name"> pe-7s-disk</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-delete-user"></i><span class="font-icon-name"> pe-7s-delete-user</span>
                  </div>
          
              </div>
          </div>
          
          <div class="row">
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-bottom-arrow"></i><span class="font-icon-name"> pe-7s-bottom-arrow</span>
                  </div>
          
              </div>
              <div class="infont col-md-2">
                  <div class="font-icon-detail">
                      <i class="pe-7s-add-user"></i><span class="font-icon-name"> pe-7s-add-user</span>
                  </div>
          
              </div>
          </div>
          
          </div>
          </div>
          </div>
          </div>
          </div>
          
              
    <?php 
    }
  else
  {
  
        $configurator->loadConfig(); 
        $icons=array();
        foreach($_REQUEST["id_row"] as $row)
        {
              $target=0;
              if($_REQUEST["target_".$row]==1)
                $target=1;
              $icons[]=array('id'=>$row,'icon'=>$_REQUEST["icon_".$row],'name'=>$_REQUEST["name_".$row],'target'=>$target,'url'=>$_REQUEST["url_".$row]);
        }
    
        $configurator->config['sp_toolbar'] = json_encode($icons);  
 

        $configurator->saveConfig(); // save changes
        $queryParams = array(
             'module' => 'Administration',
             'action' => 'index'
         );
         SugarApplication::redirect('index.php?' . http_build_query($queryParams));
         
  }
