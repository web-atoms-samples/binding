import Command from "@web-atoms/core/dist/core/Command";
import XNode from "@web-atoms/core/dist/core/XNode";
import styled from "@web-atoms/core/dist/style/styled";
import { Drawer } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";
import PageNavigator from "@web-atoms/web-controls/dist/PageNavigator";
import HomePage from "../pages/home/Home";
import OneWayPage from "../pages/one-way/OneWayPage";
import OneWayAsyncPage from "../pages/one-way-async/OneWayAsyncPage";
import TwoWayPage from "../pages/two-way/TwoWayPage";
import StylePage from "../pages/style/StylePage";
import EventPage from "../pages/event/EventPage";

const css = styled.css `
    cursor: pointer;
    padding: 5px 10px 5px 10px;
    border-radius: 10px;
    &:hover {
        background-color: lightgreen;
    }
`.installLocal();

interface IMenuItem {
    label: string;
    icon?: string;
    command?: Command;
    openPage?: any;
    pushPage?: any;
}

const MenuItem = ({
    label,
    icon = "",
    command,
    openPage,
    pushPage
}: IMenuItem) => {
    return <div
        class={css}
        data-layout="row"
        event-click={() => command
            ? command.dispatch()
            : (openPage
                    ? PageNavigator.openPage(openPage)
                    : PageNavigator.pushPage(pushPage))}>
        { icon && <i class={icon}/>}
        <span text={label}/>
    </div>;
};

export default class AppMenu extends Drawer {

    public async init() {

        this.renderer = <div data-layout="vertical-flex">
            <h4>Bindings</h4>

            <MenuItem
                label="Home"
                openPage={HomePage}
                />

            <MenuItem
                label="One Way"
                openPage={OneWayPage}
                />

            <MenuItem
                label="Two Way"
                openPage={TwoWayPage}
                />

            <MenuItem
                label="One Way Async"
                openPage={OneWayAsyncPage}
                />

            <MenuItem
                label="Event"
                openPage={EventPage}
                />

            <MenuItem
                label="Style"
                openPage={StylePage}
                />
        </div>;
    }

}