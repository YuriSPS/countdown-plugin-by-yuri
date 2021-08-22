export default class Countdown {
  constructor(futureDate) {
    this.futureDate = futureDate;
  }
  // Método que irá recuperar o dia atual
  get _actualDate() {
    return new Date();
  }

  // Método que irá transformar a propriedade futureDate em data
  get _futureDate() {
    return new Date(this.futureDate);
  }

  // Método que irá calcular a diferença de tempo em milisegundos
  get _timeStampDiff() {
    return (this._futureDate.getTime() - this._actualDate.getTime());
  }
  // Método que irá mostrar quantos dias faltam para o natal
  get days() {
    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
  }
  // Método que irá transformar em horas
  get hours() {
    return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
  }
  get minutes() {
    return Math.floor(this._timeStampDiff / (60 * 1000));
  }
  get seconds() {
    return Math.floor(this._timeStampDiff / (1000));
  }

  get total() {
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
  }
}

