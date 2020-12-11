export interface Token {
    tokenid: any;
    token: string;
    description: string;
    icon: string;
    proof: string;
    total: string;
    script: string;
    coinid: string;
    totalamount: number;
    scale: string; 
    confirmed: number;
    unconfirmed: any;
    mempool: number;
    sendable: number;
}