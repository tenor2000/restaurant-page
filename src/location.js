const localLayout = function() {
   const content = document.getElementById('content')

   // Hero for the page
   const hero = document.createElement('section');
   hero.classList.add('hero-content');

   const locMessage = document.createElement('h1');
   locMessage.textContent = 'Locations!';
   const heroMessage = document.createElement('p');
   heroMessage.textContent = 'Eat at any of our amazing establishments!';

   hero.appendChild(locMessage)
   hero.appendChild(heroMessage)

   // Locations
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('info')
    const locArr = [
        "123 Whisker Way, Felineville, NJ",
        "456 Meow Street, Purrborough, NC",
        "789 Claw Lane, Whiskerburg, NY"
    ]

    const showLocations = function(arr, element) {
        for (let i=0; i < arr.length; i++) {
            const addr = document.createElement('p');
            addr.textContent = arr[i];
            element.appendChild(addr);
        }
    }
    
    showLocations(locArr, locationDiv)
    


   // Content Layout
   content.appendChild(hero)
   content.appendChild(locationDiv)

}

export default localLayout;