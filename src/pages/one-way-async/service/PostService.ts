import DISingleton from  "@web-atoms/core/dist/di/DISingleton";
import FetchBuilder, { buildUrl } from "../fetch-builder/FetchBuilder";

@DISingleton()
export default class PostService {

    public async search({ search, cancelToken, start = 0, size = 10}) {
        const url = buildUrl `https://dummyjson.com/posts/search?q=${search}&skip=${start}&limit=${size}`;
        const r = await FetchBuilder
            .get(url, cancelToken)
            .json<IPostSearchResult>();
        (r.posts as any).total = r.total; 
        return r.posts;
    }

}

export interface IPostSearchResult {
    posts: [{
        id: number;
        title: string;
        reactions: number;
        userId: number;
        tags: string[];
    }],
    total: number;
    skip: number;
    limit: number;
}

export type IPost = IPostSearchResult["posts"][0];