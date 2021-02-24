/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:43:37 GMT-0400 (Bolivia Time)
 * Time: 2:43:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:43:37 GMT-0400 (Bolivia Time)
 * Last time updated: 2:43:37
 *
 * Caution: es-sections will be replaced by script execution
 */

//<es-section>

import {PilatDictionaries} from "./pilatDictionaries";

//</es-section>

export class PilatParams {

  //<es-section>
  
  _id: string;
  
  
  id: number;
  
  par_order: number;
  
  
  
  
  par_cod: string;
  
  par_description: string;
  
  par_abbr: string;
  
  par_group: string;
  
  createdBy: string;
  
  updatedBy: string;
  
  
  
  par_dictionary_id: string;
  
  par_status_id: string;
  
  par_parent_id: string;
  
  
  duaAt: Date;
  
  createdAt: Date;
  
  updatedAt: Date;
  
  
  
  
  
  
  
  
  
  pilatParamParDictionary:PilatDictionaries;
  
  pilatParamParStatus:PilatParams;
  
  pilatParamParParent:PilatParams;
  

  //</es-section>
}
