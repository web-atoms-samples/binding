import XNode from "@web-atoms/core/dist/core/XNode";
import PopupService from "@web-atoms/core/dist/web/services/PopupService";
import ComboBox from "@web-atoms/web-controls/dist/basic/ComboBox";
import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";

export default class EventPage extends ContentPage {

    public async init() {
        this.render(<div data-layout="vertical-flex-center-items">
            <button
                event-click={() => PopupService.alert({ message: "Button was clicked"})}
                >Click me</button>
            <ComboBox
                event-input={() => PopupService.alert({ message: "Selection changed... "})}
                items={["One", "Two", "Three"]}
                />

            <a
                href="https://google.com"
                text="https://google.com"/>

            <div>In this example, we will prevent clicking of link by capturing event here.</div>
        </div>);

        const preventLinkClick = async (e: MouseEvent) => {
            let start = e.target as HTMLElement;
            while (start) {
                if (start.tagName === "A") {
                    e.preventDefault();
                    e.stopPropagation();
                    await PopupService.alert({ message: "Clicking outside links not permitted"});
                    return;
                }
                start = start.parentElement;
            }
        };

        // bindEvent will also remove the eventListener when the component will be disposed.
        this.bindEvent(this.element, "click", preventLinkClick, null , { capture: true });
    }

}
