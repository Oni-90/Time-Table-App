import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereComponent } from './matiere.component';

describe('MatiereComponent', () => {
  let component: MatiereComponent;
  let fixture: ComponentFixture<MatiereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatiereComponent]
    });
    fixture = TestBed.createComponent(MatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
