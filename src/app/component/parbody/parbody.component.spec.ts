import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParbodyComponent } from './parbody.component';

describe('ParbodyComponent', () => {
  let component: ParbodyComponent;
  let fixture: ComponentFixture<ParbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
