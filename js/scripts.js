//business logic
function Ticket(title, date, time, amount) {
  this.movieName= title;
  this.movieDate = date;
  this.movieTime = time;
  this.ticketAmount = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Ticket.prototype.fullName = function() {
  return this.movieName + " on " + this.movieDate + " at " + this.movieTime;
}
