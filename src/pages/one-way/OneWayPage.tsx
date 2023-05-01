import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";

export default class OneWayPage extends ContentPage {
    public time: Date;

    public async init() {
        const timer = setInterval(
            (x) => x.time = new Date(),
            1000,
            this);
        
        // this will dispose the
        // timer when the page is
        // destroyed
        this.registerDisposable({
            dispose: () => {
                clearInterval(timer);
                // you can verify that the timer was disposed
                console.log("Timer disposed successfully.")
            }
        });

        this.render(<div>
            <div text={Bind.oneWay(() =>
                `Current time is ${this.time}`)}/>
        </div>);
    }
}
