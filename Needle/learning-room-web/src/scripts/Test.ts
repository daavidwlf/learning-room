import { Behaviour, serializable } from "@needle-tools/engine";

export class Test extends Behaviour{

    @serializable()
    speed : number = 1;

    start(){
        console.log("test");
    }

    update(): void {
        this.gameObject.rotateY(this.context.time.deltaTime * this.speed);
    }
}