import XNode from "@web-atoms/core/dist/core/XNode";
import styled from "@web-atoms/core/dist/style/styled";
import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";
import Action from "@web-atoms/core/dist/view-model/Action";
import OneWayPage from "../one-way/OneWayPage";
import TwoWayPage from "../two-way/TwoWayPage";
import OneWayAsyncPage from "../one-way-async/OneWayAsyncPage";
import PageNavigator from "@web-atoms/web-controls/dist/PageNavigator";
import StylePage from "../style/StylePage";
import EventPage from "../event/EventPage";

import "./Home.local.less";

const homeCSS = "pages-home";

export default class HomePage extends ContentPage {

    public async init() {
        this.renderer = <div class={homeCSS}>
            <h1>Binding Examples</h1>

            <a
                data-click-event="open-page"
                data-page="OneWayPage"
                text="One Way Binding"/>

            <a
                data-click-event="open-page"
                data-page="TwoWayPage"
                text="Two Way Binding"/>

            <a
                data-click-event="open-page"
                data-page="OneWayAsyncPage"
                text="One Way Async Binding"/>

            <a
                data-click-event="open-page"
                data-page="StylePage"
                text="Style Binding"/>

            <a
                data-click-event="open-page"
                data-page="EventPage"
                text="Event Binding"/>

        </div>;
    }

    @Action({
        onEvent: "open-page"
    })
    openPage({ page }) {
        const p = {
            OneWayPage,
            TwoWayPage,
            OneWayAsyncPage,
            StylePage,
            EventPage,
        }[page];

        PageNavigator.openPage(p);
    }

}
