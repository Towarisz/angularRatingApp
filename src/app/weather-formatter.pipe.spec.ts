import { WeatherFormatterPipe } from './weather-formatter.pipe';

describe('WeatherFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
