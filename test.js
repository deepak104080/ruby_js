window.onload = function() {
    console.log(document.getElementById('notice').innerHTML);
    console.log(document.getElementById('notice').innerText);
    console.log(document.getElementById('notice').textContent);

    // document.getElementsByClassName('uui-heading-xlarge')[0].textContent = 'New Text';


    document.getElementById('engine').setAttribute('width', '400')
    document.getElementById('engine').getAttribute('src')


    document.getElementById('id1').style.color = 'red'
    document.getElementById('id1').style.display = 'none'
    document.getElementById('id1').style.display = 'block'

    //find all the methods to hide show any element


    document.getElementById('id2').classList.add('hahahahaha');
    document.getElementById('id2').classList.remove('hahahahaha');

    document.getElementById('engine').hasAttribute('height')
    document.getElementById('engine').hasAttribute('width')
    document.getElementById('engine').removeAttribute('width')




    const img1 = document.getElementById('image1');
    img1.setAttribute('src', 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png');

    const img2 = document.getElementById('image2');
    img2.setAttribute('src', 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png');


}




// console.log(document)
// console.log('Hello world in external js file.');


// let num = 10;

// let str = 'string';

// let arr = [1,2,3,4,5];

// let sym = Symbol('abc');


// console.log('Number is - ', num, typeof(num));
// console.log('String is - ', str, typeof(str));
// console.log('Array is - ', arr, typeof(arr));
// console.log('Symbol is - ', sym, typeof(sym));



// let a
// console.log(a, typeof(a));

// let b = 0;
// console.log(b, typeof(b));

// let c = null;
// console.log(c, typeof(c));

// let e = 5 / 'abc';
// console.log(e, typeof(e));

// console.log(d)


