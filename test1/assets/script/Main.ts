// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

// @ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    private _button01: cc.Button;

    // private onComplete(err, bundle:cc.AssetManager.Bundle){
    //     let btn =  this.node.getChildByName("Button01");
    //     let i = 0;

    //     if (this._button01) {
    //         this._button01.node.on("click", (event) => {
    //             cc.log(`...........1`);
    //         })
    //     }else{
    //         cc.log('11111');
    //     }
    // }



    start() {
        // cc.log(this);
        // cc.log('sadaisdahsdiahsdia');   
        // cc.assetManager.loadBundle()

        //#region loadBundle

        // let btn =  this.node.getChildByName("button01");

        // let _btnCtl = btn.getComponent(cc.Button);
        // console.log(btn);
        // console.log(_btnCtl);

        // // _btnCtl.clickEvents = [];
        // // let list1 = [];
        // // list1.push(new cc.Component.EventHandler())
        // btn.on('click',()=>{
        //     cc.log(Math.random()+'.');
        //     // cc
        // })


        // let i = 0;
        cc.assetManager.loadBundle('bunder1', null, (err, bundle:cc.AssetManager.Bundle)=>{
            // let btn =  this.node.getChildByName("Button01");
            // let i = 0;
    
            // if (this._button01) {
            //     this._button01.node.on("click", (event) => {
            //         cc.log(`...........1`);
            //     })
            // }else{
            //     cc.log('11111');
            // }

            // cc.log(sp1);
            //  sp1.getComponent(cc.Sprite).spriteFrame = `1`;
            // bundle.
            /*
            bundle.load('plist/myAtlas01/2',(o,asset:cc.SpriteFrame)=>{
                cc.log(o);
                cc.log(asset);
                cc.log(1);

                // 'plist/myAtlas01/2'
                let sp1 = this.node.getChildByName("New Sprite(Splash)");
                sp1.getComponent(cc.Sprite).spriteFrame = asset;
                cc.log(sp1);
            })
            */


            // bundle.load("plist/myAtlas01/AutoAtlas",cc.SpriteAtlas,(err, res:cc.SpriteAtlas)=>{
            // sp.spriteFrame = res.getSpriteFrame("item_z10001");
                // cc.log(err);
                // cc.log(res);

                // let sp1 = this.node.getChildByName("New Sprite(Splash)");
                // sp1.getComponent(cc.Sprite).spriteFrame = res;
            
            // })

        });
            // console.log(err)
            // bundle.load("buff/1",cc.SpriteFrame,(err1,asset:cc.SpriteFrame)=>{   
            //     if(err1){
            //         return;
            //     }
            //     // cc.log(asset);
            //     this.node.getComponent(cc.Sprite).spriteFrame = asset;

            // })

         
        

      

        //#endregion
    }

    // update (dt) {}
}
