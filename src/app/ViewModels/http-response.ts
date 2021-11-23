export interface HttpResponse {
  success:boolean;
  data:any;
  messages:string[];
  pageNo?:number;
  itemsPerPage?:number;
}
