import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MxBidMessage {
  private subject = new Subject<any>();
  
  send(data){
    this.subject.next(data);
  }

  clear(){
    this.subject.next();
  }

  look(): Observable<any>{
     return this.subject.asObservable();
  }

}


export class MxBidValidate {
    
    private static inBids:any = [];

    static validateIsNewBid(id: number, price){
         
         let data = MxBidValidate.hasBid(id);
         let isNew = false;
         if( data !==  false){
             isNew =  MxBidValidate.validateDiff( price, data['price']);
             if( isNew == true) 
                  MxBidValidate.remove(id);
             MxBidValidate.add(id,price);
             
         }
                

         return isNew;
    }
    /**
     * 
     * 
     * @static
     * @param {any} id 
     * @param {any} price 
     * 
     * @memberof MxBidValidate
     * @return void
     */
    static add(id, price){
      MxBidValidate.inBids.push({id:id, price:price});
    }

    /**
     * 
     * @param id 
     * @return void
     */ 
    private static remove(id){
               let index = MxBidValidate.findIndexOf(id);
               if( index > -1) 
               MxBidValidate.inBids.splice(index, 1);
    }
    /**
     * 
     * 
     * @private
     * @static
     * @param {any} price 
     * @param {any} old 
     * @returns 
     * 
     * @memberof MxBidValidate
     */
    private static validateDiff(price, old){
      
      return price != old;
    }

    private static hasBid(id){
         let index = MxBidValidate.findIndexOf(id);
         let has = false;
         if( index > -1 )
              has = MxBidValidate.inBids[index];
         return has;
    }


    private static findIndexOf( id ){
         let bids = MxBidValidate.inBids;
         if( bids.length == 0) return -1;

         for( let i in bids ){
               let row = bids[i];
               if(row.id == id)
                   return i;    
         }

         return -1;

    }

}



