<?php
if(!defined('sugarEntry') || !sugarEntry) die('Not A Valid Entry Point');
    global $current_user;
    global $timedate;
    global $current_language;
    global $mod_strings;
    global $sugar_config; // declare global $sugar_config array
    

     
  if(empty($_REQUEST["sp_action"]))
   {       
  ?>
   <link rel="stylesheet" href="themes/sp_theme/vendor/webix/codebase/webix.css" type="text/css" media="screen" charset="utf-8">
   <script src="themes/sp_theme/vendor/webix/codebase/webix.js" type="text/javascript" charset="utf-8"></script>  
          <table style="width:100%">
          <tbody>
            <tr>
            <td>
              <div style="padding-bottom:5px;">
                <h2><?php echo $mod_strings['LBL_SP_THEME_GRIDEDIT_TITLE'];?></h2>
              </div>
               <form action="index.php" method="POST" name="report_form" id="report_form">
                <input type="hidden" name="module" value="Administration">
                <input type="hidden" name="action" value="sp_heme_gridedit">
                <input type="hidden" value="1" name="wizard_step"> 
                <input type="hidden" name="process" value="true">


                    <div class="row">
                    <div class="col-md-2">
                              <input type="submit" id="gonext" value="<?php echo $mod_strings['LBL_SP_THEME_CONFIRM'];?>" onclick="savedata();return false;" name="button" class="button primary" title="<?php echo $mod_strings['LBL_SP_THEME_CONFIRM'];?>" >
                              <input type="button" onclick="document.location.href='index.php?module=Administration&action=index';" value="<?php echo $mod_strings['LBL_SP_THEME_CANCEL'];?>" name="button" class="button" title="<?php echo $mod_strings['LBL_SP_THEME_CANCEL'];?>">
                      </div>
                    <div class="col-md-6">
                            <div id="webix_cont" style="height:550px;"></div>
                    </div>
                    <div class="col-md-4">
                         <?php echo $mod_strings['LBL_SP_THEME_GRIDEDIT_HELP'];?>  
                    </div>
                    </div> 

              </form>       
          </td>
          </tr>
   </table>  
   <style>
		.name{
			float: left;
			font-weight: bold;
			padding: 0 5px;
		}

		.buttons, .checkbox{
			padding-left: 20px;
			padding: 0 5px;
			float:right;
      margin:0;
		}
    .buttons {
      clear: none;
    }
	</style>
   <script type="text/javascript" charset="utf-8">
   
    function savedata()
    {
      var modulesw = [];
      listw.data.each(function(obj){  
      if(obj.markCheckbox==1)
         modulesw.push(obj.id);
      });                  
      
      webix.ajax().post("index.php?module=Administration&action=sp_theme_gridedit&to_pdf=1&sp_action=save", { sp_modules: modulesw },{
      error:function(text, data, XmlHttpRequest){
           webix.message("error: saving data");
      },
      success:function(text, data, XmlHttpRequest){
      document.location.href='index.php?module=Administration';
      }
      });

    }
   	var listw;
      
   	webix.ready(function() {
        //data
        var sp_modlist = [
        <?php

          $sp_theme_gridedit_setting=array();;
          if(!empty($sugar_config['sp_theme_gridedit_setting']))
             $sp_theme_gridedit_setting = json_decode($sugar_config['sp_theme_gridedit_setting']);

          $d = dir('modules');
          $treemodules=array();
          $isfirstm=true;
      		while($e = $d->read()){
      			if(substr($e, 0, 1) == '.' || !is_dir('modules/' . $e))continue;
      			if(file_exists('modules/' . $e . '/metadata/studio.php') && isset($GLOBALS [ 'beanList' ][$e])) // installed modules must also exist in the beanList
      			{
              $treemodules[$e]=translate('LBL_MODULE_NAME',$e); 
      			}
      		}

          asort($treemodules);

          foreach($treemodules as $e => $v)
          {
              if(!$isfirstm)
               echo ',';
              if(in_array($e, $sp_theme_gridedit_setting))
                 echo '{ id:"'.$e.'", name:"'.$v.'", markCheckbox:1}';
              else
                 echo '{ id:"'.$e.'", name:"'.$v.'", markCheckbox:0}';
              $isfirstm=false;   
          }


          
        ?>
        ];
        

    
		/*Create new view that extends List and webix.ActiveContent*/
		webix.protoUI({
			name:"activeList"
		},webix.ui.list,webix.ActiveContent);


		listw=webix.ui({
			view: "activeList",
			id:"mylist",
            container:"webix_cont",
			width:350,
      height:400,
			select:true,
			data:sp_modlist,
			activeContent:{
         markCheckbox:{
                    view:"checkbox",
                    width:50
                    }
			},
			template: "<div class='name'>#name#</div><div class='checkbox'>{common.markCheckbox()}</div>",
			type: {
				height:35
			}

		});


	});
	</script> 
  <?php 
  }
  else
  {
      
       
        require_once 'modules/Configurator/Configurator.php';
        $configurator = new Configurator();
        $sp_theme_gridedit_setting=array();


 
        foreach(json_decode(htmlspecialchars_decode($_REQUEST["sp_modules"]))as $m)
        {
            $sp_theme_gridedit_setting[]=$m;
        }
        $configurator->loadConfig(); 
        $configurator->config['sp_theme_gridedit_setting'] =json_encode($sp_theme_gridedit_setting);
        $configurator->saveConfig(); // save changes

       
        die();

  }
