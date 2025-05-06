import { Behaviour, Text } from "@needle-tools/engine";
import text from "../../content/content.json"


export class TextComponent extends Behaviour {

    updateText(text: string): void {
        const textComponent = this.gameObject.getComponent(Text)

        if(!textComponent) {
            console.warn("Text component found",  this.gameObject.name);
            return
        }
        
        textComponent.text = text;
    }
}