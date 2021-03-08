/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 03 2021 23:45:30 GMT-0400 (Bolivia Time)
 * Time: 23:45:30
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 03 2021 23:45:30 GMT-0400 (Bolivia Time)
 * Last time updated: 23:45:30
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {PilatParams} from "./pilatParams";

//</es-section>

export class PilatModules {

  //<es-section>
  
  _id: string;
  
  
  id: number;
  
  
  
  
  mod_code: string;
  
  mod_description: string;
  
  mod_abbr: string;
  
  mod_icon: string;
  
  mod_group: string;
  
  createdBy: string;
  
  updatedBy: string;
  
  
  
  mod_par_status_id: string;
  
  mod_parent_id: string;
  
  
  dueAt: Date;
  
  createdAt: Date;
  
  updatedAt: Date;
  
  
  
  
  
  
  
  
  
  pilatModuleModParStatus:PilatParams;
  
  pilatModuleModParent:PilatModules;
  

  //</es-section>
}
