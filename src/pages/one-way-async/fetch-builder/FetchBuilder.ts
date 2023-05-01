import { CancelToken } from "@web-atoms/core/dist/core/types";

type fetchFunction = (r: any) => Promise<any>;
interface IKVP {
    [k: string]: string | number | boolean | null | undefined;
}

export function buildUrl(strings: TemplateStringsArray, ... p: any[]) {
    let r = "";
    for (let index = 0; index < strings.length; index++) {
        const element = strings[index];
        r += element;
        if(index < p.length) {
            r += encodeURIComponent(p[index]);
        }
    }
    return r;
}

const toAbortController = (cancelToken: CancelToken) => {
    const c = new AbortController();
    cancelToken?.registerForCancel((r) => c.abort(r));
    return c;
};

export default class FetchBuilder {

    
    public static get(url, cancelToken?: CancelToken) {
        const ac = toAbortController(cancelToken);
        const signal = ac.signal;
        return new FetchBuilder(ac, fetch(url, { signal }));
    }

    public static postJson(url, json: any, cancelToken?: CancelToken, doNotEncode = false) {
        const ac = toAbortController(cancelToken);
        const signal = ac.signal;
        return new FetchBuilder(ac, fetch(url, {
                method: "POST",
                headers: {
                    "content-type": "application-json"
                },
                body: doNotEncode ? json : JSON.stringify(json)
            }));
    }

    private constructor(private abortController: AbortController, private responePromise: Promise<Response>) {

    }

    public async text(cancelToken?: CancelToken) {
        cancelToken?.registerForCancel((r) => this.abortController.abort(r));
        const r = await this.responePromise;
        if (r.status > 300) {
            throw new Error(await r.text());
        }
        return r.text();
    }

    
    public async json<T>(cancelToken?: CancelToken): Promise<T> {
        cancelToken?.registerForCancel((r) => this.abortController.abort(r));
        const r = await this.responePromise;
        if (r.status > 300) {
            throw new Error(await r.text());
        }
        return await r.json();
    }
}