                                                                                                                                                                <?php
//echo  json_encode($_REQUEST['item']);
global $current_user;
global $timedate;


if(!empty($_REQUEST["kanban"]))
{

  $bean = BeanFactory::newBean($_REQUEST["module"]);
  $beanid  =$_REQUEST["id"];
  $bean->retrieve($beanid); 
  $ff=trim($_REQUEST["field"]);
  $bean->$ff=$_REQUEST["key"];
  $bean->save();

  echo 'ok';
  return;
}


if(empty($_REQUEST["module"]))
{
    $error="module not present";
    echo  json_encode(array());
}
if(empty($_REQUEST['item']["Id"]))
{
    $error="id not present";
    echo  json_encode(array());
}


$module=$_REQUEST["module"];
$beanid=$_REQUEST['item']["Id"];
$bean = BeanFactory::newBean($module);
$bean->retrieve($beanid);
if(!empty($_REQUEST["deleted"]))
{
    $bean->deleted=1;
    $bean->save();
    die();
}


$itemok=array();
foreach($_REQUEST['item'] as $key =>$value)
{
    $keylow=strtolower($key);
    switch ($bean->field_name_map[$keylow]['type']) {
        case "id":
            $itemok[$key]=$beanid;
            break;
        case "name":
            $bean->$keylow=$value;
            $itemok[$key]=$value;    
            break;
        case "relate":
            
            $beanrel = BeanFactory::newBean($bean->field_name_map[$keylow]['module']);
            $beanrel->retrieve($value);
            if(!empty($beanrel->id))
            {
             $bean->$keylow=$value;  
             $itemok[$key]=$beanrel->name;
            }
            else
            {
             $bean->$keylow='';  
             $itemok[$key]='';
            }
            break;
        case "date":
            if(!empty($value))
            {
            $nD = $timedate->fromString($value,$current_user);
            $bean->$keylow=$timedate->asUserDate($nD, $current_user);
            }
            $itemok[$key]=$timedate->asUserDate($nD, $current_user);
            break;   
        case "text":
            $bean->$keylow=$value;
            $itemok[$key]=$value;            
            break;
        case "enum":
            $bean->$keylow=$value;
            $itemok[$key]=$value;            
            break;
        default:
            $bean->$keylow=$value;
            $itemok[$key]=$value;   
    }
   
}

$bean->save();

header("Content-Type: application/json");
echo json_encode($itemok);

 

