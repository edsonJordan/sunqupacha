// types.ts
export interface PostNode {
    slug: string;
  }
  
  export interface QueryResult {
    allPost: {
      nodes: PostNode[];
    };
  }