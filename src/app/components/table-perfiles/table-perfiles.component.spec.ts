import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePerfilesComponent } from './table-perfiles.component';

describe('TablePerfilesComponent', () => {
  let component: TablePerfilesComponent;
  let fixture: ComponentFixture<TablePerfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePerfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
