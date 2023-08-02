// export interface Articles {
//    id: number,
//    title: string,
//    url: string,
//    image_url: string,
//    summary: string,
//    published_at: Date | string,
// }

export interface Articles {
   id: any,
   title: string,
   url: string,
   urlToImage: string,
   description: string,
   publishedAt: Date | string,
}

export interface ArticlesOptions {
   limit?: number;
   sortParam?: string;
   search?: string;
}

