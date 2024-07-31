class Cookie {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }
}

const cookieOne = new Cookie("Green");
const cookieTwo = new Cookie("Blue");
