import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourMusicComponent } from './your-music.component';

describe('YourMusicComponent', () => {
  let component: YourMusicComponent;
  let fixture: ComponentFixture<YourMusicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourMusicComponent]
    });
    fixture = TestBed.createComponent(YourMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
