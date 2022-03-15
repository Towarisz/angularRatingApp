import { TimeFormatterPipe } from './time-formatter.pipe';

describe('TimeFormatterPipe', () => {
  const pipe = new TimeFormatterPipe();
  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format seconds',()=>{
    expect(pipe.transform(10)).toEqual("10 seconds");
  })

  it('should format minutes',()=>{
    expect(pipe.transform(60)).toEqual("1 minute");
  })

  it('should format hours',()=>{
    expect(pipe.transform(3600)).toEqual("1 hour");
  })

  it('should format days',()=>{
    expect(pipe.transform(86400)).toEqual("1 day");
  })
});
