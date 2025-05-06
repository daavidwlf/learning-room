import { Behaviour } from "@needle-tools/engine";
import { GlobalState } from "../globals/GlobalState";
import content from '../../content/content.json';
import { TextComponent } from "../utils/Text";
import { QustionsType } from "../types/Types";

export class CurrentQuestionDisplayer extends TextComponent {
    start(): void {
        const question = content.de[GlobalState.currentQuestion].question

        this.updateText(question)
    }

    showAnswer(): void {
        const answer = content.de[GlobalState.currentQuestion].answer

        this.updateText(answer)
    }

    nextQuestion (): void {
        GlobalState.currentQuestion++
        this.start()
    }
}
    