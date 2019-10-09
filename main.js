function printReceipt (barcodes, listOfProducts) {
    var uniqueBarcodes = [...new Set(barcodes.map(a => a))];
    var Quantity = 0;
    var ProductName = '';
    var ProductPrice = 0;
    var ReceiptTotal = 0;
    var concatReceipt = '';
    var ProductQuantity = 0;
    var header ="Receipts\n"+
    "------------------------------------------------------------\n";
  
    for(let i = 0; i <= uniqueBarcodes.length-1; i++)
    {
        // console.log(listOfProducts.map(m => m.id.includes(uniqueBarcodes[i])) + 'sdsdfsdbjhdbjhsdjkf '+ uniqueBarcodes[i]);
        if(ifBarcodeExists(listOfProducts.map(m => m.id.includes(uniqueBarcodes[i])))){

        }
        else{
            return "One of the items are not existing barcode";
        }
        
        for(let ii = 0; ii <= listOfProducts.length-1;ii++)
        {
            if(uniqueBarcodes[i] == listOfProducts[ii].id)
            {
                ProductName = listOfProducts[ii].name;
                ProductPrice = listOfProducts[ii].price;
                ProductQuantity++;
                ReceiptTotal += listOfProducts[ii].price * ProductQuantity;
            }
        }
        if(ProductName == 'Pepsi-Cola'){
            concatReceipt += ""+ProductName+"                      "+ProductPrice+"          "+ProductQuantity+"\n";
            ProductQuantity = 0;
        }
        else{
            concatReceipt += ""+ProductName+"                       "+ProductPrice+"          "+ProductQuantity+"\n";
        }   
    }

    var finalConcatReceipt = header + concatReceipt;
    var footer ="------------------------------------------------------------\n"+
    "Price: "+ReceiptTotal+"";
    var finalConcatReceipt = finalConcatReceipt + footer;
    return finalConcatReceipt;
}

function ifBarcodeExists (checkingList) {
    let findHasTrue = checkingList.includes(true);
    if(checkingList == false){
        return false
    }
    return findHasTrue;
}


module.exports = {
    printReceipt: printReceipt,
    ifBarcodeExists: ifBarcodeExists
};