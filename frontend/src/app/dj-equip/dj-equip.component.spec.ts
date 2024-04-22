import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjEquipComponent } from './dj-equip.component';

describe('DjEquipComponent', () => {
  let component: DjEquipComponent;
  let fixture: ComponentFixture<DjEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DjEquipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DjEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
