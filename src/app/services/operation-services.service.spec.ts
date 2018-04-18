import { TestBed, inject } from '@angular/core/testing';

import { OperationServicesService } from './operation-services.service';

describe('OperationServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OperationServicesService]
    });
  });

  it('should be created', inject([OperationServicesService], (service: OperationServicesService) => {
    expect(service).toBeTruthy();
  }));
});
