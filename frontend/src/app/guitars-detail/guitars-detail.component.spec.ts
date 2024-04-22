import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarsDetailComponent } from './guitars-detail.component';

describe('GuitarsDetailComponent', () => {
  let component: GuitarsDetailComponent;
  let fixture: ComponentFixture<GuitarsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuitarsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuitarsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
