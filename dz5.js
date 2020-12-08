// const name = document.getElementById('name')
// const butt = document.getElementById('button1')

// butt.addEventListener('click', (event) => {

//     console.log(name.value);

//     let film = name.value


// let responce = fetch(`http://api.tvmaze.com/search/shows?q=${film}`);
// responce
//     .then((responce) =>{
//         return responce.json();
//     })

//     .then(items => {
//         console.log('Films: ', items);
//     })

//  });
 
//33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333

const butt = document.getElementById('button1')
 
const name_img = document.getElementById('name_and_img')

function santa(items){
    name_img.innerHTML = '';        
        for (let i=0; i < items.length; i++){
        let all  = document.createElement('div');
            all.classList.add('block');
            let names = document.createElement('p');
            names.innerHTML = `Name: ${items[i]['show']['name']}`;

            let img = document.createElement('img'); 

            if (items[i]['show']['image']) {
                img.setAttribute('src', `${items[i]['show']['image']['medium']}`);
            } else{
                img.setAttribute('src' ,"https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-sad-emoticon-icon-png-image_757271.jpg")
            }
            all.appendChild(names);
            all.appendChild(img);
            name_img.appendChild(all);

        }
    }
butt.addEventListener('click', (event) => {
    const name = document.getElementById('name'); 
    const film = name.value;
    let responce = fetch(`http://api.tvmaze.com/search/shows?q=${film}`);
    responce
        .then((data) =>{
            return data.json();
        })

        .then(items => {        
            console.log('Films: ', items);
            santa(items)
        })
    });
