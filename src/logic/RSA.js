export class RSA{
    //----------------------------------------------------------------------------------------------
    constructor(){
        const {p,q} = this.getRandomPQ()
        this.p = p
        this.q = q
        this.n = p*q
        this.t = (p-1)*(q-1) //totient
        this.e = this.getE(this.t)
        this.d = this.getD(this.e,this.t)
        this.dict = {
            a:0,b:1,c:2,d:3,
            e:4,f:5,g:6,h:7,i:8,j:9,
            k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,
            u:20,v:21,w:22,x:23,y:24,z:25,' ':26
        }
        console.log("p is ",this.p)
        console.log("q is ",this.q)
        console.log("n is ",this.n)
        console.log("e is ",this.e)
        console.log("d is ",this.d)
        console.log("t is ",this.t)
        console.log("e*d mod t is",(this.e*this.d)%this.t)
    }
    //----------------------------------------------------------------------------------------------
    getRandomNumber(min,max){ 
        return Math.floor((Math.random()*(max-min))+min)
    }
    isPrime(n){
        for(let i=2;i<n;i++) if(n%i === 0) return false
        return true
    }
    getRandomPrimeNumber(min,max){
        let current = this.getRandomNumber(min,max)
        while(!this.isPrime(current)) current = this.getRandomNumber(min,max)
        return current
    }
    getRandomPQ(){
        let min = 100 , max = 2000
        return {p : this.getRandomPrimeNumber(min,max),q : this.getRandomPrimeNumber(min,max)}
    }
    //----------------------------------------------------------------------------------------------
    gcd(n1,n2){
        while(n1 !== n2){
            if(n1 > n2) n1-=n2
            else n2-=n1
        } return n1
    }

    getE(t){
        for(let i=2;i<t;i++) if(this.gcd(i,t) === 1) return i
        return -1
    }
    //----------------------------------------------------------------------------------------------
    extendedEuclideanAlgorithm(a,b){
        let aa = [1,0], bb = [0,1] , q = 0
        while(true){
            q = parseInt(a / b); a = a % b
            aa[0] = aa[0] - q*aa[1];  bb[0] = bb[0] - q*bb[1]
            if(a === 0) return aa[1]
            q = parseInt(b / a); b = b % a
            aa[1] = aa[1] - q*aa[0];  bb[1] = bb[1] - q*bb[0]
            if(b === 0) return aa[0]
        }
    }

    getD(e,t){
        const d = this.extendedEuclideanAlgorithm(e,t)
        if(d < 0) return t+d
        else return d
    }
    //----------------------------------------------------------------------------------------------
    getAll(){
        return {p:this.p,q:this.q,n:this.n,t:this.t,e:this.e,d:this.d}
    }
    //----------------------------------------------------------------------------------------------
    encrpyt(msg){
        let result = []
        for(let i=0;i<msg.length;i++){
            let current = this.dict[msg[i]]
            result.push(Math.pow(current,this.e)%this.n)
            // let newValue = Math.pow(current,this.e)%this.n
            // newValue %= 27
            // result.push(String.fromCharCode(newValue+97))
        }
        // console.log("Result ",result)
        return result
    }
    //----------------------------------------------------------------------------------------------
}