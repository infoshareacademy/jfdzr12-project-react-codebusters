export interface PortfolioInterface {
    author: string;
    height: number;
    id: number;
    price: number;
    url: string;
    width: number;
  }

export interface PortfolioDataInterface {
  photos: Array<PortfolioInterface>;
}