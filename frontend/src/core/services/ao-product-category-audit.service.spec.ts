/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Feb 01 2021 04:20:37 GMT-0400 (Bolivia Time)
 * Time: 4:20:37
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Feb 01 2021 04:20:37 GMT-0400 (Bolivia Time)
 * Last time updated: 4:20:37
 *
 * Caution: es-sections will be replaced by script execution
 */

import { TestBed } from '@angular/core/testing';
//<es-section>

import { AoProductCategoryAuditService } from './ao-product-category-audit.service';

describe('AoProductCategoryAuditService', () => {
  let service: AoProductCategoryAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AoProductCategoryAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

//</es-section>
