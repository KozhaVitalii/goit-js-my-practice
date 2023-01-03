const getSubscriptionPrice = function (type) {
  let price;
  // Change code below this line

  switch (type) {
    case type:
      type === 'starter'; // Change this line
      price = 0; // Change this line
      break;

    case type:
      type = 'professional'; // Change this line
      price = 20; // Change this line
      break;

    case 3:
      type = 'organization'; // Change this line
      price = 50; // Change this line
      break;
  }

  return price;
}

// consol.log(getSubscriptionPrice('professional'));
// getSubscriptionPrice('organization');
// getSubscriptionPrice('starter');