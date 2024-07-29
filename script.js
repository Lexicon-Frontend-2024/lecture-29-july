console.log('Hello World!');

setup();

function setup() {
    let userList = [...users];
    validateLogin(userList);
    validateRegistration(userList);
}

function validateLogin(userList) {
    let loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('Form submitted');
    
        try {
            let username = event.target.username.value;
            let password = event.target.password.value;
    
            if(userList.some(user => user.username === username)) {
                let user = userList.find(user => user.username === username);
                if(user.password === password) {
                    document.querySelector('#loginError').textContent = 'Login successful';
                } else {
                    throw new Error('Incorrect password');
                }
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            document.querySelector('#loginError').textContent = error.message;
        }
    });
}

function validateRegistration(userList) {
    let registerForm = document.querySelector('#registerForm');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();

        try {
            let username = event.target.regUsername.value;
            let password1 = event.target.password1.value;
            let password2 = event.target.password2.value;

            if(userList.some(user => user.username === username)) {
                throw new Error('User already exists!');
            } else if(password1 !== password2) {
                throw new Error('Passwords do not match!');
            } else {
                let user = {
                    username : username,
                    password : password1
                }
                userList.push(user);
                document.querySelector('#registerError').textContent = 'User registered';
            }

        } catch (error) {
            document.querySelector('#registerError').textContent = error.message;
        }
    });
}


// localStorage med arrayer och objekt
// pokemons.forEach(pokemon => {
//     let pokemonContainerRef = document.querySelector('#pkmnContainer');
//     let pRef = document.createElement('p');
//     pRef.textContent = pokemon.name;
//     pokemonContainerRef.appendChild(pRef);

//     let btnRef = document.createElement('button');
//     btnRef.textContent= 'Add to favorites';
//     pokemonContainerRef.appendChild(btnRef);

//     btnRef.addEventListener('click', () => {
//         addToFavorites(pokemon);
//     });
// });

// function addToFavorites(pokemon) {
//     let favPokemonList = JSON.parse(localStorage.getItem('favoritePokemons')) || [];
//     console.log(favPokemonList);
//     favPokemonList.push(pokemon);

//     localStorage.setItem('favoritePokemons', JSON.stringify(favPokemonList));
// }


// Basic localStorage
// localStorage.setItem('firstName', 'Jesper');
// localStorage.setItem('lastName', 'Nyberg');
// localStorage.setItem('age', 33);

// let fName = localStorage.getItem('firstName');
// let lName = localStorage.getItem('lastName');
// let age = localStorage.getItem('age');

// console.log(fName, lName, age);

// localStorage.removeItem('age');

// console.log(localStorage.key(1));

// for(let i = 0; i < localStorage.length; i++) {
//     console.log(localStorage.key(i));
// }

// localStorage.clear();