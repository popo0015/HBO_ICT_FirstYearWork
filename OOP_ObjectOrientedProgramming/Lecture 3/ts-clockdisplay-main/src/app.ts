import ClockDisplay from './ClockDisplay.js';

window.addEventListener('load', () => {
  const time: HTMLDivElement = document.getElementById('time') as HTMLDivElement;
  const clockDisplay: ClockDisplay = new ClockDisplay(time);

  document.getElementById('setTime').addEventListener('click', () => {
    // const hoursInput: HTMLInputElement = document.getElementById('hours') as HTMLInputElement;
    // const hours: number = Number.parseInt(hoursInput.value);
    // const minutesInput: HTMLInputElement = document.getElementById('minutes') as HTMLInputElement;
    // const minutes: number = Number.parseInt(minutesInput.value);
    // const secondsInput: HTMLInputElement = document.getElementById('seconds') as HTMLInputElement;
    // const seconds: number = Number.parseInt(secondsInput.value);
  });

  document.getElementById('tick').addEventListener('click', () => {
    clockDisplay.timeTick();
  });
});
