let isGuestOneVegan = true;
let isGuestTwoVegan = false;

// if both are vegan then offer up only vegan dishes
if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer up only Vegan dishes');
}

// if atleast one of them is Vegan then offer some Vegan dishes
else if (isGuestTwoVegan || isGuestOneVegan) {
    console.log("Offer some Vegan options along with other dishes")
    ''
}

// If no one is Vegan then offer anything
else {
    console.log("offer anything on the menu")
}