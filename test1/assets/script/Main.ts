// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        // cc.log(this);
        // cc.log('sadaisdahsdiahsdia');   
        // cc.assetManager.loadBundle()

        //#region loadBundle

        cc.assetManager.loadBundle('bunder1', null, (err, bundle:cc.AssetManager.Bundle) => 
            // console.log(err)
            bundle.load("buff/1",cc.SpriteFrame,(err1,asset:cc.SpriteFrame)=>{   
                if(err1){
                    return;
                }
                // cc.log(asset);
                this.node.getComponent(cc.Sprite).spriteFrame = asset;

            })

        );

        //#endregion
    }

    // update (dt) {}
}
