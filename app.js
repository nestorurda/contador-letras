function counterLetter() {
    let repeticionesL = {}
    textOne = document.getElementById('texto-entrada').textContent.toLowerCase().replace(/[0-9.,:\r\n|\n|\r]/g, ' ').replaceAll(' ', '').split('');
    textOne.forEach((letra) => {
        repeticionesL[letra] = (repeticionesL[letra] || 0) + 1;
    });

    for (letra in repeticionesL) {
        let text = `${letra} = ${repeticionesL[letra]}<br>`;
        document.getElementById('resultados-letter').innerHTML += text;
    }

}
counterLetter();

function workData() {
    let repeticionesW = []
    textTwo = document.getElementById('texto-entrada').textContent.toLowerCase().replace(/[0-9.,:\r\n|\n|\r]/g, ' ').split(' ');
    textTwo.forEach((word) => {
        repeticionesW[word] = (repeticionesW[word] || 0) + 1;
    });

    for (word in repeticionesW) {
        let text = `${word} = ${repeticionesW[word]}<br>`;
        document.getElementById('resultados-word').innerHTML += text;
    }


}

workData()