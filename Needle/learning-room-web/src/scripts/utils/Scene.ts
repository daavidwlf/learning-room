import { Behaviour, serializable, serializeable } from "@needle-tools/engine";
import { SceneSwitcher } from "@needle-tools/engine";
import { URLContext } from "./UrlContext";

export class SceneController extends URLContext {
    @serializeable(SceneSwitcher)
    public sceneSwitcher?: SceneSwitcher;

    // checks which scene loads, compares it to the the scene in the search params, compares and switches if needed
    start(){
        if(!this.sceneSwitcher){
            console.warn("SceneSwitcher not found");
            return;
        }

        //TODO: prevent double loading

        const sceneName = this.getPathElement(1);

        if(!sceneName) {
            this.goToRootScene();
            return
        }

       this.goToScene(sceneName);
    }

    private goToScene(sceneName: string) {
        if(!this.sceneSwitcher) {
            console.warn("SceneSwitcher not found");
            return;
        }

        var scene = this.sceneSwitcher?.scenes.find(scene => scene.urlName.toLowerCase() === sceneName.toLowerCase());

        if(!scene) {
            console.warn(`Scene ${sceneName} not found`);
            this.setPathElement(1, "root");
            return;
        }

        this.setPathElement(1, scene.urlName.toLowerCase());

        this.sceneSwitcher?.switchScene(scene!)
        .then(() => {
            console.log(`Switched to scene ${sceneName}`);
        })
        .catch((error) => {
            console.error(`Failed to switch to scene ${sceneName}:`, error);
        });
    }

    public goToRootScene() {
        this.goToScene("Root");
    }

    public goToEntryScene() {
        this.goToScene("Entry");
    }
}