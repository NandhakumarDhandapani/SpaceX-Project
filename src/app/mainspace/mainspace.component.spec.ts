import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainspaceComponent } from './mainspace.component';

describe('MainspaceComponent', () => {
  let component: MainspaceComponent;
  let fixture: ComponentFixture<MainspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
