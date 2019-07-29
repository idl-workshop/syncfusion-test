import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeGridComponent } from './tree-grid.component';

describe('TreeGridComponent', () => {
  let component: TreeGridComponent;
  let fixture: ComponentFixture<TreeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeGridComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
