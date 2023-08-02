export interface Articles {
   id: number,
   title: string,
   url: string,
   image_url: string,
   summary: string,
   published_at: Date | string,
}


export interface ArticlesOptions {
   limit?: number;
   sortParam?: string;
   search?: string;
}

