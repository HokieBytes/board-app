import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCollectionComponent } from './board-collection.component';

describe('BoardCollectionComponent', () => {
  let component: BoardCollectionComponent;
  let fixture: ComponentFixture<BoardCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardCollectionComponent]
    });
    fixture = TestBed.createComponent(BoardCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
