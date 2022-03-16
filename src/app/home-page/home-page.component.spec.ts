import { NgForm } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent, NgForm ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should show add prompt",()=>{
    fixture.nativeElement.querySelector(".addPost").click()
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector(".popUp")).toBeTruthy()
  })

  it('should generate post component',()=>{
    component.posts = [{img:"https://picsum.photos/200", name:"obrazek" ,score:5 ,time:40}]
    fixture.detectChanges()
    expect(fixture.nativeElement.querySelector("app-post")).toBeTruthy()
  })
});
