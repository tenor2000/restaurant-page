 import myMenu from './menu.json';
 
 const menuLayout = function() {
    const content = document.getElementById('content')

    // Hero for the page
    const hero = document.createElement('section');
    hero.classList.add('hero-content');

    const menuMessage = document.createElement('h1');
    menuMessage.textContent = 'Embark on a gastronomic journey like no other at Catfish Grill!';
    const heroMessage = document.createElement('p');
    heroMessage.innerHTML = `<p>Delight your taste buds with our tantalizing <strong>Meow-meow Mackerel Medley</strong>, where juicy mackerel fillets seasoned with a secret blend of herbs and spices await to whisk you away to flavor paradise.</p>
    <p>Indulge in the purrfection of our <strong>Fancy Feast Flounder Florentine</strong>, featuring tender flounder fillets adorned with a creamy spinach and cheese sauce that will make your heart flutter.</p>
    <p>Come experience the ultimate fusion of flavor and feline finesse, only at <strong>The Catfish Grill</strong>!</p>`;

    hero.appendChild(menuMessage)
    hero.appendChild(heroMessage)

    // Menu from the menu json file
    const displayMenu = function(courseArray, element) {
        courseArray.forEach (item => {
            const menuItem = document.createElement('li');
            menuItem.innerHTML = `<strong>${item.name}</strong> - ${item.description}`;
            element.appendChild(menuItem)
        })
    }

    const appetizers = document.createElement('ul');
    appetizers.textContent = "Appetizers";
    displayMenu(myMenu.appetizers, appetizers)

    const mainCourse = document.createElement('ul');
    mainCourse.textContent = "Main Courses";
    displayMenu(myMenu.main_courses, mainCourse)

    const desserts = document.createElement('ul');
    desserts.textContent = "Desserts";
    displayMenu(myMenu.desserts, desserts)

    const beverages = document.createElement('ul');
    beverages.textContent = "Beverages";
    displayMenu(myMenu.beverages, beverages)


    // Content Layout
    content.appendChild(hero)
    content.appendChild(appetizers)
    content.appendChild(mainCourse)
    content.appendChild(desserts)
    content.appendChild(beverages)

}

export default menuLayout;