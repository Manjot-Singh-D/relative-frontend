import { ICard } from "../Model/ICard";

export class CardServices{
    private static cardDetails:ICard[]=[
        {
            id:1,
            icon:"BitcoinSV(BSV).svg",
            name:"Bitcoin (BTC)",
            price:"$31,812.80",
            percentage:"+10%",
            total_val_locked:"$60,000",
            pairs:["Solana(SOL).svg",
            "Ethereum(ETH).svg",
            "BinanceCoin(BNB).svg"]
        },
        {
            id:2,
            icon:"Solana(SOL).svg",
            name:"Solana (SOL)",
            price:"$32.83",
            percentage:"-12.32%",
            total_val_locked:"$60,000",
            pairs:["BitcoinSV(BSV).svg",
            "Ethereum(ETH).svg",
            "BinanceCoin(BNB).svg"]
        },
        {
            id:3,
            icon:"Ethereum(ETH).svg",
            name:"Ethereum (ETH)",
            price:"$1,244.45",
            percentage:"-11.93%",
            total_val_locked:"$60,000",
            pairs:["Solana(SOL).svg",
            "BitcoinSV(BSV).svg",
            "BinanceCoin(BNB).svg"]
        },
        {   
            id:4,
            icon:"BinanceCoin(BNB).svg",
            name:"Binance USD (BUSD)",
            price:"$1.80",
            percentage:"+0.26%",
            total_val_locked:"$60,000",
            pairs:["Solana(SOL).svg",
            "Ethereum(ETH).svg",
            "BinanceCoin(BNB).svg"]
        },
        {
            id:5,
            icon:"SHIBAINU(SHIB).svg",
            name:"Shiba Inu (SHIB)",
            price:"$0.00000001948",
            percentage:"-8.1%",
            total_val_locked:"$60,000",
            pairs:["Solana(SOL).svg",
            "Ethereum(ETH).svg",
            "BinanceCoin(BNB).svg"]
        },
    ];

    public static getCardDetails=():ICard[]=>{
        return this.cardDetails;
    }
};