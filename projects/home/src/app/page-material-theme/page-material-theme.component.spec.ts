import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMaterialThemeComponent } from './page-material-theme.component';

describe('PageMaterialThemeComponent', () => {
  let component: PageMaterialThemeComponent;
  let fixture: ComponentFixture<PageMaterialThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMaterialThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMaterialThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
