export default class Circle {
  constructor( x, y, dx, dy, radius, colorArray, context ) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.context = context;
    this.color = colorArray[ Math.floor( Math.random() * colorArray.length ) ];
    this.draw = this.draw.bind( this );
    this.update = this.update.bind( this );
  }
  draw() {
    this.context.beginPath();
    this.context.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false );
    this.context.fillStyle = this.color;
    this.context.fill();
  }
  update() {
    if ( this.x + this.radius > window.innerWidth || this.x - this.radius < 0 ) {
      this.dx = -this.dx;
    }
    if ( this.y + this.radius > window.innerWidth || this.y - this.radius < 0 ) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
  updateRadius( delta ) {
    this.radius = this.radius + ( this.radius * delta / 100 )
    if ( this.radius < 0 ) this.radius = 0
    return this.radius
  }
}