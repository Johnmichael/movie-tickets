$(document).ready(function() {
$("p").hide();
var numberOfTickets= document.querySelector('#amount').value;
console.log(numberOfTickets);

var movieTicket = {
  nameOfMovie: function (title) {
    this.title = title
  },
  cost: function(price) {
    this.price = price
  },
  purchase: function(){
    $("<p>"+"You have purchased "  +numberOfTickets+' ticket(s) to ' +this.title+"</p>" ).appendTo('.ticketText');
    $("<p>" +'The cost will be $' + this.price*(numberOfTickets)+"</p>").appendTo('.ticketText')
 }
};

shrek = Object.create(movieTicket);
shrek.nameOfMovie('Shrek 9')
shrek.cost(15)

hipster = Object.create(movieTicket)
hipster.nameOfMovie('Hipster Garbage')
hipster.cost(25)
// hipster.purchase()

cruise = Object.create(movieTicket)
cruise.nameOfMovie("Tom Cruise: The Autobiopic")
cruise.cost(15)
// cruise.purchase()

$("#show").click(function(){
    $("p").show();
    shrek.purchase()
});
});



// $("form#button").submit(function(event) {
//   alert('working!');
//
//
