import { URLContext } from "../utils/UrlContext"

export class GlobalState extends URLContext {
    static currentQuestion: number = 0
    static currentChapter: number = 0

    start() {
        const path = this.getPathElement(1)
        
        if(path !== "level"){
            this.clearSearchParams()
            return
        }

        var chapter = this.getSearchParam("chapter")
        var question = this.getSearchParam("question")

        if(!chapter){
            chapter = "1"
            this.setSearchParam("chapter", chapter)
        }

        if(!question){
            question = "1"
            this.setSearchParam("question", question)
        }

        // -1 so the index starts at 0
        GlobalState.currentChapter = Number(chapter)-1
        GlobalState.currentQuestion = Number(question)-1
    }
}