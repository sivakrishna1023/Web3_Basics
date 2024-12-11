const express=require('express');

const app=express();

app.use(express.json());

let ETH_Balance= 500;
let USDC_Balance= 10000000;

app.post('/buy-asset',(req,res)=>{
    const quantity= req.body.quantity;
    const Updated_ETH_Balance=ETH_Balance-quantity;
    const Updated_USDC_Balance=ETH_Balance* USDC_Balance / Updated_ETH_Balance;
    const Price=Updated_USDC_Balance-USDC_Balance;
    ETH_Balance=Updated_ETH_Balance;
    USDC_Balance=Updated_USDC_Balance;
    res.json({
        Message:`Paid Amount of ${Price} for Quantity ${quantity}`
    })
})

app.post('/sell-asset',(req,res)=>{
    const quantity=req.body.quantity;
    const Updated_ETH_Balance=ETH_Balance+quantity;
    const Updated_USDC_Balance=ETH_Balance * USDC_Balance / Updated_ETH_Balance ;
    const Price=USDC_Balance-Updated_USDC_Balance;
    USDC_Balance=Updated_USDC_Balance;
    ETH_Balance=Updated_ETH_Balance;
    res.json({
        Message:`For Quantity  ${quantity} You got ${Price} Amount`
    })
})


app.get('/',(req,res)=>{
    res.json({
        Message:"Hey there"
    })
})
app.listen(3001,()=>{
    console.log("I am Running");
});
