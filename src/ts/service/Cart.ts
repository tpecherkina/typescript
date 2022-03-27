import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
          }
  
  allSum() {
        return this._items.reduce((total, item) => total + item.price, 0);
    }

    allSumDiscount(discountAmount: number): number {
        return this.allSum() * discountAmount / 100;
    }

    finalTotalSum(discountValue: number): number {
        return this.allSum() - this.allSumDiscount(discountValue);
    }

    deleteCart(id: number): void {
        const index = this._items.findIndex((item) => item.id === id);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }
}
