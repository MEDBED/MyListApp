import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitPostComponent } from './git-post.component';

describe('GitPostComponent', () => {
  let component: GitPostComponent;
  let fixture: ComponentFixture<GitPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
