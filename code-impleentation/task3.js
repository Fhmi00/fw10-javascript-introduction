function fazzfood( harga, voucher, jarak, pajak ) {
    const voucher1 = 'FAZZFOOD50'
    const voucher2 = 'DITRAKTIR60'
    if(harga >= 50000 && voucher == voucher1) {
        if(pajak == true) {
        if(jarak <= 2) {
            ongkir = 5000;
            potongan = harga*0.5;
            pajak = potongan*0.05;
            total = potongan + ongkir;
            console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +ongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
       } else{
           ongkir = 5000 + ((jarak - 2) * 3000);
           potongan = harga*0.5;
           pajak = potongan*0.05;
           total = potongan + ongkir;
           console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +ongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)          
       }
    } else{
        if (jarak <= 2){
            ongkir = 5000;
            potongan = harga*0.5;
            total = potongan + ongkir;
            console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +ongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
       } else{
           ongkir = 5000 + ((jarak - 2) * 3000);
           potongan = harga*0.5;
           total = potongan + ongkir;
           console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +ongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
           
       }
    }
    } else if(harga >= 25000 && voucher == voucher2) {
        if(pajak == true) {
        if(jarak <= 2) {
            ongkir = 5000;
            potongan = harga*0.6;
            pajak = potongan*0.05;
            total = potongan + ongkir *0.05;
            console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +ongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
       } else{
           ongkir = 5000 + ((jarak - 2) * 3000);
           potongan = harga*0.6;
           pajak = potongan*0.05;
           total = potongan + ongkir;
           console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +ongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
           
       }
    } else{
        if (jarak <= 2){
            ongkir = 5000;
            potongan = harga*0.6;
            total = potongan + ongkir;
            console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +ongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
       } else{
           ongkir = 5000 + ((jarak - 2) * 3000);
           potongan = harga*0.6;
           total = potongan + ongkir;
           console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +ongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
           
       }
    }
    }
    }
    
    fazzfood(60000, 'FAZZFOOD50', 5, true)