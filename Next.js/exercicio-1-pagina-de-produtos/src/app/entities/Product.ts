export class Product {
  constructor(
    public name: string,
    public price: number,
    public imageUrl: string,
    public description: string,
    public chip: string,
    public id?: number,
  ) {
    this.id = Math.random();
  }
}
