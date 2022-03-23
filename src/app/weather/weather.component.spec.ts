import { HttpRequestService } from './../http-request.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeatherComponent } from './weather.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  function setup(){
    const spy = jasmine.createSpyObj('HttpRequestService',['request']);
    const stubValue=  {dataseries:[{
        "timepoint": 3,
        "cloudcover": 2,
        "lifted_index": 15,
        "prec_type": "none",
        "prec_amount": 0,
        "temp2m": 23,
        "rh2m": "5%",
        "wind10m": {
          "direction": "SE",
          "speed": 3
        },
        "weather": "clearday"
      }]}
    spy.request.and.returnValue(stubValue)
    return {spy,stubValue}
  }
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherComponent ],
      providers:[HttpRequestService],
      imports: [HttpClientTestingModule], 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should return stub value from spy",()=>{
    const {spy, stubValue} = setup()
    expect(spy.request()).toBe(stubValue)
  })

  
});
