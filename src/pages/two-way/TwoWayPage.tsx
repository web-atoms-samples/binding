import XNode from "@web-atoms/core/dist/core/XNode";
import ComboBox from "@web-atoms/web-controls/dist/basic/ComboBox";
import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";
import Form, { BindError } from "@web-atoms/web-controls/dist/basic/Form";
import FormField from "@web-atoms/web-controls/dist/basic/FormField";
import Bind from "@web-atoms/core/dist/core/Bind";
import PasswordBox from "@web-atoms/web-controls/dist/basic/PasswordBox";
import Action from "@web-atoms/core/dist/view-model/Action";

export default class TwoWayPage extends ContentPage {

    public model = {
        username: "",
        password: "",
        passwordAgain: ""
    }

    public async init() {

        this.render(<div>
            <Form data-submit-event="login">
                <FormField
                    label="Username"
                    required={true}
                    error={BindError({ value: () => this.model.username})} >
                    <input
                        value={Bind.twoWaysImmediate(() => this.model.username)}/>
                </FormField>
                <FormField
                    label="Password"
                    required={true}
                    error={BindError({ value: () => this.model.password})}>
                    <PasswordBox
                        type="password"
                        value={Bind.twoWaysImmediate(() => this.model.password)}/>
                </FormField>
                <FormField
                    label="Password Again"
                    error={BindError({
                        value: () => this.model.password === this.model.passwordAgain})}>
                    <PasswordBox
                        value={Bind.twoWaysImmediate(() => this.model.passwordAgain)}/>
                </FormField>
                <FormField label="">
                    <button
                        type="submit" 
                        text="Signup"/>
                </FormField>
            </Form>
        </div>);
    }

    @Action({ onEvent: "login", success: "Login successful."})
    async login() {
        // do something. here...
    }
}