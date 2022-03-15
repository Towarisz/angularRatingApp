import { TimeFormatterPipe } from './../time-formatter.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent , TimeFormatterPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it("inputs should work",()=>{
    component.name="works"
    component.score=5
    component.time=10
    component.img="aaa"
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector("h3").innerText).toContain("works")
    expect(fixture.nativeElement.querySelector(".score").innerText).toContain(5)
    expect(fixture.nativeElement.querySelector(".posted").innerText).toContain(10)
    expect(fixture.nativeElement.querySelector("img").src).toContain("aaa")
  })
  
});
