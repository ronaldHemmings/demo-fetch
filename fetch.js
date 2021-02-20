fetch('./Users/ronaldhemmings/Desktop/Bootcamp/Proyecto 2/prueba.js')
    .then((response) => {
    return response.json()
    })  
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
    })
    