export interface CompanyDetail{
    id:number,
    date: Date;
    listName: string;
    entities: number;
    details: Detail[];
  }
  export interface Detail{
      companyName:string;
  }
  