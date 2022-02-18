import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLiveComponent } from './list-live.component';

describe('ListLiveComponent', () => {
  let component: ListLiveComponent;
  let fixture: ComponentFixture<ListLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
