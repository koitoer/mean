let restaurant = {
    name : 'restaurant',
    guestCapacity : 75,
    guestCount : 0,

    //method inside of a class, access properties inside of the object.
    checkAvailability : function(partySize){
        //reference the object
        console.log(this.guestCapacity)

        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },

    seatParty : function(partySize){
        if(this.checkAvailability(partySize))
            this.guestCount = this.guestCount + partySize;
    },

    removeParty : function(partySize){
        this.guestCount = this.guestCount - partySize;
    }
}

let status = restaurant.checkAvailability(5)
console.log(status)
restaurant.seatParty(10)
console.log(restaurant)
restaurant.seatParty(60)
console.log(restaurant)
restaurant.removeParty(70)
console.log(restaurant)