
const homeLayout = function() {
    // Identify main part of page
    const content = document.getElementById('content')

    // Create hero for the page
    const hero = document.createElement('section')
    hero.classList.add('hero-content')

    const welcomeMessage = document.createElement('h1')
    welcomeMessage.textContent = "Welcome to The Catfish Grill!"
    const heroMessage = document.createElement('p')
    heroMessage.textContent = "Embark on a culinary adventure and savor the finest seafood creations crafted by our top-notch feline chefs! Indulge in an exquisite dining experience unlike any other as you discover the purrfection of our ocean-inspired dishes."

    hero.appendChild(welcomeMessage)
    hero.appendChild(heroMessage)

    // List Operating Hours
    const hoursOper = document.createElement('div');
    hoursOper.classList.add('info');
    const daysofOperation = ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday', 'Saturday', 'Sunday']
    for (let i=0; i < 7; i++) {
        const day = document.createElement('p')
        let hours = '6:00 AM - 9:00 PM'
        if (daysofOperation[i] === 'Monday') {
            hours = 'Closed';
        }
        day.textContent = `${daysofOperation[i]}: ${hours}`
        hoursOper.appendChild(day)
    }

    // Append the parts to the main content area
    content.appendChild(hero)
    content.appendChild(hoursOper)
}

export default homeLayout;