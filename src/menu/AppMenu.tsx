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
import AppCommands from "../commands/AppCommands";

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
}: IMenuItem) => {
    return <a
        class={css}
        data-layout="row"
        data-click-event="route"
        href={command.displayRoute({})}
        >
        { icon && <i class={icon}/>}
        <span text={label}/>
    </a>;
};

export default class AppMenu extends Drawer {

    public async init() {

        this.renderer = <div data-layout="vertical-flex">
            <h4>Bindings</h4>

            <MenuItem
                label="Home"
                command={AppCommands.home}
                />

            <MenuItem
                label="One Way"
                command={AppCommands.oneWay}
                />

            <MenuItem
                label="Two Way"
                command={AppCommands.twoWay}
                />

            <MenuItem
                label="One Way Async"
                command={AppCommands.oneWayAsync}
                />

            <MenuItem
                label="Event"
                command={AppCommands.event}
                />

            <MenuItem
                label="Style"
                command={AppCommands.style}
                />
        </div>;
    }

}