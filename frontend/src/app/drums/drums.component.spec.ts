import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumsComponent } from './drums.component';

describe('DrumsComponent', () => {
  let component: DrumsComponent;
  let fixture: ComponentFixture<DrumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrumsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
