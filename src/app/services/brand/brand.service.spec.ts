import { BrandService } from 'src/app/services/brand/brand.service';
import { TestBed } from '@angular/core/testing';


describe('BrandService', () => {
  let service: BrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
