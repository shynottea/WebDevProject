import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringsComponent } from './strings.component';

describe('StringsComponent', () => {
  let component: StringsComponent;
  let fixture: ComponentFixture<StringsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
