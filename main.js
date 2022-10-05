const list = document.getElementById('mylist');
const masse = document.getElementById('masse');
const firstSize = `<b>Brief und Postkarte</b> <br>
    	L: 10 - 23,5 cm
    	B: 7 - 12,5 cm
    	H: bis 1 cm`;
const secondSize = `<b>DHL Paket 2 kg</b> <br>
      bis 60 x 30 x 15 cm`;
const thirdSize = `<b>DHL Paket 5 kg</b> <br>
      bis 120 x 60 x 60 cm`;
const fourthSize = `<b>DHL Paket 10 kg</b> <br>
      bis 120 x 60 x 60 cm`;

const showtxt = () => {
    switch (list.value) {
        case '0':
            masse.innerHTML = firstSize;
            break;
        case '1':
            masse.innerHTML = secondSize;
            break;
        case '2':
            masse.innerHTML = thirdSize;
            break;
        case '3':
            masse.innerHTML = fourthSize;
            break;
        default:
            masse.innerHTML = `<b>Extra große Größe</b>`;
    }
};

/* JS Assets

<b>Brief und Postkarte</b> <br>
    	L: 10 - 23,5 cm
    	B: 7 - 12,5 cm
    	H: bis 1 cm

<b>DHL Paket 2 kg</b> <br>
      bis 60 x 30 x 15 cm

<b>DHL Paket 5 kg</b> <br>
      bis 120 x 60 x 60 cm

<b>DHL Paket 10 kg</b> <br>
      bis 120 x 60 x 60 cm

"<b>Extra große Größe</b> */
