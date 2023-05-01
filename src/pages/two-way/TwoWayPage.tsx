import XNode from "@web-atoms/core/dist/core/XNode";
import ComboBox from "@web-atoms/web-controls/dist/basic/ComboBox";
import { ContentPage } from "@web-atoms/web-controls/dist/mobile-app/MobileApp";
import Form2, { BindError } from "@web-atoms/web-controls/dist/basic/Form2";
import FormField from "@web-atoms/web-controls/dist/basic/FormField";
import Bind from "@web-atoms/core/dist/core/Bind";
import PasswordBox from "@web-atoms/web-controls/dist/basic/PasswordBox";

export default class TwoWayPage extends ContentPage {

    public model = {
        username: "",
        password: "",
        passwordAgain: ""
    }

    public async init() {

        this.render(<div>
            <Form2>
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
                    <input
                        type="password"
                        value={Bind.twoWaysImmediate(() => this.model.password)}/>
                </FormField>
                <FormField
                    label="Password Again"
                    error={BindError({ value: () => this.model.password === this.model.passwordAgain, isValid: (v) => !v || v === "true"})}>
                    <PasswordBox
                        value={Bind.twoWaysImmediate(() => this.model.passwordAgain)}/>
                </FormField>
                <FormField label="">
                    <button
                        type="submit" 
                        text="Signup"/>
                </FormField>
            </Form2>
        </div>);
    }
}