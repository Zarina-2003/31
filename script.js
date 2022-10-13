









function retur(str) {

    let result = [];

    str.split(' ').map(word => word.charAt(0) != '' ? result.push(word.charAt(0)) : '');


    if (result[0] == "-") {
        console.log(false);
    } else if (nb == "" || nb == " ") {
        console.log('error');

    } else {
        console.log(true);

    }
    
    return result;
}

let nbr = prompt().trim();

let nb = nbr

retur(nb)





