export default function intToString(num){
    if(num>=1000000000000){
        num/=1000000000;
        return num.toFixed(2)+"T";
    }
    if(num>=1000000000){
        num=num/1000000000;
        return num.toFixed(2)+"B";
    }
    if(num>=1000000){
        num=num/1000000;
        return num.toFixed(2)+"M";
    }
    if(num>=1000){
        num=num/1000;
        return num.toFixed(2)+"K";
    }
    return num;
}