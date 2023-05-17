window.onload = function() {
    //creation of any element
    // let tempElement = document.createElement('div');
    // tempElement.textContent = 'My first content created';

    // let parentElement = document.getElementById('container');
    // parentElement.appendChild(tempElement);
    // console.log(tempElement);


    // let tempElement2 = document.createElement('div');
    // tempElement2.textContent = 'My first content created';
    // let parentElement = document.getElementById('container');
    // let headingElement = document.getElementById('heading2');
    // parentElement.insertBefore(tempElement2, headingElement)


    // let tempElement3 = document.createElement('div');
    // tempElement3.textContent = 'My first content created';
    // document.body.appendChild(tempElement3);



    // let tempElement4 = document.createElement('div');
    // tempElement4.textContent = 'My first content created';
    // let parentElement = document.getElementById('container');
    // document.body.insertBefore(tempElement4, parentElement)




    // let headingElement = document.getElementById('heading2');
    // let parentElement = document.getElementById('container');
    // document.body.insertBefore(headingElement, parentElement)


    // let headingElement = document.getElementById('heading2');
    // let parentElement = document.getElementById('container');
    // parentElement.removeChild(headingElement)



    // let tempElement = document.createElement('img');
    // tempElement.setAttribute('src', 'https://img.indiaforums.com/person/640x480/0/0003-salman-khan.jpg?c=7cP0B0');
    // document.body.appendChild(tempElement)


    let tempElement = document.createElement('img');
    tempElement.setAttribute('src', 'https://img.indiaforums.com/person/640x480/0/0003-salman-khan.jpg?c=7cP0B0');
    
    let divElement = document.createElement('div');
    divElement.classList.add('image-div');
    divElement.setAttribute('id', 'image1');
    divElement.appendChild(tempElement);
    
    document.body.appendChild(divElement); 


    let obj = {name: 'deepak', age: 111111111111}
    window.localStorage.setItem('loginStatus', true);
    localStorage.setItem('username', 'deepak')
    localStorage.setItem('obj', JSON.stringify(obj))


    console.log(localStorage.getItem('loginStatus'))
    console.log(localStorage.getItem('username'))
    console.log(localStorage.getItem('obj'))

    localStorage.removeItem('username');

    localStorage.clear()




    // fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(error => console.log(error))



    // async function abc () {
    //   let temp = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   let data = await temp.json()
    //   console.log(data.bpi.USD)
    //   }
    //   abc()



    function job() {
      return new Promise(function(resolve, reject) {
          reject();
        });
      }

      let promise = job();

      promise
      .then(function() {
      console.log('Success 1');
      })
      .then(function() {
      console.log('Success 2');
      })
      .then(function() {
      console.log('Success 3');
      })
      .catch(function() {
      console.log('Error 1');
      })
      .then(function() {
      console.log('Success 4');
      });



      // axios vs fetch
      // parsed JSON -- stringified json 
      // response.data -- response




}


//HW - https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics/numbers-table.png


//Async JS
// JS Engine/Browsers
// timer functionality - setTimeout, setInterval, clearTimeout, clearInterval
// all type of API calls (HTTP/SMTP/SSH/FTP) - communication/data transfer with other server



//js engine handling of async behaviour
// Event Loop



//how code handles asyn js

// callback functions
// ES6 - Promise / async await (callback methods internally)





// Object - keys, values, entries
// Object - create, assign


// Scope - local vs global, function

// abc is function or not
// object is empty or not


// obj = {}

// obj = {
//     name: 'test'
// }


// Object.keys(obj).length == 0


// break continue

// for() {
//     if () - continue
//     alweif
//     awieuf
//     awieufAED
//     dB4H2F2ImhyDxn2RTG5AWrryumyow4y7qX6zZJY1pW4G7JNXfvWzDldX5Udnhtw7_Usp_eqANHx0D0hREUrKMEGVScZIdjQT2ShEQDt6EdDsU
//     continue
// }