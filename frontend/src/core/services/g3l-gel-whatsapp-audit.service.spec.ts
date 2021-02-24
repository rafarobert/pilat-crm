/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Jan 29 2021 20:07:17 GMT-0400 (Bolivia Time)
 * Time: 20:7:17
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Jan 29 2021 20:07:17 GMT-0400 (Bolivia Time)
 * Last time updated: 20:7:17
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { G3lGelWhatsappAuditService } from './g3l-gel-whatsapp-audit.service';

describe('G3lGelWhatsappAuditService', () => {
  let service: G3lGelWhatsappAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(G3lGelWhatsappAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
