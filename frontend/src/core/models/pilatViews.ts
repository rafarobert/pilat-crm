/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 03 2021 23:45:31 GMT-0400 (Bolivia Time)
 * Time: 23:45:31
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 03 2021 23:45:31 GMT-0400 (Bolivia Time)
 * Last time updated: 23:45:31
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {PilatModules} from "./pilatModules";

import {PilatParams} from "./pilatParams";

//</es-section>

export class PilatViews {

  //<es-section>
  
  _id: string;
  
  
  id: number;
  
  
  
  
  vie_code: string;
  
  vie_description: string;
  
  vie_route: string;
  
  vie_params: string;
  
  vie_icon: string;
  
  vie_group: string;
  
  createdBy: string;
  
  updatedBy: string;
  
  
  
  vie_module_id: string;
  
  vie_return_id: string;
  
  vie_par_status_id: string;
  
  
  dueAt: Date;
  
  createdAt: Date;
  
  updatedAt: Date;
  
  
  
  
  
  
  
  
  
  pilatViewVieModule:PilatModules;
  
  pilatViewVieReturn:PilatViews;
  
  pilatViewVieParStatus:PilatParams;
  

  //</es-section>
}
