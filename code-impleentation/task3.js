// function fazzFood( harga, voucher, jarak, pajak ) {
//     const voucher1 = 'FAZZFOOD50'
//     const voucher2 = 'DITRAKTIR60'
//     if(harga >= 50000 && voucher == voucher1) {
//         if(pajak == true) {
//         if(jarak <= 2) {
//             ongkir = 5000;
//             potongan = harga*0.5;
//             pajak = potongan*0.05;
//             total = potongan + ongkir;
//             console.log("Harga= " + harga)
//             console.log("potongan=" +potongan)
//             console.log("Biaya Antar=" +ongkir)
//             console.log("pajak=" +pajak)
//             console.log("Subtotal=" +total)
//        } else{
//            ongkir = 5000 + ((jarak - 2) * 3000);
//            potongan = harga*0.5;
//            pajak = potongan*0.05;
//            total = potongan + ongkir;
//            console.log("Harga= " + harga)
//             console.log("potongan=" +potongan)
//             console.log("Biaya Antar=" +ongkir)
//             console.log("pajak=" +pajak)
//             console.log("Subtotal=" +total)          
//        }
//     } else{
//         if (jarak <= 2){
//             ongkir = 5000;
//             potongan = harga*0.5;
//             total = potongan + ongkir;
//             console.log("Harga= " + harga)
//             console.log("potongan=" +potongan)
//             console.log("Biaya Antar=" +ongkir)
//             console.log("pajak=" +pajak)
//             console.log("Subtotal=" +total)
//        } else{
//            ongkir = 5000 + ((jarak - 2) * 3000);
//            potongan = harga*0.5;
//            total = potongan + ongkir;
//            console.log("Harga= " + harga)
//             console.log("potongan=" +potongan)
//             console.log("Biaya Antar=" +ongkir)
//             console.log("pajak=" +pajak)
//             console.log("Subtotal=" +total)
           
//        }
//     }
//     } else if(harga >= 25000 && voucher == voucher2) {
//         if(pajak == true) {
//         if(jarak <= 2) {
//             ongkir = 5000;
//             potongan = harga*0.6;
//             pajak = potongan*0.05;
//             total = potongan + ongkir *0.05;
//             console.log("Harga= " + harga)
//             console.log("potongan=" +potongan)
//             console.log("Biaya Antar=" +ongkir)
//             console.log("pajak=" +pajak)
//             console.log("Subtotal=" +total)
//        } else{
//            ongkir = 5000 + ((jarak - 2) * 3000);
//            potongan = harga*0.6;
//            pajak = potongan*0.05;
//            total = potongan + ongkir;
//            console.log("Harga= " + harga)
//             console.log("potongan=" +potongan)
//             console.log("Biaya Antar=" +ongkir)
//             console.log("pajak=" +pajak)
//             console.log("Subtotal=" +total)
           
//        }
//     } else{
//         if (jarak <= 2){
//             ongkir = 5000;
//             potongan = harga*0.6;
//             total = potongan + ongkir;
//             console.log("Harga= " + harga)
//             console.log("potongan=" +potongan)
//             console.log("Biaya Antar=" +ongkir)
//             console.log("pajak=" +pajak)
//             console.log("Subtotal=" +total)
//        } else{
//            ongkir = 5000 + ((jarak - 2) * 3000);
//            potongan = harga*0.6;
//            total = potongan + ongkir;
//            console.log("Harga= " + harga)
//             console.log("potongan=" +potongan)
//             console.log("Biaya Antar=" +ongkir)
//             console.log("pajak=" +pajak)
//             console.log("Subtotal=" +total)
           
//        }
//     }
//     }
//     }
    
//     fazzFood(150000, 'FAZZFOOD50', 5, false)

const hitungPajak = ( harga, pajak ) => {
    let valPajak
    if(pajak = true) {
        valPajak = harga*0.05
    }
    return valPajak
}

const discount = ( harga, voucher ) => {
    let potongan
    const code1 = 'FAZZFOOD50'
    const code2 = 'DITRAKTIR60'
    if(voucher = code1) {
        potongan = harga*0.5
        if(potongan <= 50000) {
            return potongan
        } else {
            potongan = 50000
        }
    } else if(voucher = code2) {
        potongan = harga*0.6
        if(potongan <= 30000) {
            return potongan
        } else {
            potongan = 30000
        }
    } else{
        console.log('Voucher yang anda masukkan salah');
    }
}

const hitungOngkir = ( jarak ) => {
    let ongkir
    if(jarak <= 2) {
        ongkir = 5000
    } else {
        ongkir = (jarak - 2)*3000 + 5000
    }
    return ongkir
}

const fazzFood = ( harga, voucher, jarak, pajak ) => {

    const potongan = discount( harga, voucher );
    const ongkir = hitungOngkir( jarak );
    const valPajak = hitungPajak( harga, pajak )
    let total = harga - potongan + ongkir + valPajak
    console.log
    (`    Harga Makanan : ${harga}
    Potongan : ${potongan}
    Biaya Antar : ${ongkir}
    Pajak : ${valPajak}
    Sub Total : ${total}`);
}

fazzFood(150000, "FAZZFOOD50", 5, true);
