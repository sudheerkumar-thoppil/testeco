function messageshow(){
    const storename=document.getElementById("store").innerHTML="Cart";
    document.getElementById("cartname").innerHTML="storename";
    btnClick.innerHTML="Cart Page";
}

function kartmessage(id){
    id=parseInt(id)
    const productId=document.getElementById('product_id')
    if(id==productId){
        console.log(id)
        const proName=document.getElementById('pName')
        const proPrice=document.getElementById('pPrice');
        const kartButton =document.getElementById('kartBtn');
        kartButton.innerHTML="Added";
        alert( proName.textContent);
        // console.log(proName.textContent);
        // console.log(proPrice.textContent)
        console.log(typeof(id))
        console.log("ID SAME")
        alert()
    }else{
        console.log("NOT")
        console.log(id)
        console.log(productId.textContent)

    }
    
    
}
