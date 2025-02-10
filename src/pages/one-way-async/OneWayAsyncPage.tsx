import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";
import InjectProperty from "@web-atoms/core/dist/core/InjectProperty";
import PostService, { IPost } from "./service/PostService";
import XNode from "@web-atoms/core/dist/core/XNode";
import AtomRepeater from "@web-atoms/web-controls/dist/basic/AtomRepeater";
import Bind from "@web-atoms/core/dist/core/Bind";

import "./OneWayAsyncPage.local.less";

const postCss = "one-way-async-post";

export default class OneWayAsyncPage extends ContentPage {

    // It is important to set the property to non undefined value.
    // as binding ignores undefined value.
    private search: string = "";

    private start: number = 0;

    private size: number = 10;


    @InjectProperty
    private postService: PostService;

    public async init() {
        this.renderer = <div data-layout="center-all">
            <div>Loading....</div>
        </div>;

        // it is important to set start to zero when search changes
        this.headerRenderer = () => <div data-layout="row">
            <input
                type="search"
                event-input={() => this.start = 0}
                value={Bind.twoWaysImmediate(() => this.search)}
                placeholder="Search in post title..."/>
        </div>;

        this.renderer = <div>
            <AtomRepeater
                items={Bind.oneWayAsync((c, e, cancelToken) => 
                    this.postService.search({
                        search: this.search,
                        start: this.start,
                        size: this.size
                        , cancelToken})
                )}
                itemRenderer={(item: IPost) => <div class={postCss}>
                    <span class="title" text={item.title}/>
                    <div class="reaction">
                        <i class="fas fa-heart"/>
                        <span text={item.reactions}/>
                    </div>
                    <div class="tags">
                        { ... item.tags.map((x) => <span text={"#" + x}/>)}
                    </div>
                </div>}
                />
        </div>;

        this.footerRenderer = () => <div data-layout="row">
            <button
                disabled={Bind.oneWay(() => this.start <= 0)}
                event-click={() => this.start -= this.size}
                text="Prev"/>
            <button
                event-click={() => this.start += this.size}
                text="Next"/>
        </div>;
        
    }

}