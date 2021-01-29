let restaurant = {
    name: 'ABC',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailibility: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize;
    },

    removeSeats: function(partySize) {
        this.guestCount = this.guestCount - partySize;
    }
}


let status = restaurant.checkAvailibility(4);
console.log(status);