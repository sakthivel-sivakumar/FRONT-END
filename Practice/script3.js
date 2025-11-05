async function getPost(){
    // let data = await fetch("https://jsonplaceholder.typicode.com/users")
    // let converteddata = await data.json();
    // console.log(converteddata[0].address.city)

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

getPost()