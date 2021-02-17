/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 12 2021 12:54:05 GMT-0400 (Bolivia Time)
 * Time: 12:54:5
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 12 2021 12:54:05 GMT-0400 (Bolivia Time)
 * Last time updated: 12:54:5
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {PilatMails} from "../models/pilatMails";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class PilatMailService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/pilat-mails`;
  dataChange: BehaviorSubject<PilatMails[]> = new BehaviorSubject<PilatMails[]>([]);
  pilatMailData: PilatMails = new PilatMails();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): PilatMails[] {
    return this.dataChange.value;
  }

  getDataPilatMails(select = [], where = {}, order = [], limit:number = null, offset:number = null): void {
    this.getAllPilatMails(select, where, order, limit, offset).subscribe(async (res) => {
      let response = res as {status: string, message:string, data:PilatMails[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllPilatMails(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
    let attributes = '';
    if(select.length) {
        attributes += 'select=' + select.toString() + '&';
    }
    if(Object.keys(where).length) {
        attributes += 'where=' + JSON.stringify(where) + '&';
    }
    if(order.length) {
        attributes += 'order=' + JSON.stringify(order) + '&';
    }
    if(limit) {
        attributes += 'limit=' + limit + '&';
    }
    if(offset) {
        attributes += 'offset=' + offset + '&';
    }
    return this.http.get(this.basePath + '?' + attributes);
  }
  createPilatMail(pilatMail:PilatMails) {
    return this.http.post(this.basePath, pilatMail);
  }
  getPilatMail(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updatePilatMail(id:any, pilatMail:PilatMails) {
    return this.http.put(this.basePath + '/' + id, pilatMail);
  }
  deletePilatMail(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneByUid(Id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUid/' + Id + '?' + attributes);
  }
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByMaiPort(maiPort:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiPort/' + maiPort + '?' + attributes);
  }
  
  findOneByMaiDescription(maiDescription:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiDescription/' + maiDescription + '?' + attributes);
  }
  
  findOneByMaiUserAccount(maiUserAccount:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiUserAccount/' + maiUserAccount + '?' + attributes);
  }
  
  findOneByMaiUserPassword(maiUserPassword:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiUserPassword/' + maiUserPassword + '?' + attributes);
  }
  
  findOneByMaiHost(maiHost:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiHost/' + maiHost + '?' + attributes);
  }
  
  findOneByMaiProtocol(maiProtocol:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiProtocol/' + maiProtocol + '?' + attributes);
  }
  
  findOneByMaiBusId(maiBusId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiBusId/' + maiBusId + '?' + attributes);
  }
  
  findOneByMaiParStatusId(maiParStatusId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiParStatusId/' + maiParStatusId + '?' + attributes);
  }
  
  findOneByMaiGroup(maiGroup:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiGroup/' + maiGroup + '?' + attributes);
  }
  
  findOneByMaiSubject(maiSubject:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiSubject/' + maiSubject + '?' + attributes);
  }
  
  findOneByMaiTo(maiTo:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiTo/' + maiTo + '?' + attributes);
  }
  
  findOneByUpdatedby(updatedby:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUpdatedby/' + updatedby + '?' + attributes);
  }
  
  findOneByCreatedby(createdby:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedby/' + createdby + '?' + attributes);
  }
  
  findOneByMaiBcc(maiBcc:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiBcc/' + maiBcc + '?' + attributes);
  }
  
  findOneByMaiCc(maiCc:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiCc/' + maiCc + '?' + attributes);
  }
  
  findOneByMaiText(maiText:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiText/' + maiText + '?' + attributes);
  }
  
  findOneByMaiHtml(maiHtml:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByMaiHtml/' + maiHtml + '?' + attributes);
  }
  
  findOneByDueat(dueat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDueat/' + dueat + '?' + attributes);
  }
  
  findOneByCreatedat(createdat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByCreatedat/' + createdat + '?' + attributes);
  }
  
  findOneByUpdatedat(updatedat:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUpdatedat/' + updatedat + '?' + attributes);
  }
  
  
  updatePilatMailByUid(Id:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByUid?Id=' + Id, pilatMail);
  }
  
  updatePilatMailById(id:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailById?id=' + id, pilatMail);
  }
  
  updatePilatMailByMaiPort(maiPort:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiPort?maiPort=' + maiPort, pilatMail);
  }
  
  updatePilatMailByMaiDescription(maiDescription:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiDescription?maiDescription=' + maiDescription, pilatMail);
  }
  
  updatePilatMailByMaiUserAccount(maiUserAccount:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiUserAccount?maiUserAccount=' + maiUserAccount, pilatMail);
  }
  
  updatePilatMailByMaiUserPassword(maiUserPassword:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiUserPassword?maiUserPassword=' + maiUserPassword, pilatMail);
  }
  
  updatePilatMailByMaiHost(maiHost:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiHost?maiHost=' + maiHost, pilatMail);
  }
  
  updatePilatMailByMaiProtocol(maiProtocol:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiProtocol?maiProtocol=' + maiProtocol, pilatMail);
  }
  
  updatePilatMailByMaiBusId(maiBusId:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiBusId?maiBusId=' + maiBusId, pilatMail);
  }
  
  updatePilatMailByMaiParStatusId(maiParStatusId:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiParStatusId?maiParStatusId=' + maiParStatusId, pilatMail);
  }
  
  updatePilatMailByMaiGroup(maiGroup:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiGroup?maiGroup=' + maiGroup, pilatMail);
  }
  
  updatePilatMailByMaiSubject(maiSubject:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiSubject?maiSubject=' + maiSubject, pilatMail);
  }
  
  updatePilatMailByMaiTo(maiTo:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiTo?maiTo=' + maiTo, pilatMail);
  }
  
  updatePilatMailByUpdatedby(updatedby:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByUpdatedby?updatedby=' + updatedby, pilatMail);
  }
  
  updatePilatMailByCreatedby(createdby:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByCreatedby?createdby=' + createdby, pilatMail);
  }
  
  updatePilatMailByMaiBcc(maiBcc:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiBcc?maiBcc=' + maiBcc, pilatMail);
  }
  
  updatePilatMailByMaiCc(maiCc:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiCc?maiCc=' + maiCc, pilatMail);
  }
  
  updatePilatMailByMaiText(maiText:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiText?maiText=' + maiText, pilatMail);
  }
  
  updatePilatMailByMaiHtml(maiHtml:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByMaiHtml?maiHtml=' + maiHtml, pilatMail);
  }
  
  updatePilatMailByDueat(dueat:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByDueat?dueat=' + dueat, pilatMail);
  }
  
  updatePilatMailByCreatedat(createdat:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByCreatedat?createdat=' + createdat, pilatMail);
  }
  
  updatePilatMailByUpdatedat(updatedat:any, pilatMail:PilatMails) {
      return this.http.post(this.basePath + '/updatePilatMailByUpdatedat?updatedat=' + updatedat, pilatMail);
  }
  
  
  findPilatParamsMaiParStatusWithParOrder(select = []) {
      let attributes = '';
      if(select.length) {
           attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findPilatParamsMaiParStatusWithParOrder' + '?' + attributes);
  }
  
  
  filterPilatMailsByMaiParStatus(ids:any, level:number = 0, select = [], order = []) {
        let attributes = '';
        if(select.length) {
             attributes += 'select=' + select.toString() + '&';
        }
        if(order.length) {
             attributes += 'order=' + JSON.stringify(order) + '&';
        }
        if(level) {
             attributes += 'level=' + level + '&';
        }
        return this.http.get(this.basePath + '/filterPilatMailsByMaiParStatus/' + ids + '?' + attributes);
  }
  
  //</es-section>
}
