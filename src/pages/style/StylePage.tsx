import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";
import ComboBox from "@web-atoms/web-controls/dist/basic/ComboBox";

const colors = () => [
    "blue",
    "red",
    "green"
];

const bgColors = () => [
    "lightblue",
    "lightyellow",
    "lightgreen"
];

export default class StylePage extends ContentPage {

    private color: string = "blue";

    private bgColor: string = "lightgreen";

    public async init() {

        this.headerRenderer = () => <div data-layout="row">
            Color: 
            <ComboBox
                items={colors()}
                selectedItem={Bind.twoWaysImmediate(() => this.color)}
                />
            Background: 
            <ComboBox
                items={bgColors()}
                selectedItem={Bind.twoWaysImmediate(() => this.bgColor)}
                />
        </div>;

        this.render(<div>
            <p>This is a simple text.</p>
            <p>This is a <span style-color="red">red colored text</span></p>
            <p>This is a text with
                <span
                    style-margin-left="5px"
                    style-margin-right="5px"
                    style-color={Bind.oneWay(() => this.color)}
                    style-background-color={Bind.oneWay(() => this.bgColor)}
                    >chosen color and background color</span>
                from the drop down.</p>
        </div>);
    }

}
