import { Behaviour, serializable, GameObject, IPointerClickHandler, PointerEventData } from "@needle-tools/engine";

export class OnClick extends Behaviour implements IPointerClickHandler {

    @serializable(GameObject)
    callbackTarget?: GameObject;

    @serializable(String)
    callbackComponentName: string = "";

    @serializable(String)
    callbackMethodName: string = "";

    onPointerClick(_: PointerEventData): void {
        if (!this.callbackTarget || !this.callbackComponentName || !this.callbackMethodName) {
            console.warn("OnClick: callback configuration is incomplete");
            return;
        }

        const component = this.callbackTarget.getComponents(Behaviour).find(c => 
            c.constructor.name === this.callbackComponentName
        );

        if (!component) {
            console.warn(`Component '${this.callbackComponentName}' not found on`, this.callbackTarget.name);
            return;
        }

        const method = (component as any)[this.callbackMethodName];
        if (typeof method !== "function") {
            console.warn(`Method '${this.callbackMethodName}' not found on ${this.callbackComponentName}`);
            return;
        }

        method.call(component, this.gameObject);
    }
}
