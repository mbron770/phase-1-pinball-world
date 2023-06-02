// function init(){
//     const url = 'http://localhost:3000/games'
//     fetch(url)
//     .then(response => response.json())
//     .then(games => { 
//         games.forEach(game => renderGame(game))
//         displayGameDetails(games[0])
//     })
//     .catch(e=>alert(e.message))
//     document.querySelector('#high-score-form').addEventListener('submit', updateHighScore())
//     let selectedGame
//     function renderGame(game) {
//         const gameList = document.querySelector('.game-list')
//         const nameAndManufacturer = document.createElement('h5')
//         nameAndManufacturer.textContent = game.name+' ('+game.manufacturer_name+')'
//         gameList.append(nameAndManufacturer)
//         nameAndManufacturer.addEventListener('click', () => displayGameDetails(game))
//     }

//     function displayGameDetails(game) {
//         document.querySelector('#detail-image').src = game.image
//         document.querySelector('#detail-title').textContent = game.name
//         document.querySelector('#detail-high-score').textContent = game.high_score
//         selectedGame = game 
//     }

//     function updateHighScore(e) {
//         e.preventDefault()
//         const high_score = e.target['score-input'].value
//         const updateScore = {high_score}
//         fetch(`${url}/${selectedGame}`, {
//             method: 'PATCH', 
//             headers: {
//                 'Content-Type': 'application/json', 
//                 'Accept': 'application/json'
//             },
//             body:JSON.stringify(updateScore)
//         }).then(response => response.json())
//         .then(updatedGame => {
//             selectedGame.high_score = high_score
//             document.querySelector('#detail-high-score').textContent = selectedGame.high_score
//             e.target.reset()
//         }).catch(error => alert(error.message))


        

        
        

//     }

    
// }

// init()

function init(){
    const url = 'http://localhost:3000/games'
    fetch(url)
    .then(response => response.json())
    .then(games => games.forEach(game => {
        renderGame(game)
        //other fx
    })).catch(error => alert(error.message))

    function renderGame(game){
        const gameList = document.querySelector('.game-list')
        const nameAndManufacturer = document.createElement('h5')
        nameAndManufacturer.textContent = `${game.name} (${game.manufacturer_name})`
        gameList.append(nameAndManufacturer)
        nameAndManufacturer.addEventListener('click', () => {
            alert('it works')
        })
    }
}

init()

