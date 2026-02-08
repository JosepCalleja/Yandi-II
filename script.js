
const canvas = document.getElementById(`canvas`);
const ctx = canvas.getContext(`2d`);
const grid = 50;
const row = 150;
const column = 100;
canvas.width = 1000;
canvas.height = 650;
const WORLD_WIDTH  = 150 * grid;
const WORLD_HEIGHT = 100 * grid;
let itemIndex = 0;
let zoom = 1.5;
const isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 1);
  }, 0);
});




const hair01 = new Image();
hair01.src = `hair1.png`;
const hair02 = new Image();
hair02.src = `hair2.png`;
const hair03 = new Image();
hair03.src = `hair3.png`;
const wings01 = new Image();
wings01.src = `wings1.png`;
const gem1 = new Image();
gem1.src = `gem.png`;
const sand1 = new Image();
sand1.src = `sand.png`;
const grassBlockTree = new Image();
grassBlockTree.src = `grassBlockTree.png`;
const soilBlockTree = new Image();
soilBlockTree.src = `soilBlockTree.png`;
const caveBGTree = new Image();
caveBGTree.src = `caveBGTree.png`;
const stoneBlockTree = new Image();
stoneBlockTree.src = `stoneBlockTree.png`;
const lavaBlockTree = new Image();
lavaBlockTree.src = `lavaBlockTree.png`;
const playerBody = new Image();
playerBody.src = `playerBody.png`;
const sword01 = new Image();
sword01.src = `sword1.png`;
const sword02 = new Image();
sword02.src = `sword2.png`;
const BG = new Image();
BG.src = `BG.png`;
const grass = new Image();
grass.src = `grass.png`;
const grassBlock = new Image();
grassBlock.src = `grassBlock.png`;
const soil = new Image();
soil.src = `soil.png`;
const stone = new Image();
stone.src = `stone.png`;
const caveBG = new Image();
caveBG.src = `caveBG.png`;
const lava = new Image();
lava.src = `lava.png`;
const log = new Image();
log.src = `log.png`;
const grassBlockSeed = new Image();
grassBlockSeed.src = `grassBlockSeed.png`;
const soilBlockSeed = new Image();
soilBlockSeed.src = `soilBlockSeed.png`;
const caveBGSeed = new Image();
caveBGSeed.src = `caveBGSeed.png`;
const stoneBlockSeed = new Image();
stoneBlockSeed.src = `stoneBlockSeed.png`;
const lavaBlockSeed = new Image();
lavaBlockSeed.src = `lavaBlockSeed.png`;
const dungeonDoor = new Image();
dungeonDoor.src = `DungeonDoor.png`;
const bedrock = new Image();
bedrock.src = `bedrock.png`;
const grassSeed = new Image();
grassSeed.src = `grassSeed.png`;
const grassTree = new Image();
grassTree.src = `grassTree.png`;
const sandTree = new Image();
sandTree.src = `sandTree.png`;
const sandSeed = new Image();
sandSeed.src = `sandSeed.png`;
const logTree = new Image();
logTree.src = `logTree.png`;
const logSeed = new Image();
logSeed.src = `logSeed.png`;
const vegetationBlock = new Image();
vegetationBlock.src = `vegetationBlock.png`;
const vegetationBlockTree = new Image();
vegetationBlockTree.src = `vegetationBlockTree.png`;
const vegetationBlockSeed = new Image();
vegetationBlockSeed.src = `vegetationBlockSeed.png`;
const hangingLeaves = new Image();
hangingLeaves.src = `hangingLeaves.png`;
const hangingLeavesTree = new Image();
hangingLeavesTree.src = `hangingLeavesTree.png`;
const hangingLeavesSeed = new Image();
hangingLeavesSeed.src = `hangingLeavesSeed.png`;
const stoneBackground = new Image();
stoneBackground.src = `stoneBackground.png`;
const stoneBackgroundTree = new Image();
stoneBackgroundTree.src = `stoneBackgroundTree.png`;
const stoneBackgroundSeed = new Image();
stoneBackgroundSeed.src = `stoneBackgroundSeed.png`;
const water = new Image();
water.src = `water.png`;
const waterTree = new Image();
waterTree.src = `waterTree.png`;
const waterSeed = new Image();
waterSeed.src = `waterSeed.png`;


//vip
const wheat = new Image();
wheat.src = `wheat.png`;


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});


function isPlayerOnTile(tileX, tileY) {
    if(player.x < tileX){
        return Math.abs(player.x - tileX) < player.width
        && Math.abs(player.y - tileY) < grid;
    }
    else{
        return Math.abs(player.x - tileX) < grid
        && Math.abs(player.y - tileY) < grid;
    }

}

function canReach(tileX, tileY) {

    const reach = player.reach * grid;

    return (
        tileX >= player.x - reach &&
        tileX <= player.x + reach &&
        tileY >= player.y - reach &&
        tileY <= player.y + reach
    );
}

function bubbleText(x, y, z) {
    const text = z;
    ctx.font = "20px Arial";
    const textLength = ctx.measureText(text).width;


    ctx.fillStyle = "rgba(200, 200, 200, 0.6)";
    ctx.fillRect(x - textLength * 0.6, y - grid * 1.5, textLength * 1.2, grid);


    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "white";
    ctx.fillText(text, x, y - grid * 1.5 + grid / 2);
}


let activeBubble = null;


let selectedItemIndex = 0;

let mouseDownBtnId = null;


canvas.addEventListener("contextmenu", e => e.preventDefault());

function harvesting(i, props, roundedX, roundedY){
    if(props.ready == 2){
        console.log(props);
        treeFarmable(i, roundedX, roundedY);
        removeProps(roundedX, roundedY);
    }
    else{
        //idk if i wanna make the trees breakable before ready lel.
    }
}


if(!isMobile){
    
}
else{
    
}


function drawTouchScreen(){
    ctx.fillStyle = `rgba(150, 150, 255, 0.6)`;
    ctx.fillRect(100, 550, 75, 75);
    ctx.fillRect(250, 550, 75, 75);
    ctx.fillRect(850, 550, 75, 75);
    ctx.fillRect(50, 50, 75, 75);
    ctx.fillRect(200, 50, 75, 75);
}


window.addEventListener("pointerdown", (e) => {
    

    const rect   = canvas.getBoundingClientRect();
    const scaleX = canvas.width  / rect.width;
    const scaleY = canvas.height / rect.height;
    const sx     = (e.clientX - rect.left) * scaleX / zoom;
    const sy     = (e.clientY - rect.top ) * scaleY / zoom;
    const wx     = camX + sx;
    const wy     = camY + sy;
    const roundedx = Math.floor(wx / grid) * grid;
    const roundedy = Math.floor(wy / grid) * grid;
    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top ) * scaleY;

    const selectedItem = player.backpack.quickUse[itemIndex];
    const bi = blocks.findIndex(b => b === selectedItem);




    if(clickX >= 10 && clickX <= grid + 10 && clickY >= 250 && clickY <= 300){
        if(!player.atStore){
            if(player.atBackpack){
                player.atBackpack = false;
                return;
            }
            else{
                player.atBackpack = true;
            }
        }

    }

    if(clickX >= 10 && clickX <= grid + 10 && clickY >= 350 && clickY <= 400){
        if(!player.atBackpack){
            if(player.atStore){
                player.atStore = false;
                return;
            }
            else{
                player.atStore = true;
            }
        }

    }

    const block = gameblocks.find(b => b.x === roundedx && b.y === roundedy);
    const bg = gameBackgrounds.find(b => b.x === roundedx && b.y === roundedy);
    const props = gameProps.find(p => p.x === roundedx && p.y === roundedy);



    if (bi !== -1 && canReach(roundedx, roundedy) && !player.atBackpack && !player.atStore) {
        if (selectedItem.isBlock && !(sx >= 5 && sx <= 40 && sy >= 165 && sy <= 200)) {

            if (!isPlayerOnTile(roundedx, roundedy) && !block && !props  ) {
                BuildBlocks(bi, roundedx, roundedy);
            
                const item0 = player.backpack.quickUse[itemIndex];
                const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                const item = player.backpack.inventory[item1];
            
                if (item.amount <= 1) {
                    player.backpack.inventory.splice(item1, 1);
                    player.backpack.quickUse.splice(itemIndex, 1);
                    player.backpack.quickUse.push(undefined);
                    itemIndex = 0;
                } else {
                    item.amount--;
                    console.log(item);
                }
            }

        }
        else if(!bg && !selectedItem.isBlock && selectedItem.type == `placable`){

            BuildBackground(bi, roundedx, roundedy);


            const item0 = player.backpack.quickUse[itemIndex];
            const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
            const item = player.backpack.inventory[item1];

            if (item.amount <= 1) {
                player.backpack.inventory.splice(item1, 1);
                player.backpack.quickUse.splice(itemIndex, 1);
                player.backpack.quickUse.push(undefined);
                itemIndex = 0;
            } else {
                item.amount--;
                console.log(item);
            }
        }
        else if(!block && !props && selectedItem.type === `placable-props` ){

            
            if(isBlockedAt(roundedx, roundedy + grid)){
                const base = 16000;
                if(selectedItem.custom === `grassblocktree`){
                    BuildProps(bi, roundedx, roundedy, base);
                    
                    const item0 = player.backpack.quickUse[itemIndex];
                    const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                    const item = player.backpack.inventory[item1];
                    if (item.amount <= 1) {
                        player.backpack.inventory.splice(item1, 1);
                        player.backpack.quickUse.splice(itemIndex, 1);
                        player.backpack.quickUse.push(undefined);
                        itemIndex = 0;
                    } else {
                        item.amount--;
                        console.log(item);
                    }
            
                }
                if(selectedItem.custom === `soiltree`){
                    BuildProps(bi, roundedx, roundedy, base);
                    const item0 = player.backpack.quickUse[itemIndex];
                    const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                    const item = player.backpack.inventory[item1];
                    if (item.amount <= 1) {
                        player.backpack.inventory.splice(item1, 1);
                        player.backpack.quickUse.splice(itemIndex, 1);
                        player.backpack.quickUse.push(undefined);
                        itemIndex = 0;
                    } else {
                        item.amount--;
                        console.log(item);
                    }
            
                }
                if(selectedItem.custom === `cavetree`){
                    BuildProps(bi, roundedx, roundedy, base);
                    const item0 = player.backpack.quickUse[itemIndex];
                    const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                    const item = player.backpack.inventory[item1];
                    if (item.amount <= 1) {
                        player.backpack.inventory.splice(item1, 1);
                        player.backpack.quickUse.splice(itemIndex, 1);
                        player.backpack.quickUse.push(undefined);
                        itemIndex = 0;
                    } else {
                        item.amount--;
                        console.log(item);
                    }
            
                }
                if(selectedItem.custom === `stoneblocktree`){
                    BuildProps(bi, roundedx, roundedy, base);
                    const item0 = player.backpack.quickUse[itemIndex];
                    const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                    const item = player.backpack.inventory[item1];
                    if (item.amount <= 1) {
                        player.backpack.inventory.splice(item1, 1);
                        player.backpack.quickUse.splice(itemIndex, 1);
                        player.backpack.quickUse.push(undefined);
                        itemIndex = 0;
                    } else {
                        item.amount--;
                        console.log(item);
                    }
            
                }
                if(selectedItem.custom === `lavatree`){
                    BuildProps(bi, roundedx, roundedy, base);
                    const item0 = player.backpack.quickUse[itemIndex];
                    const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                    const item = player.backpack.inventory[item1];
                    if (item.amount <= 1) {
                        player.backpack.inventory.splice(item1, 1);
                        player.backpack.quickUse.splice(itemIndex, 1);
                        player.backpack.quickUse.push(undefined);
                        itemIndex = 0;
                    } else {
                        item.amount--;
                        console.log(item);
                    }
            
                }
                if(selectedItem.custom === `grasstree`){
                    BuildProps(bi, roundedx, roundedy, base * 2);
                    const item0 = player.backpack.quickUse[itemIndex];
                    const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                    const item = player.backpack.inventory[item1];
                    if (item.amount <= 1) {
                        player.backpack.inventory.splice(item1, 1);
                        player.backpack.quickUse.splice(itemIndex, 1);
                        player.backpack.quickUse.push(undefined);
                        itemIndex = 0;
                    } else {
                        item.amount--;
                        console.log(item);
                    }
            
                }
                if(selectedItem.custom === `sandtree`){
                    BuildProps(bi, roundedx, roundedy, base * 2);
                    const item0 = player.backpack.quickUse[itemIndex];
                    const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                    const item = player.backpack.inventory[item1];
                    if (item.amount <= 1) {
                        player.backpack.inventory.splice(item1, 1);
                        player.backpack.quickUse.splice(itemIndex, 1);
                        player.backpack.quickUse.push(undefined);
                        itemIndex = 0;
                    } else {
                        item.amount--;
                        console.log(item);
                    }
            
                }
                if(selectedItem.custom === `logtree`){
                    BuildProps(bi, roundedx, roundedy, base * 2);
                    const item0 = player.backpack.quickUse[itemIndex];
                    const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                    const item = player.backpack.inventory[item1];
                    if (item.amount <= 1) {
                        player.backpack.inventory.splice(item1, 1);
                        player.backpack.quickUse.splice(itemIndex, 1);
                        player.backpack.quickUse.push(undefined);
                        itemIndex = 0;
                    } else {
                        item.amount--;
                        console.log(item);
                    }
            
                }
                if(selectedItem.custom === `vegetationblocktree`){
                    BuildProps(bi, roundedx, roundedy, base * 2);
                    const item0 = player.backpack.quickUse[itemIndex];
                    const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                    const item = player.backpack.inventory[item1];
                    if (item.amount <= 1) {
                        player.backpack.inventory.splice(item1, 1);
                        player.backpack.quickUse.splice(itemIndex, 1);
                        player.backpack.quickUse.push(undefined);
                        itemIndex = 0;
                    } else {
                        item.amount--;
                        console.log(item);
                    }
            
                }
                if(selectedItem.custom === `hangingleavestree`){
                    BuildProps(bi, roundedx, roundedy, base * 2);
                    const item0 = player.backpack.quickUse[itemIndex];
                    const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                    const item = player.backpack.inventory[item1];
                    if (item.amount <= 1) {
                        player.backpack.inventory.splice(item1, 1);
                        player.backpack.quickUse.splice(itemIndex, 1);
                        player.backpack.quickUse.push(undefined);
                        itemIndex = 0;
                    } else {
                        item.amount--;
                        console.log(item);
                    }
            
                }

                if(selectedItem.custom === `stonebackgroundtree`){
                    BuildProps(bi, roundedx, roundedy, base * 2);
                    const item0 = player.backpack.quickUse[itemIndex];
                    const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                    const item = player.backpack.inventory[item1];
                    if (item.amount <= 1) {
                        player.backpack.inventory.splice(item1, 1);
                        player.backpack.quickUse.splice(itemIndex, 1);
                        player.backpack.quickUse.push(undefined);
                        itemIndex = 0;
                    } else {
                        item.amount--;
                        console.log(item);
                    }
            
                }

                if(selectedItem.custom === `watertree`){
                    BuildProps(bi, roundedx, roundedy, base * 2);
                    const item0 = player.backpack.quickUse[itemIndex];
                    const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                    const item = player.backpack.inventory[item1];
                    if (item.amount <= 1) {
                        player.backpack.inventory.splice(item1, 1);
                        player.backpack.quickUse.splice(itemIndex, 1);
                        player.backpack.quickUse.push(undefined);
                        itemIndex = 0;
                    } else {
                        item.amount--;
                        console.log(item);
                    }
            
                }




            }



            if(selectedItem.name === `Grass`){
                BuildProps(bi, roundedx, roundedy, 0);
                const item0 = player.backpack.quickUse[itemIndex];
                const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                const item = player.backpack.inventory[item1];
                if (item.amount <= 1) {
                    player.backpack.inventory.splice(item1, 1);
                    player.backpack.quickUse.splice(itemIndex, 1);
                    player.backpack.quickUse.push(undefined);
                    itemIndex = 0;
                } else {
                    item.amount--;
                    console.log(item);
                }
            }
            if(selectedItem.name === `Hanging Leaves`){
                BuildProps(bi, roundedx, roundedy, 0);
                const item0 = player.backpack.quickUse[itemIndex];
                const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                const item = player.backpack.inventory[item1];
                if (item.amount <= 1) {
                    player.backpack.inventory.splice(item1, 1);
                    player.backpack.quickUse.splice(itemIndex, 1);
                    player.backpack.quickUse.push(undefined);
                    itemIndex = 0;
                } else {
                    item.amount--;
                    console.log(item);
                }
            }
            if(selectedItem.name === `Water`){
                BuildProps(bi, roundedx, roundedy, 0);
                const item0 = player.backpack.quickUse[itemIndex];
                const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
                const item = player.backpack.inventory[item1];
                if (item.amount <= 1) {
                    player.backpack.inventory.splice(item1, 1);
                    player.backpack.quickUse.splice(itemIndex, 1);
                    player.backpack.quickUse.push(undefined);
                    itemIndex = 0;
                } else {
                    item.amount--;
                    console.log(item);
                }
            }
            


            
        }
        return;
    }





    if (itemIndex === 0 && canReach(roundedx, roundedy) && !player.atBackpack && !player.atStore) {



        if(player.canPunch){

            player.canPunch = false;

            setTimeout(() => {
            
            
            
                player.canPunch = true;
            }, 250)
            let rand = Math.random();
            let rand2 = Math.random();
            let rand3 = Math.random();

            if(block && block.type === 'unbreakable'){
                activeBubble = {x: 500, y: 400 - grid * 2, text: "Can't Break This", timer: 50};
            } 
            else if (block && block.type !== 'unbreakable') {
                if (block.durability <= 1) {
                    removeBlocks(roundedx, roundedy);
                    player.experience += block.tier;

                    if(block.tier === 1){
                        if(block.custom == "grass"){


                            if(rand3 >= 0.90){
                                dropItem(roundedx, roundedy, 1);
                            }
                            if(rand2 >= 0.80){
                                dropItem(roundedx, roundedy, 2);
                            }


                        }
                        else if(block.custom == "soil"){


                            if(rand2 >= 0.90){
                                dropItem(roundedx, roundedy, 3);
                            }
                            if(rand3 >= 0.80){
                                dropItem(roundedx, roundedy, 4);
                            }


                        }
                        else if(block.custom == "stoneblock"){


                            if(rand2 >= 0.90){
                                dropItem(roundedx, roundedy, 7);
                            }
                            if(rand3 >= 0.80){
                                dropItem(roundedx, roundedy, 8);
                            }


                        }
                        else if(block.custom == "lava"){


                            if(rand2 >= 0.90){
                                dropItem(roundedx, roundedy, 9);
                            }
                            if(rand3 >= 0.80){
                                dropItem(roundedx, roundedy, 10);
                            }


                        }
                        if(rand < 0.9){
                            console.log(block);
                            return;
                        }
                        else{
                            dropItem(roundedx, roundedy, 0);
                        }


                    }
                    else if(block.tier === 2){

                        if(block.custom == "sand"){


                            if(rand2 >= 0.90){
                                dropItem(roundedx, roundedy, 13);
                            }
                            if(rand3 >= 0.80){
                                dropItem(roundedx, roundedy, 14);
                            }


                        }

                        if(block.custom == "logblock"){


                            if(rand2 >= 0.90){
                                dropItem(roundedx, roundedy, 15);
                            }
                            if(rand3 >= 0.80){
                                dropItem(roundedx, roundedy, 16);
                            }


                        }

                        if(block.custom == "vegetationblock"){


                            if(rand2 >= 0.90){
                                dropItem(roundedx, roundedy, 17);
                            }
                            if(rand3 >= 0.80){
                                dropItem(roundedx, roundedy, 18);
                            }


                        }

                        





                        if(rand < 0.7){
                            return;
                        }
                        else if(rand < 0.98){
                            dropItem(roundedx, roundedy, 0);
                        }
                        else{
                            for(let i = 0; i < 2; i++){
                                dropItem(roundedx, roundedy, 0);
                            }
                        }


                    }


                }
                else {
                    block.durability--;
                    block.lasthit = Date.now();
                    console.log('punched! new dur:', block.durability);
                }

            }
            else if(props){
                if(props.durability <= 1) {

                    if(props.custom == "grassblocktree"){
                        harvesting(1, props, roundedx, roundedy);
                    }
                    else if(props.custom == "soiltree"){
                        harvesting(3, props, roundedx, roundedy);
                    }
                    else if(props.custom == "cavetree"){
                        harvesting(5, props, roundedx, roundedy);
                    }
                   else if(props.custom == "stoneblocktree"){
                        harvesting(7, props, roundedx, roundedy);
                    }
                   else if(props.custom == "lavatree"){
                        harvesting(9, props, roundedx, roundedy);
                    }
                    else if(props.custom == "grasstree"){
                        harvesting(11, props, roundedx, roundedy);
                    }
                    else if(props.custom == "sandtree"){
                        harvesting(13, props, roundedx, roundedy);
                    }
                    else if(props.custom == "logtree"){
                        harvesting(15, props, roundedx, roundedy);
                    }
                    else if(props.custom == "vegetationblocktree"){
                        harvesting(17, props, roundedx, roundedy);
                    }
                    else if(props.custom == "hangingleavestree"){
                        harvesting(19, props, roundedx, roundedy);
                    }
                    else if(props.custom == "stonebackgroundtree"){
                        harvesting(21, props, roundedx, roundedy);
                    }
                    else if(props.custom == "watertree"){
                        harvesting(23, props, roundedx, roundedy);
                    }
                    else{
                        removeProps(roundedx, roundedy);


                        console.log(props.tier)
                        if(props.tier === 2){

                            if(props.custom == "grassprop"){


                                if(rand2 >= 0.90){
                                    dropItem(roundedx, roundedy, 11);
                                }
                                if(rand3 >= 0.80){
                                    dropItem(roundedx, roundedy, 12);
                                }


                            }

                            else if(props.custom == "hangingleaves"){


                                if(rand2 >= 0.90){
                                    dropItem(roundedx, roundedy, 19);
                                }
                                if(rand3 >= 0.80){
                                    dropItem(roundedx, roundedy, 20);
                                }


                            }

                            else if(props.custom == "water"){


                                if(rand2 >= 0.90){
                                    dropItem(roundedx, roundedy, 23);
                                }
                                if(rand3 >= 0.80){
                                    dropItem(roundedx, roundedy, 24);
                                }


                            }
                            
                            if(rand < 0.7){
                                return;
                            }
                            else if(rand < 0.98){
                                dropItem(roundedx, roundedy, 0);
                            }
                            else{
                                for(let i = 0; i < 2; i++){
                                    dropItem(roundedx, roundedy, 0);
                                }
                            }


                        }

                    }
                    



                }
                else{
                    props.durability--;
                }
            }
            else if(bg) {
                if(bg.durability <= 1) {
                    removeBackground(roundedx, roundedy);
                    player.experience += bg.tier;
                    let rand = Math.random()
                    if(bg.custom === 'cave'){
                        if(rand3 > 0.9){
                            dropItem(roundedx, roundedy, 5);
                        }
                        if(rand2 > 0.8){
                            dropItem(roundedx, roundedy, 6);
                        }

                        if(rand < 0.9){
                            return;
                        }
                        else{
                            dropItem(roundedx, roundedy, 0);
                        }
                    }

                }
                else{
                    bg.durability--;
                    bg.lasthit = Date.now();
                    console.log('punched! new dur:', bg.durability);
                }
            }
        
            else{
                console.log(`Punching air🔥🔥🔥`);
            }
    

        }

    }



    if (player.atBackpack) {
        for (let i = 0; i < btns.length; i++) {
            const btn = btns[i];
            const idx = i + currentpage * itemsPerPage;
            const item = player.backpack.inventory[idx];

            // NOT QUICKUSE HERE, HOPEFULLY WORKS PROPERLY
            if (
                clickX >= btn.x &&
                clickX <= btn.x + btn.width &&
                clickY >= btn.y &&
                clickY <= btn.y + btn.height
              ) {




                
                const itemToInsert = item?.name || "Empty Slot";



                if (!player.backpack.quickUse.includes(itemToInsert) && itemToInsert !== undefined && (itemToInsert.type == `placable` || itemToInsert.type == `placable-props`)) {
                    player.backpack.quickUse.pop();
                    player.backpack.quickUse.splice(1, 0, itemToInsert);
                    itemIndex = 1;
                    activeBubble = { x: btn.x + grid, y: btn.y, text: itemToInsert.name, timer: 90 };
                }
                else if(itemToInsert.type == `wearable-pant`){
                    if(player.pants === undefined){
                        player.pants = itemToInsert;
                        activeBubble = { x: btn.x + grid, y: btn.y, text: itemToInsert.name, timer: 90 };
                        return;
                    }
                    else{
                        player.pants = undefined;
                        return;
                    }
                }
                else if(itemToInsert.type == `wearable-hair`){
                    if(player.hair === undefined){
                        player.hair = itemToInsert;
                        activeBubble = { x: btn.x + grid, y: btn.y, text: itemToInsert.name, timer: 90 };
                        return;
                    }
                    else{
                        player.hair = undefined;
                        return;
                    }
                }
                else if(itemToInsert.type == `wearable-hand`){
                    if(player.hand === undefined){
                        player.hand = itemToInsert;
                        activeBubble = { x: btn.x + grid, y: btn.y, text: itemToInsert.name, timer: 90 };
                        return;
                    }
                    else{
                        player.hand = undefined;
                        return;
                    }
                }
                else if(itemToInsert.type == `wearable-back`){
                    if(player.back === undefined){
                        player.canDoubleJump = true;
                        player.jumps = 2;
                        player.back = itemToInsert;
                        activeBubble = { x: btn.x + grid, y: btn.y, text: itemToInsert.name, timer: 90 };
                        return;
                    }
                    else{
                        player.canDoubleJump = false;
                        player.jumps = 1;
                        player.back = undefined;
                        return;
                    }
                }
                else{
                    if(player.backpack.quickUse.includes(itemToInsert) && itemToInsert !== undefined && (itemToInsert.type == `placable` || itemToInsert.type == `placable-props`)){
                        console.warn(`Item Already Exist in QuickUse`);
                        itemIndex = player.backpack.quickUse.indexOf(itemToInsert);
                        if(itemIndex === 1){
                            activeBubble = { x: 350, y: 200, text: player.backpack.quickUse[itemIndex].name, timer: 90 };
                        }
                        else if(itemIndex === 2){
                            activeBubble = { x: 500, y: 200, text: player.backpack.quickUse[itemIndex].name, timer: 90 };
                        }
                        else{
                            activeBubble = { x: 650, y: 200, text: player.backpack.quickUse[itemIndex].name, timer: 90 };
                        }
                    }
                    else{
                        if(player.backpack.quickUse.includes(itemToInsert) && itemToInsert !== undefined){
                            itemIndex = 0;
                            activeBubble = { x: 200, y: 200, text: player.backpack.quickUse[itemIndex].name, timer: 90 };
                        }
                        else{
                            console.warn("Item not Found");
                        }

                    }

                }
            return;
            }


            else if(clickX >= 150 && clickX <= 250 && clickY >= 150 && clickY <= 250){
                itemIndex = 0;
                if(player.backpack.quickUse[itemIndex].name !== undefined){
                    activeBubble = { x: 200, y: 200, text: player.backpack.quickUse[itemIndex].name, timer: 90 };
                }
            }
            else if(clickX >= 300 && clickX <= 400 && clickY >= 150 && clickY <= 250 ){
                itemIndex = 1;
                if(player.backpack.quickUse[itemIndex] !== undefined){
                    activeBubble = { x: 350, y: 200, text: player.backpack.quickUse[itemIndex].name, timer: 90 };
                }
            }
            else if(clickX >= 450 && clickX <= 550 && clickY >= 150 && clickY <= 250 ){
                itemIndex = 2;
                if(player.backpack.quickUse[itemIndex] !== undefined){
                    activeBubble = { x: 500, y: 200, text: player.backpack.quickUse[itemIndex].name, timer: 90 };
                }            }
            else if(clickX >= 600 && clickX <= 700 && clickY >= 150 && clickY <= 250 ){
                itemIndex = 3;
                if(player.backpack.quickUse[itemIndex] !== undefined){
                    activeBubble = { x: 650, y: 200, text: player.backpack.quickUse[itemIndex].name, timer: 90 };
                }

            }
        }





        if(clickX >= 100 && clickX <= 150 && clickY >= 550 && clickY <= 600){
            if(currentpage + 1 > 1){
                currentpage--;
            }
        }
        else if(clickX >= 850 && clickX <= 900 && clickY >= 550 && clickY <= 600){
            if(currentpage + 1 < player.pages){
                currentpage++;
            }
        }

    }
    if (player.atStore) {
        for (const btn of storeBtns) {
            if (
                clickX >= btn.x &&
                clickX <= btn.x + btn.width &&
                clickY >= btn.y &&
                clickY <= btn.y + btn.height
            ) {
                mouseDownBtnId = btn.id;


                if(storepage === 1){


                    if(btn.id === 3){
                        cardContent = {
                            name: item[0].name,
                            value: item[0].value,
                            description: item[0].description,
                            purchaseBtn: storeBtns[7],
                            discardBtn: storeBtns[8]
                        }
                    }
                    if(btn.id === 4){
                        cardContent = {
                            name: item[1].name,
                            value: item[1].value,
                            description: item[1].description,
                            purchaseBtn: storeBtns[7],
                            discardBtn: storeBtns[8]
                        }
                    }
                    if(btn.id === 5){
                        cardContent = {
                            name: item[2].name,
                            value: item[2].value,
                            description: item[2].description,
                            purchaseBtn: storeBtns[7],
                            discardBtn: storeBtns[8]
                        }
                    }

                } 


                if (btn.id === 6) pBtnColor = 'rgba(80, 255, 80, 0.8)';
                else if (btn.id === 7) dBtnColor = 'rgba(255, 80, 80, 0.8)';
            }
        }
    }






});




window.addEventListener('pointerup', (e) => {
    const rect   = canvas.getBoundingClientRect();
    const scaleX = canvas.width  / rect.width;
    const scaleY = canvas.height / rect.height;
    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top ) * scaleY;

    if (player.atStore) {
        for (const btn of storeBtns) {
            const mouse = clickX >= btn.x &&
                clickX <= btn.x + btn.width &&
                clickY >= btn.y &&
                clickY <= btn.y + btn.height;

            if (mouse) {
                item[0].item[0] = tier2gacha();
                item[0].item[1] = tier2gacha();
                item[0].item[2] = tier2gacha();

                if (btn.id === 0){
                    cardContent = {
                        name: "",
                        value: 0,
                        description: "",
                        purchaseBtn: storeBtns[7],
                        discardBtn: storeBtns[8]
                    }
                storepage = 1;
                }
                else if (btn.id === 1){
                    storepage = 2;
                    cardContent = {
                        name: "",
                        value: 0,
                        description: "",
                        purchaseBtn: storeBtns[7],
                        discardBtn: storeBtns[8]
                    }
                }
                else if (btn.id === 2){
                    storepage = 3;
                    cardContent = {
                        name: "",
                        value: 0,
                        description: "",
                        purchaseBtn: storeBtns[7],
                        discardBtn: storeBtns[8]
                    }
                }
                else if (btn.id === 3) storeCard = true;


                if (btn.id === mouseDownBtnId) {

                    if (btn.id === 6 && !isCardContentEmpty(cardContent)) {

                        if (player.gems >= item[0].value &&
                            player.backpack.inventory.length <= player.backpack.maximum) {
                            if(player.backpack.inventory.length <= player.backpack.maximum - 3){

                                player.gems -= item[0].value;
                                for (let i = 0; i < 3; i++) {

                                    const reward = item[0].item[i]; // block object, e.g. blocks[0]
                                    let bp = player.backpack.inventory.findIndex(slot => slot.name.name === reward.name);
                                    if (bp === -1) {
                                        player.backpack.inventory.push({ name: reward, amount: 1 });
                                    } else {
                                        player.backpack.inventory[bp].amount++;
                                    }

                                }
                            
                                activeBubble = {
                                    x: canvas.width / 2,
                                    y: canvas.height / 2,
                                    text: `You got: ${item[0].item[0].name}, ${item[0].item[1].name}, ${item[0].item[2].name}!`,
                                    timer: 70
                                };
                            }
                            else{
                                activeBubble = { x: canvas.width/2, y: canvas.height/2, text: "Looks like your backpack can't hold more!", timer: 50 };
                            }
                            
                        }
                        else {
                            activeBubble = { x: canvas.width/2, y: canvas.height/2, text: "Keep dreaming kid", timer: 50 };
                        }
                    }
                    else if (btn.id === 7) {
                        console.log("Cancel confirmed");

                        cardContent = {
                            name: "",
                            value: 0,
                            description: "",
                            purchaseBtn: storeBtns[7],
                            discardBtn: storeBtns[8]
                        }
                    }
                }
            }
        }

        mouseDownBtnId = null;
        pBtnColor = 'rgba(50, 200, 50, 0.8)';
        dBtnColor = 'rgba(200, 50, 50, 0.8)';
    }
});




function isCardContentEmpty(card) {
  return card.name === "" &&
         card.value === 0 &&
         card.description === "" &&
         card.purchaseBtn === storeBtns[7] &&
         card.discardBtn === storeBtns[8];
}






class Block {
    name;
    x;
    y;
    width;
    height;
    tier;
    isBlock;
    design;
    invdesign;
    type;
    durability;
    lasthit;
    hp;
    custom;

    constructor(n, x, y, w, h, t, ib, d, id, ty, dura, lh, hp, custom){
        this.name = n;
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.tier = t;
        this.isBlock = ib;
        this.design = d;
        this.invdesign = id;
        this.type = ty;
        this.durability = dura;
        this.lasthit - lh;
        this.hp = hp;
        this.custom = custom;
    }
}

const blockIndexToDesign = {
    0: grassDesign,
    1: soilDesign,
    2: stoneDesign,
    3: caveBackgroundDesign,
    4: pant1,
    5: pant2,
    6: hair1,
    7: hair2,
    8: wing1,
    9: hair3,
    10: sandDesign,
    11: grassBlockTreeDesign,
    12: soilBlockTreeDesign,
    13: sword1,
    14: sword2,
    15: grassPropDesign,
    16: lavaDesign,
    17: logDesign,
    18: caveBackgroundTreeDesign,
    19: stoneBlockTreeDesign,
    20: lavaBlockTreeDesign,
    21: dungeonDoorDesign,
    22: grassTreeDesign,
    23: sandTreeDesign,
    24: logTreeDesign,
    25: bedrockDesign,
    26: vegetationBlockDesign,
    27: vegetationBlockTreeDesign,
    28: hangingLeavesDesign,
    29: hangingLeavesTreeDesign,
    30: stoneBackgroundDesign,
    31: stoneBackgroundTreeDesign,
    32: waterDesign,
    33: waterTreeDesign,
};

const blockIndexToDesign2 = {
    0: grassDesign2,
    1: soilDesign2,
    2: stoneDesign2,
    3: caveBackgroundDesign2,
    4: pant1display,
    5: pant2display,
    6: hair1display,
    7: hair2display,
    8: wing1display,
    9: hair3display,
    10: sandDesign2,
    11: grassBlockTreeDesign2,
    12: soilBlockTreeDesign2,
    13: sword1display,
    14: sword2display,
    15: grassPropDesign2,
    16: lavaDesign2,
    17: logDesign2,
    18: caveBackgroundTreeDesign2,
    19: stoneBlockTreeDesign2,
    20: lavaBlockTreeDesign2,
    21: dungeonDoorDesign2,
    22: grassTreeDesign2,
    23: sandTreeDesign2,
    24: logTreeDesign2,
    25: bedrockDesign2,
    26: vegetationBlockDesign2,
    27: vegetationBlockTreeDesign2,
    28: hangingLeavesDesign2,
    29: hangingLeavesTreeDesign2,
    30: stoneBackgroundDesign2,
    31: stoneBackgroundTreeDesign2,
    32: waterDesign2,
    33: waterTreeDesign2,
};


const floatingItemsDesign = {
    0: drawGem,
    1: grassDesign3,
    2: grassBlockTreeDesign3,
    3: soilDesign3,
    4: soilBlockTreeDesign3,
    5: caveBackgroundDesign3,
    6: caveBackgroundTreeDesign3,
    7: stoneDesign3,
    8: stoneBlockTreeDesign3,
    9: lavaDesign3,
    10: lavaBlockTreeDesign3,
    11: grassPropDesign3,
    12: grassTreeDesign3,
    13: sandDesign3,
    14: sandTreeDesign3,
    15: logDesign3,
    16: logTreeDesign3,
    17: vegetationBlockDesign3,
    18: vegetationBlockTreeDesign3,
    19: hangingLeavesDesign3,
    20: hangingLeavesTreeDesign3,
    21: stoneBackgroundDesign3,
    22: stoneBackgroundTreeDesign3,
    23: waterDesign3,
    24: waterTreeDesign3,
}


const itemsClass = [
    { name: `gem`, design: floatingItemsDesign[0], tier: 1},
    { name: `Grass Block`, design: floatingItemsDesign[1], tier: 1},
    { name: `Grass Block Seed`, design: floatingItemsDesign[2], tier: 1},
    { name: `Soil Block`, design: floatingItemsDesign[3], tier: 1},
    { name: `Soil Block Seed`, design: floatingItemsDesign[4], tier: 1},
    { name: `Cave Background`, design: floatingItemsDesign[5], tier: 1},
    { name: `Cave Background Seed`, design: floatingItemsDesign[6], tier: 1},
    { name: `Stone Block`, design: floatingItemsDesign[7], tier: 1},
    { name: `Stone Block Seed`, design: floatingItemsDesign[8], tier: 1},
    { name: `Lava Block`, design: floatingItemsDesign[9], tier: 1},
    { name: `Lava Block Seed`, design: floatingItemsDesign[10], tier: 1},
    { name: `Grass`, design: floatingItemsDesign[11], tier: 2},
    { name: `Grass Seed`, design: floatingItemsDesign[12], tier: 2},
    { name: `Sand Block`, design: floatingItemsDesign[13], tier: 2},
    { name: `Sand Block Seed`, design: floatingItemsDesign[14], tier: 2},
    { name: `Log Block`, design: floatingItemsDesign[15], tier: 2},
    { name: `Log Block Seed`, design: floatingItemsDesign[16], tier: 2},
    { name: `Vegetation Block`, design: floatingItemsDesign[17], tier: 2},
    { name: `Vegetation Block Seed`, design: floatingItemsDesign[18], tier: 2},
    { name: `Hanging Leaves`, design: floatingItemsDesign[19], tier: 2},
    { name: `Hanging Leaves Seed`, design: floatingItemsDesign[20], tier: 2},
    { name: `Stone Background`, design: floatingItemsDesign[21], tier: 2},
    { name: `Stone Background Seed`, design: floatingItemsDesign[22], tier: 2},
    { name: `Stone Background`, design: floatingItemsDesign[23], tier: 2},
    { name: `Stone Background Seed`, design: floatingItemsDesign[24], tier: 2}
];





const blocks = [
    new Block(`Grass Block`, 0, 0, grid, grid, 1, true, blockIndexToDesign[0], blockIndexToDesign2[0], `placable`, 3, undefined, 3, 'grass'),//#0
    new Block(`Soil Block`, 0, 0, grid, grid, 1, true, blockIndexToDesign[1], blockIndexToDesign2[1], `placable`, 3, undefined, 3, 'soil'),//#1
    new Block(`Stone Block`, 0, 0, grid, grid, 1, true, blockIndexToDesign[2], blockIndexToDesign2[2], `placable`, 5, undefined, 5, 'stoneblock'),//#2
    new Block("Cave Background", 0, 0, grid, grid, 1, false, blockIndexToDesign[3], blockIndexToDesign2[3], `placable`, 3, undefined, 3, 'cave'),//#3
    new Block(`Navy Pant`, 0, 0, grid, grid, 2, false, blockIndexToDesign[4], blockIndexToDesign2[4], `wearable-pant`, 0, undefined, 0, 'navy'),//#4
    new Block(`Red Pant`, 0, 0, grid, grid, 2, false, blockIndexToDesign[5], blockIndexToDesign2[5], `wearable-pant`, 0, undefined, 0, 'redpant'),//#5
    new Block(`White lame hair`, 0, 0, grid, grid, 2, false, blockIndexToDesign[6], blockIndexToDesign2[6], `wearable-hair`, 0, undefined, 0, 'lame'),//#6
    new Block(`Messy hair`, 0, 0, grid, grid, 2, false, blockIndexToDesign[7], blockIndexToDesign2[7], `wearable-hair`, 0, undefined, 0, 'messy'),//#7
    new Block(`Blue Pixel Wings`, 0, 0, grid, grid, 2, false, blockIndexToDesign[8], blockIndexToDesign2[8], `wearable-back`, 0, undefined, 0, 'bpw'),//#8
    new Block(`Girl hair`, 0, 0, grid, grid, 3, false, blockIndexToDesign[9], blockIndexToDesign2[9], `wearable-hair`, 0, undefined, 0, 'gh'),//#9
    new Block(`Sand Block`, 0, 0, grid, grid, 2, true, blockIndexToDesign[10], blockIndexToDesign2[10], `placable`, 4, undefined, 4, 'sand'),//#10
    new Block(`Grass Block Seed`, 0, 0, grid, grid, 1, false, blockIndexToDesign[11], blockIndexToDesign2[11], `placable-props`, 1, undefined, 1, 'grassblocktree'),//#11
    new Block(`Soil Block Seed`, 0, 0, grid, grid, 1, false, blockIndexToDesign[12], blockIndexToDesign2[12], `placable-props`, 1, undefined, 1, 'soiltree'),//#12
    new Block(`Sword1`, 0, 0, grid, grid, 4, false, blockIndexToDesign[13], blockIndexToDesign2[13], `wearable-hand`, 0, undefined, 0, 's1'),//#13
    new Block(`Sword2`, 0, 0, grid, grid, 4, false, blockIndexToDesign[14], blockIndexToDesign2[14], `wearable-hand`, 0, undefined, 0, 's2'),//#14
    new Block(`Grass`, 0, 0, grid, grid, 2, false, blockIndexToDesign[15], blockIndexToDesign2[15], `placable-props`, 2, undefined, 2, 'grassprop'),//#15
    new Block(`Lava Block`, 0, 0, grid, grid, 1, true, blockIndexToDesign[16], blockIndexToDesign2[16], `placable`, 4, undefined, 4, 'lava'),//#16
    new Block(`Log Block`, 0, 0, grid, grid, 2, true, blockIndexToDesign[17], blockIndexToDesign2[17], `placable`, 4, undefined, 4, 'logblock'),//#17
    new Block(`Cave Background Seed`, 0, 0, grid, grid, 1, false, blockIndexToDesign[18], blockIndexToDesign2[18], `placable-props`, 1, undefined, 1, 'cavetree'),//#18
    new Block(`Stone Block Seed`, 0, 0, grid, grid, 1, false, blockIndexToDesign[19], blockIndexToDesign2[19], `placable-props`, 1, undefined, 1, 'stoneblocktree'),//#19
    new Block(`Lava Block Seed`, 0, 0, grid, grid, 1, false, blockIndexToDesign[20], blockIndexToDesign2[20], `placable-props`, 1, undefined, 1, 'lavatree'),//#20
    new Block(`Dungeon Door`, 0, 0, grid, grid, 1, false, blockIndexToDesign[21], blockIndexToDesign2[21], `unbreakable`, 1, undefined, 1, 'dungeonDoor'),//#21
    new Block(`Grass Seed`, 0, 0, grid, grid, 2, false, blockIndexToDesign[22], blockIndexToDesign2[22], `placable-props`, 1, undefined, 1, 'grasstree'),//#22
    new Block(`Sand Block Seed`, 0, 0, grid, grid, 2, false, blockIndexToDesign[23], blockIndexToDesign2[23], `placable-props`, 1, undefined, 1, 'sandtree'),//#23
    new Block(`Log Block Seed`, 0, 0, grid, grid, 2, false, blockIndexToDesign[24], blockIndexToDesign2[24], `placable-props`, 1, undefined, 1, 'logtree'),//#24
    new Block(`Bedrock`, 0, 0, grid, grid, 2, true, blockIndexToDesign[25], blockIndexToDesign2[25], `unbreakable`, 1, undefined, 1, 'bedrock'),//#25
    new Block(`Vegetation Block`, 0, 0, grid, grid, 2, true, blockIndexToDesign[26], blockIndexToDesign2[26], `placable`, 3, undefined, 3, 'vegetationblock'),//#26
    new Block(`Vegetation Block Seed`, 0, 0, grid, grid, 2, false, blockIndexToDesign[27], blockIndexToDesign2[27], `placable-props`, 1, undefined, 1, 'vegetationblocktree'),//#27
    new Block(`Hanging Leaves`, 0, 0, grid, grid, 2, false, blockIndexToDesign[28], blockIndexToDesign2[28], `placable-props`, 2, undefined, 3, 'hangingleaves'),//#28
    new Block(`Hanging Leaves Seed`, 0, 0, grid, grid, 2, false, blockIndexToDesign[29], blockIndexToDesign2[29], `placable-props`, 1, undefined, 1, 'hangingleavestree'),//#29
    new Block(`Stone Background`, 0, 0, grid, grid, 2, false, blockIndexToDesign[30], blockIndexToDesign2[30], `placable`, 4, undefined, 4, 'stonebackground'),//#30
    new Block(`Stone Background Seed`, 0, 0, grid, grid, 2, false, blockIndexToDesign[31], blockIndexToDesign2[31], `placable-props`, 1, undefined, 1, 'stonebackgroundtree'),//#31
    new Block(`Water`, 0, 0, grid, grid, 2, false, blockIndexToDesign[32], blockIndexToDesign2[32], `placable-props`, 4, undefined, 4, 'water'),//#32
    new Block(`Water Seed`, 0, 0, grid, grid, 2, false, blockIndexToDesign[33], blockIndexToDesign2[33], `placable-props`, 1, undefined, 1, 'watertree'),//#33
];

const randomX = Math.floor(Math.random() * (WORLD_WIDTH / 50)) * 50;



const item = [
    {
        name: "Basic Seed Pack",
        value: 50,
        item: [tier2gacha(), tier2gacha(), tier2gacha()],
        description: "get 3 tier 2 seeds randomly      Includes:                       " + blocks[22].name + '                        ' + blocks[23].name + '            ' + blocks[24].name + ' ' + blocks[27].name + ' ' + blocks[29].name + ' ' + blocks[31].name + ' ' + blocks[33].name
    },
    {
        name: "Rare Seed Pack",
        value: 500,
        item: [tier2gacha(), tier2gacha(), tier2gacha()],
        description: "get 3 tier 3 seeds randomly. These blocks are more advanced!"
    },
    {
        name: "Farmer Seed Pack",
        value: 500,
        item: [tier2gacha(), tier2gacha(), tier2gacha()],
        description: "get 3 tier 2-3 seeds randomly. But this pack only gives you the best ones for farming!"
    }
]

const pants = [
    {
        name: `Basic Pant`,
        color: 'navy',        
        width: 40,            
        height: 15,           
        xOffset: 0,           
        yOffset: 35           
    },
        {
        name: `Basic Pant2`,
        color: 'darkRed',        
        width: 40,            
        height: 15,           
        xOffset: 0,           
        yOffset: 35           
    }
]


class InventoryBtn {
    id;
    x;
    y;
    width;
    height;


    constructor(id, x, y, width, height){
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

}

function tier2gacha() {
    const possible = [blocks[22], blocks[23], blocks[24], blocks[27], blocks[29], blocks[31], blocks[33]];
    const randIndex = Math.floor(Math.random() * possible.length);
    return possible[randIndex];
}





function treeFarmable(id, roundedx, roundedy) {     // ID2 STANDS FOR ITEM INDEX WHICH IS CALLED IN THE REMOVED DROPPED ITEM METHOD

    const rand = Math.random();
    const rand2 = Math.random();
    const rand3 = Math.random();

    const segments = 16;
    const segmentSize = 1 / segments;

    for (let i = 0; i < segments; i++) {
        if (rand < segmentSize * (i + 1)) {
            for (let j = 0; j < i + 1; j++) {
                dropItem(roundedx, roundedy, id);
            }
            break;
        }
    }

    // Bonus gem drops
    if (itemsClass[id].tier === 1) {
        if (rand2 > 0.5) {
            dropItem(roundedx, roundedy, 0);
        }
    }

    if (itemsClass[id].tier === 2) {
        if (rand2 > 0.5) {
            dropItem(roundedx, roundedy, 0);
        } else if (rand2 > 0.3) {
            dropItem(roundedx, roundedy, 0);
            dropItem(roundedx, roundedy, 0);
        }
    }
    if(rand3 >= 0.95){
        dropItem(roundedx, roundedy, id + 1);
    }


    
}



function treeKindaFarmable(id, roundedx, roundedy) {
    const rand = Math.random();
    const rand2 = Math.random();
    const rand3 = Math.random();

    const segments = 12;
    const segmentSize = 1 / segments;

    for (let i = 0; i < segments; i++) {
        if (rand < segmentSize * (i + 1)) {
            for (let j = 0; j < i + 1; j++) {
                dropItem(roundedx, roundedy, id);
            }
            break;
        }
    }

    // Bonus gem drops
    if (itemsClass[id].tier === 1) {
        if (rand2 > 0.5) {
            dropItem(roundedx, roundedy, 0);
        }
    }

    if (itemsClass[id].tier === 2) {
        if (rand2 > 0.5) {
            dropItem(roundedx, roundedy, 0);
        } else if (rand2 > 0.3) {
            dropItem(roundedx, roundedy, 0);
            dropItem(roundedx, roundedy, 0);
        }
    }
    if(rand3 >= 0.95){
        dropItem(roundedx, roundedy, id + 1);
    }


}

function treeUnFarmable(id, roundedx, roundedy) {
    const rand = Math.random();
    const rand2 = Math.random();
    const rand3 = Math.random();

    const segments = 8;
    const segmentSize = 1 / segments;

    for (let i = 0; i < segments; i++) {
        if (rand < segmentSize * (i + 1)) {
            for (let j = 0; j < i + 1; j++) {
                dropItem(roundedx, roundedy, id);
            }
            break;
        }
    }

    // Bonus gem drops
    if (itemsClass[id].tier === 1) {
        if (rand2 > 0.5) {
            dropItem(roundedx, roundedy, 0);
        }
    }

    if (itemsClass[id].tier === 2) {
        if (rand2 > 0.5) {
            dropItem(roundedx, roundedy, 0);
        } else if (rand2 > 0.3) {
            dropItem(roundedx, roundedy, 0);
            dropItem(roundedx, roundedy, 0);
        }
    }


    if(rand3 >= 0.95){
        dropItem(roundedx, roundedy, id + 1);
    }


}



/*

const hair1 = {
    color: 'brown',
    style: 'spiky', // could be 'short', 'spiky', 'curly', etc.
    xOffset: 0,
    yOffset: -10,
    width: 40,
    height: 15
};



// Draw hair
ctx.fillStyle = hair1.color;

if (hair1.style === 'short') {
    ctx.fillRect(player.x + hair1.xOffset, player.y + hair1.yOffset, hair1.width, hair1.height);
} else if (hair1.style === 'spiky') {
    ctx.beginPath();
    ctx.moveTo(player.x, player.y);
    ctx.lineTo(player.x + 10, player.y - 15);
    ctx.lineTo(player.x + 20, player.y);
    ctx.lineTo(player.x + 30, player.y - 15);
    ctx.lineTo(player.x + 40, player.y);
    ctx.fill();
}


*/

const punchTool = {
  name: "Punch",
  type: "tool",
  isBlock: false,
  invdesign: fistDesign
};

const player = {
    name: `Josep Calleja`,
    age: 23,
    gems: 550,
    experience: 0,
    level: 1,
    x: randomX,
    y: 2950,
    width: 40,
    height: 50,
    color: `#8d5524`,
    canMove: true,
    canPunch: true,
    isMoving: false,
    frozen: false,
    isGhost: false,
    speed: 5,
    facing: 0,
    pants: undefined,
    back: undefined,
    hair: undefined,
    hand: undefined,
    canNoClip: false,
    premium: true,
    showName: false,
    reach: 3,
    canDoubleJump: false,
    jumps: 1,
    pages: 2,
    atBackpack: false,
    atStore: false,
    hasMoved: false,
    backpack: {
        x: 150,
        y: 150,
        width: 500,
        height: 500,
        inventory: [],
        quickUse: [],
        maximum: 20,
    }
}






player.backpack.inventory = [
    {
        name: punchTool,
        amount: 1,

    },
    {
        name: blocks[10],
        amount: 5,

    },
    {
        name: blocks[28],
        amount: 100,

    },

],

player.backpack.quickUse = [
    player.backpack.inventory[0].name,
    undefined,
    undefined,
    //blocks[3]
    undefined
];

player.isJumping = false;

function pant1(){
        ctx.fillStyle = pants[0].color;
        ctx.fillRect(player.x + pants[0].xOffset, player.y + pants[0].yOffset, pants[0].width, pants[0].height);

        // Add a vertical stripe on the left leg
        ctx.fillStyle = 'white';
        ctx.fillRect(player.x + 8, player.y + pants[0].yOffset, 4, pants[0].height);

        // Add a vertical stripe on the right leg
        ctx.fillRect(player.x + player.width - 12, player.y + pants[0].yOffset, 4, pants[0].height);

        ctx.fillStyle = 'black';
        ctx.fillRect(player.x, player.y + pants[0].yOffset, pants[0].width, 2); // Belt line

}

function pant2(){
        ctx.fillStyle = pants[1].color;
        ctx.fillRect(player.x + pants[1].xOffset, player.y + pants[1].yOffset, pants[1].width, pants[1].height);

        // Add a vertical stripe on the left leg
        ctx.fillStyle = 'gold';
        ctx.fillRect(player.x + 8, player.y + pants[1].yOffset, 4, pants[1].height);

        // Add a vertical stripe on the right leg
        ctx.fillRect(player.x + player.width - 12, player.y + pants[1].yOffset, 4, pants[1].height);

        ctx.fillStyle = 'gray';
        ctx.fillRect(player.x, player.y + pants[1].yOffset, pants[1].width, 2); // Belt line

}




function pant1display(x, y, scale = 1) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    const offsetX = -pants[0].width / 2;
    const offsetY = -pants[0].height - 20;

    // Main pants body
    ctx.fillStyle = pants[0].color;
    ctx.fillRect(offsetX + pants[0].xOffset, offsetY + pants[0].yOffset, pants[0].width, pants[0].height);

    // Vertical stripe on the left leg
    ctx.fillStyle = 'white';
    ctx.fillRect(offsetX + 8, offsetY + pants[0].yOffset, 4, pants[0].height);

    // Vertical stripe on the right leg
    ctx.fillRect(offsetX + player.width - 12, offsetY + pants[0].yOffset, 4, pants[0].height);

    // Belt line
    ctx.fillStyle = 'gray';
    ctx.fillRect(offsetX, offsetY + pants[0].yOffset, pants[0].width, 2);

    ctx.restore();
}

function pant2display(x, y, scale = 1) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);

    const offsetX = -pants[1].width / 2;
    const offsetY = -pants[1].height - 20;

    // Main pants body
    ctx.fillStyle = pants[1].color;
    ctx.fillRect(offsetX + pants[1].xOffset, offsetY + pants[1].yOffset, pants[1].width, pants[1].height);

    // Vertical stripe on the left leg
    ctx.fillStyle = 'gold';
    ctx.fillRect(offsetX + 8, offsetY + pants[1].yOffset, 4, pants[1].height);

    // Vertical stripe on the right leg
    ctx.fillRect(offsetX + player.width - 12, offsetY + pants[1].yOffset, 4, pants[1].height);

    // Belt line
    ctx.fillStyle = 'black';
    ctx.fillRect(offsetX, offsetY + pants[1].yOffset, pants[1].width, 2);

    ctx.restore();
}







function drawPants(){
    if(player.pants === blocks[4]){
        pant1();
    }
    else if(player.pants === blocks[5]){
        pant2();
    }

};



/*
function hair1() {
    const hairPixels = [
        { x: 0, y: 0, color: 'black' },
        { x: 4, y: 0, color: '#333' },
        { x: 8, y: 0, color: '#777' },
        { x: 12, y: 0, color: '#aaa' },
        { x: 16, y: 0, color: 'white' },

        { x: -4, y: 4, color: 'black' },
        { x: 0, y: 4, color: '#444' },
        { x: 4, y: 4, color: '#888' },
        { x: 8, y: 4, color: '#bbb' },
        { x: 12, y: 4, color: 'white' },

        { x: -8, y: 8, color: 'black' },
        { x: -4, y: 8, color: '#222' },
        { x: 0, y: 8, color: '#555' },
        { x: 4, y: 8, color: '#999' },
        { x: 8, y: 8, color: '#ddd' },
        { x: 12, y: 8, color: 'white' },

        { x: -12, y: 12, color: 'black' },
        { x: -8, y: 12, color: '#111' },
        { x: -4, y: 12, color: '#444' },
        { x: 0, y: 12, color: '#888' },
        { x: 4, y: 12, color: '#ccc' },
        { x: 8, y: 12, color: 'white' }
    ];

    const pxSize = 4; // size of one "pixel"
    hairPixels.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.fillRect(player.x + p.x, player.y + p.y, pxSize, pxSize);
    });
}


*/


function hair1(){

        ctx.imageSmoothingEnabled = false;



        if(player.facing == 0){
        ctx.save();

        ctx.scale(-1, 1); // Flip horizontally

        ctx.drawImage(hair01, -player.x + 2, player.y - player.height / 2.5, -45, 50);
        ctx.restore();
        }
        else{
            ctx.drawImage(hair01, player.x - 2, player.y - player.height / 2.5, 45, 50);
        }



}

function hair1display(x, y, scale){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.imageSmoothingEnabled = false;

    // Draw hair at an offset relative to character head
    ctx.drawImage(hair01, -25, -player.height / 2.8, 50, 50);

    ctx.restore();
}


function hair2(){

        ctx.imageSmoothingEnabled = false;



        if(player.facing == 0 /*|| player.canMove */){
        ctx.save();

        ctx.scale(-1, 1); // Flip horizontally

        ctx.drawImage(hair02, -player.x + 7, player.y - player.height / 1.3, -55, 50);
        ctx.restore();
        }
        else{
            ctx.drawImage(hair02, player.x - 7, player.y - player.height / 1.3, 55, 50);
        }

}



function hair2display(x, y, scale){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.imageSmoothingEnabled = false;

    // Draw hair at an offset relative to character head
    ctx.drawImage(hair02, -25, -player.height / 1.3, 50, 50);

    ctx.restore();
}



function hair3(){

        ctx.imageSmoothingEnabled = false;



        if(player.facing == 0 /*|| player.canMove */){
            ctx.save();
            
            ctx.scale(-1, 1); // Flip horizontally
            
            ctx.drawImage(hair03, -player.x + 7, player.y - player.height / 2.2, -55, 50);
            ctx.restore();
        }
        else{
            ctx.drawImage(hair03, player.x - 7, player.y - player.height / 2.2, 55, 50);
        }

}


function hair3display(x, y, scale){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.imageSmoothingEnabled = false;

    // Draw hair at an offset relative to character head
    ctx.drawImage(hair03, -25, -player.height / 2, 50, 50);

    ctx.restore();
}

wingsanimating = false;
function wing1(){

        ctx.imageSmoothingEnabled = false;




        if(player.canMove || wingsanimating){
            ctx.drawImage(wings01,0, 0, 16, 16, player.x - 30, player.y - player.height / 2, 100, 100);
        }
        else{
            ctx.drawImage(wings01,0, 16, 16, 16, player.x - 30, player.y - player.height / 2, 100, 100);
        }

}


function sword1(){

        ctx.imageSmoothingEnabled = false;




        if(player.facing == 0){
            ctx.save();


            ctx.translate(player.x + grid - 10, player.y - player.height + grid + 15);
            ctx.scale(-1, 1);

            // Draw the image with positive width and height, relative to the translated origin
            ctx.drawImage(sword01, 0, 0, 50, 50);

            ctx.restore();

        }
        else{
            ctx.drawImage(sword01, player.x, player.y - player.height + grid + 15, 50, 50);
            
        }

}

function sword1display(x, y, scale){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.imageSmoothingEnabled = false;

    // Draw hair at an offset relative to character head
    ctx.drawImage(sword01, -25, -player.height / 2, 50, 50);

    ctx.restore();
}


function sword2(){

        ctx.imageSmoothingEnabled = false;




        if(player.facing == 0){
            ctx.save();


            ctx.translate(player.x + grid - 7, player.y - player.height + grid + 17);
            ctx.scale(-1, 1);

            // Draw the image with positive width and height, relative to the translated origin
            ctx.drawImage(sword02, 0, 0, 60, 50);

            ctx.restore();

        }
        else{
            ctx.drawImage(sword02, player.x - 3, player.y - player.height + grid + 17, 60, 50);
            
        }

}

function sword2display(x, y, scale){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.imageSmoothingEnabled = false;

    // Draw hair at an offset relative to character head
    ctx.drawImage(sword02, -25, -player.height / 2, 50, 50);

    ctx.restore();
}

function wing1display(x, y, scale) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    ctx.imageSmoothingEnabled = false;

    // Draw wings at an offset relative to the character
    ctx.drawImage(wings01, 0, 16, 16, 16, -25, -player.height / 2, 50, 50);

    ctx.restore();
}


function drawWings(){
    if(player.back === blocks[8]){
        wing1();
    }

}


function drawPants(){
    if(player.pants === blocks[4]){
        pant1();
    }
    else if(player.pants === blocks[5]){
        pant2();

    }

};

function drawHair(){
    if(player.hair === blocks[6]){
        hair1();
    }
    else if(player.hair === blocks[7]){
        hair2();
    }
    else if(player.hair === blocks[9]){
        hair3();
    }

};


function drawHand(){

    if(player.hand == blocks[13]){
        sword1();
    }
    else if(player.hand == blocks[14]){
        sword2();
    }
    

};



function drawGem(x, y){
    
    ctx.imageSmoothingEnabled = false;
    
    ctx.drawImage(gem1, x, y, 20, 20);
}

let footFrame = 0;
let lastFootSwitch = Date.now();
const footDelay = 150; // ms between frames



function drawPlayer() {



    
    drawWings()
    // Body
    ctx.fillStyle = player.color;

    if (player.isGhost || player.canNoClip) {
        ctx.globalAlpha = 0.3;

    }

    if(player.facing == 0){
        ctx.imageSmoothingEnabled = false;

        ctx.drawImage(playerBody, 28, 32, 28, 32, player.x, player.y, player.width, player.height);
        ctx.drawImage(playerBody, 28, 0, 28, 32, player.x, player.y, player.width, player.height);
        ctx.drawImage(playerBody, 28, 64, 28, 32, player.x, player.y, player.width, player.height);
        ctx.drawImage(playerBody, 28, 96, 28, 32, player.x, player.y, player.width, player.height);
        if(!player.isMoving){
            ctx.drawImage(playerBody, 28, 128, 28, 32, player.x, player.y, player.width, player.height);
        }

        

        if (player.isMoving) {
            let footX = player.isMoving ? (footFrame === 0 ? 0 : 28) : 28;
            ctx.drawImage(playerBody, footX, 160, 28, 32, player.x, player.y, player.width, player.height);
            if (Date.now() - lastFootSwitch > footDelay) {
                footFrame = (footFrame + 1) % 2;
                lastFootSwitch = Date.now();
            }
        }
        else {
            footFrame = 0;
        }
        
        
    }
    else{
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(playerBody, 0, 32, 28, 32, player.x, player.y, player.width, player.height);
        ctx.drawImage(playerBody, 0, 0, 28, 32, player.x, player.y, player.width, player.height);
        ctx.drawImage(playerBody, 0, 64, 28, 32, player.x, player.y, player.width, player.height);
        drawHand();
        ctx.drawImage(playerBody, 0, 96, 28, 32, player.x, player.y, player.width, player.height);
        if(!player.isMoving){
            ctx.drawImage(playerBody, 0, 128, 28, 32, player.x, player.y, player.width, player.height);
        }
        

        if (player.isMoving) {
            let footX = player.isMoving ? (footFrame === 0 ? 0 : 28) : 28;
            ctx.drawImage(playerBody, footX, 192, 28, 32, player.x, player.y, player.width, player.height);
            if (Date.now() - lastFootSwitch > footDelay) {
                footFrame = (footFrame + 1) % 2;
                lastFootSwitch = Date.now();
            }
        }
        else {
            footFrame = 0;
        }
    }



    ctx.globalAlpha = 1;

    // Add more styles as needed


    // Eyes
    if (player.facing === 1) {
        if (player.isGhost) {
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1.5;

            // Left X eye
            ctx.beginPath();
            ctx.moveTo(player.x + 14, player.y + 4);
            ctx.lineTo(player.x + 19, player.y + 9);
            ctx.moveTo(player.x + 19, player.y + 4);
            ctx.lineTo(player.x + 14, player.y + 9);
            ctx.stroke();

            // Right X eye
            ctx.beginPath();
            ctx.moveTo(player.x + 26, player.y + 4);
            ctx.lineTo(player.x + 31, player.y + 9);
            ctx.moveTo(player.x + 31, player.y + 4);
            ctx.lineTo(player.x + 26, player.y + 9);
            ctx.stroke();
        } else {
            ctx.fillStyle = 'white';
            ctx.fillRect(player.x + 14, player.y + 4, 5, 5);
            ctx.fillRect(player.x + 26, player.y + 4, 5, 5);

            ctx.fillStyle = 'pink';
            ctx.fillRect(player.x + 14, player.y + 4, 5, 1.5);
            ctx.fillRect(player.x + 26, player.y + 4, 5, 1.5);

            ctx.fillStyle = `black`;
            if (!player.canMove) {
                ctx.fillRect(player.x + 17, player.y + 6, 1.5, 1.5);
                ctx.fillRect(player.x + 29, player.y + 6, 1.5, 1.5);
            } else {
                ctx.fillRect(player.x + 17, player.y + 6.5, 1.5, 1.5);
                ctx.fillRect(player.x + 29, player.y + 6.5, 1.5, 1.5);
            }
        }
    } else {
        if (player.isGhost) {
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1.5;

            // Left X eye
            ctx.beginPath();
            ctx.moveTo(player.x + 7, player.y + 4);
            ctx.lineTo(player.x + 12, player.y + 9);
            ctx.moveTo(player.x + 12, player.y + 4);
            ctx.lineTo(player.x + 7, player.y + 9);
            ctx.stroke();

            // Right X eye
            ctx.beginPath();
            ctx.moveTo(player.x + 19, player.y + 4);
            ctx.lineTo(player.x + 24, player.y + 9);
            ctx.moveTo(player.x + 24, player.y + 4);
            ctx.lineTo(player.x + 19, player.y + 9);
            ctx.stroke();
        } else {
            ctx.fillStyle = 'white';
            ctx.fillRect(player.x + 7, player.y + 4, 5, 5);
            ctx.fillRect(player.x + 19, player.y + 4, 5, 5);

            ctx.fillStyle = 'pink';
            ctx.fillRect(player.x + 7, player.y + 4, 5, 1.5);
            ctx.fillRect(player.x + 19, player.y + 4, 5, 1.5);

            ctx.fillStyle = `black`;
            if (!player.canMove) {
                ctx.fillRect(player.x + 20, player.y + 6, 1.5, 1.5);
                ctx.fillRect(player.x + 8, player.y + 6, 1.5, 1.5);
            } else {
                ctx.fillRect(player.x + 20, player.y + 6.5, 1.5, 1.5);
                ctx.fillRect(player.x + 8, player.y + 6.5, 1.5, 1.5);
            }
        }
    }


    // Mouth (horizontal line)
    if (player.facing === 1) {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = `black`;
        ctx.fillRect(player.x + 13, player.y + 12, 1, 1);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(player.x + 14, player.y + 14);
        ctx.lineTo(player.x + player.width - 12, player.y + 14);
        ctx.stroke();
    }
    else {
        ctx.strokeStyle = 'black';
        ctx.fillStyle = `black`;
        ctx.fillRect(player.x + player.width - 14, player.y + 12, 1, 1);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(player.x + 14, player.y + 14);
        ctx.lineTo(player.x + player.width - 14, player.y + 14);
        ctx.stroke();
    }



    drawPants();
    drawHair();
    


    
        


    




    if(player.showName){
        if(player.premium){
            ctx.fillStyle = 'gold';
            ctx.font = '12px Arial';
        }
        else{
            ctx.fillStyle = 'white';
            ctx.font = '11px Arial';
        }

            ctx.textAlign = 'center';
            ctx.fillText(player.name, player.x + player.width / 2, player.y - 5);
        }
    }





const gameblocks = [
    { x: randomX, y: 2950, blockIndex: 21, custom: blocks[21].custom, isBlock: false, durability: blocks[21].durability, lasthit: 0, hp: blocks[21].hp, tier: blocks[21].tier, type: 'unbreakable'},
    { x: randomX, y: 3000, blockIndex: 25, custom: blocks[25].custom, isBlock: true, durability: blocks[25].durability, lasthit: 0, hp: blocks[25].hp, tier: blocks[25].tier, type: 'unbreakable'}
];

for (let i = 0; i < row; i++) {
    const baseX = i * grid; // Recalculate x position once per iteration
    for (let j = 0; j < 40; j++) {
        let yPos = 3000 + (j * grid); // Calculate y position based on `j`

        if (j === 0) {
            if( baseX !== randomX){
                gameblocks.push({ x: baseX, y: yPos, blockIndex: 0, custom: blocks[0].custom, isBlock: true, durability: blocks[0].durability, lasthit: 0, hp: blocks[0].hp, tier: blocks[0].tier});

            }
        }
        else {
            let rand = Math.random();

            if(j >= 34){
                if(j < 39){
                    if(rand < 0.10){
                        gameblocks.push({ x: baseX, y: yPos, blockIndex: 16, custom: blocks[16].custom, isBlock: true, durability: blocks[16].durability, lasthit: 0, hp: blocks[16].hp, tier: blocks[16].tier});
                    }
                    else if (rand < 0.15) {
                        gameblocks.push({ x: baseX, y: yPos, blockIndex: 2, custom: blocks[2].custom, isBlock: true, durability: blocks[2].durability, lasthit: 0, hp: blocks[2].hp, tier: blocks[2].tier });
                    } else {
                        gameblocks.push({ x: baseX, y: yPos, blockIndex: 1, custom: blocks[1].custom, isBlock: true, durability: blocks[1].durability, lasthit: 0, hp: blocks[1].hp, tier: blocks[1].tier });
                    }
                }
                else{
                    gameblocks.push({ x: baseX, y: yPos, blockIndex: 25, custom: blocks[25].custom, isBlock: true, durability: blocks[25].durability, lasthit: 0, hp: blocks[25].hp, tier: blocks[25].tier, type: 'unbreakable'});
                }
                
            }
            else{
            if (rand < 0.05) {
                gameblocks.push({ x: baseX, y: yPos, blockIndex: 2, custom: blocks[2].custom, isBlock: true, durability: blocks[2].durability, lasthit: 0, hp: blocks[2].hp, tier: blocks[2].tier });
            } 
            else {
                gameblocks.push({ x: baseX, y: yPos, blockIndex: 1, custom: blocks[1].custom, isBlock: true, durability: blocks[1].durability, lasthit: 0, hp: blocks[1].hp, tier: blocks[1].tier });
            }
            }

        }
    }
}


const gameBackgrounds = [];

for (let i = 0; i < row; i++) {
  const baseX = i * grid; // Recalculate x position once per iteration
  for (let j = 0; j < 40; j++) {
    let yPos = 3000 + (j * grid); // Calculate y position based on `j`

    gameBackgrounds.push({ x: baseX, y: yPos, blockIndex: 3, custom: blocks[3].custom, isBlock: false, durability: blocks[3].durability, lasthit: 0, hp: blocks[3].hp, tier: blocks[3].tier    });

  }
}



const floatingItems = [];

const gameProps = [];









function fistDesign(x, y, scale = 1) {
  ctx.save();

  // Move to position, then scale
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  const originX = -20; // Center offset for fist, similar to -grid / 2
  const originY = -25; // Adjust as needed to center fist

  // Base hand color
  ctx.fillStyle = "#E0B899";  
  // Outline color
  ctx.strokeStyle = "#8C5A3C";
  ctx.lineWidth = 2;

  // Draw palm (rounded rectangle)
  ctx.beginPath();
  ctx.moveTo(5 + originX, 20 + originY);
  ctx.lineTo(5 + originX, 40 + originY);
  ctx.lineTo(35 + originX, 40 + originY);
  ctx.lineTo(35 + originX, 20 + originY);
  ctx.quadraticCurveTo(35 + originX, 15 + originY, 30 + originX, 15 + originY);
  ctx.lineTo(10 + originX, 15 + originY);
  ctx.quadraticCurveTo(5 + originX, 15 + originY, 5 + originX, 20 + originY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Draw fingers (four rectangles with slight rounding)
  const fingerWidths = [8, 8, 8, 8];
  const fingerHeights = [12, 12, 12, 12];
  let fingerX = 7 + originX;
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(fingerX, 8 + originY);
    ctx.lineTo(fingerX, 20 + originY);
    ctx.lineTo(fingerX + fingerWidths[i], 20 + originY);
    ctx.lineTo(fingerX + fingerWidths[i], 8 + originY);
    ctx.quadraticCurveTo(
      fingerX + fingerWidths[i] - 2, 5 + originY,
      fingerX + fingerWidths[i] - 4, 5 + originY
    );
    ctx.lineTo(fingerX + 4, 5 + originY);
    ctx.quadraticCurveTo(fingerX + 2, 5 + originY, fingerX, 8 + originY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    fingerX += fingerWidths[i] + 1;
  }

  // Thumb
  ctx.beginPath();
  ctx.moveTo(-2 + originX, 30 + originY);
  ctx.lineTo(5 + originX, 30 + originY);
  ctx.lineTo(5 + originX, 22 + originY);
  ctx.quadraticCurveTo(8 + originX, 20 + originY, 12 + originX, 22 + originY);
  ctx.lineTo(12 + originX, 30 + originY);
  ctx.lineTo(20 + originX, 30 + originY);
  ctx.lineTo(20 + originX, 35 + originY);
  ctx.quadraticCurveTo(20 + originX, 40 + originY, 15 + originX, 40 + originY);
  ctx.lineTo(5 + originX, 40 + originY);
  ctx.quadraticCurveTo(0 + originX, 40 + originY, 0 + originX, 35 + originY);
  ctx.lineTo(0 + originX, 30 + originY);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}





// ========================================================================================================================================>
// BLOCKS DESIGN 
// ========================================================================================================================================>



function grassDesign(x, y, scale = 1) {

    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(grassBlock, x, y, grid, grid);

    ctx.restore();
}


function grassDesign2(x, y, scale = 1) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(grassBlock, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function grassDesign3(x, y, scale = 0.5) {
    ctx.save();

    ctx.translate(x, y);
    ctx.scale(scale, scale);

    const originX = -grid / 2;
    const originY = -grid / 2;

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(grassBlock, -grid / 2, -grid / 2, grid, grid);


    ctx.fillStyle = `black`;
    ctx.strokeRect(originX, originY, grid, grid);
    ctx.restore();
}




function soilDesign(x, y, scale = 1) {

    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(soil, x, y, grid, grid);

    ctx.restore();
}


function soilDesign2(x, y, scale = 1) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(soil, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function soilDesign3(x, y, scale = 0.5) {
    ctx.save();

    ctx.translate(x, y);
    ctx.scale(scale, scale);

    const originX = -grid / 2;
    const originY = -grid / 2;

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(soil, -grid / 2, -grid / 2, grid, grid);


    ctx.fillStyle = `black`;
    ctx.strokeRect(originX, originY, grid, grid);
    ctx.restore();
}



function stoneDesign(x, y, scale = 1) {

    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(stone, x, y, grid, grid);

    ctx.restore();

}




function caveBackgroundDesign(x, y, scale = 1) {

    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(caveBG, x, y, grid, grid);

    ctx.restore();

}

function caveBackgroundDesign2(x, y, scale = 1) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(caveBG, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function caveBackgroundDesign3(x, y, scale = 0.5) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(caveBG, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function stoneDesign2(x, y, scale = 1) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(stone, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function stoneDesign3(x, y, scale = 0.5) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(stone, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function lavaDesign(x, y, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(lava, x, y, grid, grid);

    ctx.restore();
}

function lavaDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(lava, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function lavaDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(lava, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function sandDesign(x, y, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(sand1, x, y, grid, grid);

    ctx.restore();
}

function sandDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(sand1, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function sandDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(sand1, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}




function grassPropDesign(x, y, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(grass, x, y, grid, grid);

    ctx.restore();
}

function grassPropDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(grass, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function grassPropDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(grass, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function logDesign(x, y, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(log, x, y, grid, grid);

    ctx.restore();
}

function logDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(log, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function logDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(log, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function vegetationBlockDesign(x, y, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(vegetationBlock, x, y, grid, grid);

    ctx.restore();
}

function vegetationBlockDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(vegetationBlock, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function vegetationBlockDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(vegetationBlock, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function hangingLeavesDesign(x, y, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);
    ctx.imageSmoothingEnabled = false;
    
    ctx.drawImage(wheat, x, y, grid, grid);
    

    ctx.restore();
}

function hangingLeavesDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(wheat, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function hangingLeavesDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(wheat, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function stoneBackgroundDesign(x, y, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(stoneBackground, x, y, grid, grid);

    ctx.restore();
}

function stoneBackgroundDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(stoneBackground, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function stoneBackgroundDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(stoneBackground, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}





function hasSameBlockAbove(x, y, hl) {
    return hl.some(hl =>
        hl.x === x &&
        hl.y === y - grid
    );
}


function waterDesign(x, y, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);
    ctx.globalAlpha = 0.6;
    ctx.imageSmoothingEnabled = false;
    
    const waterFinder = gameProps.filter(b => b.custom == "water");
    let hasAbove = hasSameBlockAbove(x, y, waterFinder);
    if(hasAbove){
        ctx.drawImage(water, 0, 32, 32, 32, x, y, grid, grid);
    }
    else{
        ctx.drawImage(water,0, 0, 32, 32, x, y, grid, grid);
    }

    ctx.restore();
}

function waterDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(water, 0, 0, 32, 32,  -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function waterDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(water, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}























// UNBREAKABLE =====================================================================================================>


function dungeonDoorDesign(x, y, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(dungeonDoor, x, y, grid, grid);

    ctx.restore();
}

function dungeonDoorDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(dungeonDoor, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function bedrockDesign(x, y, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(bedrock, x, y, grid, grid);

    ctx.restore();
}

function bedrockDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(bedrock, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

// ========================================================================================================================================>
// TREES DESIGN 
// ========================================================================================================================================>


function grassBlockTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(grassBlockTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}



function grassBlockTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(grassBlockSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function grassBlockTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(grassBlockSeed, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function soilBlockTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(soilBlockTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}


function soilBlockTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(soilBlockSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function soilBlockTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(soilBlockSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function caveBackgroundTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(caveBGTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}


function caveBackgroundTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(caveBGSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function caveBackgroundTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(caveBGSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function stoneBlockTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(stoneBlockTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}


function stoneBlockTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(stoneBlockSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function stoneBlockTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(stoneBlockSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function lavaBlockTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(lavaBlockTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}


function lavaBlockTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(lavaBlockSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}



function lavaBlockTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(lavaBlockSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function grassTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(grassTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}


function grassTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(grassSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}



function grassTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(grassSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function sandTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(sandTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}


function sandTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(sandSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}



function sandTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(sandSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function logTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(logTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}


function logTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(logSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}



function logTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(logSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function vegetationBlockTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(vegetationBlockTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}


function vegetationBlockTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(vegetationBlockSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}



function vegetationBlockTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(vegetationBlockSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}

function hangingLeavesTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(hangingLeavesTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}


function hangingLeavesTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(hangingLeavesSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}



function hangingLeavesTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(hangingLeavesSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function vegetationBlockTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(vegetationBlockTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}


function vegetationBlockTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(vegetationBlockSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}



function vegetationBlockTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(vegetationBlockSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}




function hangingLeavesTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(hangingLeavesTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}


function hangingLeavesTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(hangingLeavesSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}



function hangingLeavesTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(hangingLeavesSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}




function stoneBackgroundTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(stoneBackgroundTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}


function stoneBackgroundTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(stoneBackgroundSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}



function stoneBackgroundTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(stoneBackgroundSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}


function waterTreeDesign(x, y, y2, scale = 1){
    ctx.save();
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(waterTree, 0, y2, 32, 32, x, y, grid, grid);

    ctx.restore();
}


function waterTreeDesign2(x, y, scale = 1){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(waterSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}



function waterTreeDesign3(x, y, scale = 0.5){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);


    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(waterSeed, 0, 0, 32, 32, -grid / 2, -grid / 2, grid, grid);

    ctx.restore();
}
























function BuildBlocks(blockIndex, x, y) {
    // 1) don’t build on an occupied tile
    if (gameblocks.some(b => b.x === x && b.y === y)) return;

    // 2) fetch the block data
    const blockData = blocks[blockIndex];
    if (!blockData) return;

    // 3) draw it
    const designFn = blockIndexToDesign[blockIndex];
    if (designFn) {
        designFn(x, y);
    } else {
        ctx.fillRect(x, y, grid, grid);
    }

    // 4) record it
    gameblocks.push({ blockIndex, x, y, isBlock: blockData.isBlock, durability: blockData.durability, lasthit: 0, hp: blockData.hp, tier: blockData.tier, custom: blockData.custom });
}



function BuildBackground(blockIndex, x, y) {
  // 1) don’t paint if it’s already there?
  //    (optional: you may overwrite, so you might remove any existing bg first)
  // 2) draw it
    const b = blocks[blockIndex];
    const designFn = blockIndexToDesign[blockIndex];
    if (designFn) {
        designFn(x, y);
    }
    else {
        ctx.fillRect(x, y, grid, grid);
    }
    // 3) record it—if you need to track it for re‐draw:
    gameBackgrounds.push({ blockIndex, x, y, isBlock: b.isBlock, durability: b.durability, lasthit: 0, hp: b.hp, tier: b.tier, custom: b.custom });
}



function BuildProps(blockIndex, x, y, z = 0) {
  // 1) don’t build on an occupied tile
  if (gameblocks.some(b => b.x === x && b.y === y)) return;

  // 2) fetch the block data
  const blockData = blocks[blockIndex];
  if (!blockData) return;

  // 3) draw it
  const designFn = blockIndexToDesign[blockIndex];
  if (designFn) {
    designFn(x, y);
  } else {
    ctx.fillRect(x, y, grid, grid);
  }

  // 4) record it
  const prop = {
    blockIndex,
    x,
    y,
    isBlock: blockData.isBlock,
    durability: blockData.durability,
    lasthit: 0,
    hp: blockData.hp,
    tier: blockData.tier,
    custom: blockData.custom,
    ready: 0
  };

  gameProps.push(prop);

  setTimeout(() => {
    prop.ready = 1;
  }, z/2);

  setTimeout(() => {
    prop.ready = 2;
  }, z);
}


function dropItem(x, y, itemIndex){
    rx = Math.floor(((Math.random() * 30)) + x);
    ry = Math.floor(((Math.random() * 30)) + y);
    floatingItems.push({name: itemsClass[itemIndex].name, img: itemsClass[itemIndex].design, rx, ry, itemIndex});
}



function removeBlocks(x, y) {
    const index = gameblocks.findIndex(block => block.x === x && block.y === y);

    if (index !== -1) {
        gameblocks.splice(index, 1);
    }
}

function removeBackground(x, y) {
    const index = gameBackgrounds.findIndex(bg => bg.x === x && bg.y === y);

    if (index !== -1) {
        gameBackgrounds.splice(index, 1);
    }
}

function removeProps(x, y) {
    const index = gameProps.findIndex(p => p.x === x && p.y === y);

    if (index !== -1) {
        gameProps.splice(index, 1);
    }
}










const maxItem = 200;


function removeDroppedItem(x, y) {
    const cellX = Math.floor(x / grid);
    const cellY = Math.floor(y / grid);

    const matchedIndices = [];

    // Collect all matching item indices
    floatingItems.forEach((item, i) => {
        const itemCellY = Math.floor(item.ry / grid);
        const frac = (item.rx / grid) - Math.floor(item.rx / grid);
        const leaningLeft = frac < 0.5;
        const baseCellX = Math.floor(item.rx / grid);

        const matches =
            (leaningLeft
                ? (cellX === baseCellX || cellX === baseCellX - 1)
                : cellX === baseCellX) &&
            cellY === itemCellY;

        if (matches) matchedIndices.push(i);
    });

    // Sort in reverse to safely splice without messing up indices
    matchedIndices.reverse();

    matchedIndices.forEach(index => {
        const itemIndex = floatingItems[index].itemIndex;

        if (itemIndex === 0) {
            player.gems++;
        } else if (itemIndex === 1) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[0]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[0], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 2) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[11]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[11], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
            
        }
        else if (itemIndex === 3) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[1]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[1], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 4) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[12]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[12], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 5) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[3]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[3], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 6) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[18]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[18], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 7) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[2]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[2], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 8) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[19]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[19], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 9) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[16]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[16], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 10) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[20]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[20], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 11) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[15]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[15], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 12) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[22]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[22], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 13) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[10]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[10], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 14) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[23]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[23], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 15) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[17]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[17], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 16) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[24]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[24], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 17) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[26]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[26], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 18) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[27]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[27], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 19) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[28]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[28], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 20) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[29]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[29], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 21) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[30]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[30], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 22) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[31]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[31], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 23) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[32]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[32], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }
        else if (itemIndex === 24) {
            let bp = player.backpack.inventory.findIndex(item => item.name === blocks[33]);
            if (bp === -1) {
                if(player.backpack.maximum <= player.backpack.inventory.length){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory.push({ name: blocks[33], amount: 1 });
                    
                }
                
            } else {
                if(player.backpack.inventory[bp].amount >= maxItem){
                    console.log("Inventory Full");
                    return;
                }
                else{
                    player.backpack.inventory[bp].amount++;
                }
                
            }
        }

        floatingItems.splice(index, 1);
    });
    
}










function inventoryBtn(x, y){
    ctx.fillStyle = `RGBA(255, 255, 255, 0.7)`

    ctx.fillRect(x, y, grid, grid);


    for(let i = 0; i < 3; i++){
        ctx.fillStyle = `RGBA(200, 200, 200, 0.7)`;
        ctx.fillRect(x + 10, (y + 5) + (15 * i), 30, 10);
    }


}

function shopBtn(x, y) {
    ctx.fillStyle = `rgba(255, 255, 255, 0.7)`;
    ctx.fillRect(x, y, grid, grid);

    // Gem body (faceted shape)
    ctx.beginPath();
    ctx.moveTo(x + grid / 2, y + 6);             // Top center
    ctx.lineTo(x + 10, y + 14);                  // Top-left
    ctx.lineTo(x + 6, y + 26);                   // Bottom-left
    ctx.lineTo(x + grid / 2, y + grid - 6);      // Bottom center
    ctx.lineTo(x + grid - 6, y + 26);            // Bottom-right
    ctx.lineTo(x + grid - 10, y + 14);           // Top-right
    ctx.closePath();
    ctx.fill();


}




const btns = [
    new InventoryBtn(1, grid * 3, grid * 6, grid * 2, grid * 2),
    new InventoryBtn(2, grid * 6, grid * 6, grid * 2, grid * 2),
    new InventoryBtn(3, grid * 9, grid * 6, grid * 2, grid * 2),
    new InventoryBtn(4, grid * 12, grid * 6, grid * 2, grid * 2),
    new InventoryBtn(5, grid * 15, grid * 6, grid * 2, grid * 2),
    new InventoryBtn(6, grid * 3, grid * 9, grid * 2, grid * 2),
    new InventoryBtn(7, grid * 6, grid * 9, grid * 2, grid * 2),
    new InventoryBtn(8, grid * 9, grid * 9, grid * 2, grid * 2),
    new InventoryBtn(9, grid * 12, grid * 9, grid * 2, grid * 2),
    new InventoryBtn(10, grid * 15, grid * 9, grid * 2, grid * 2),
]

const itemsPerPage = 10;
let currentpage = 0;



function inventoryUi(x, y) {
    
    ctx.lineWidth = 10;
    
    ctx.fillStyle = `rgba(150, 150, 255, 0.6)`;
    ctx.fillRect(x, y, grid * 16, grid * 10);

    ctx.strokeStyle = `rgba(100, 100, 200, 0.8)`;
    ctx.strokeRect(x, y, grid * 16, grid * 10);

    const slotCount = 4;

    for (let i = 0; i < slotCount; i++) {
        const slotX = x + grid * (1 + i * 3);
        const slotY = y + grid;
        let designFn;



        ctx.fillStyle = `rgba(150, 150, 200, 0.6)`;
        ctx.fillRect(slotX, slotY, grid * 2, grid * 2);


        if (itemIndex === i) {
            ctx.strokeStyle = `gold`;
            ctx.lineWidth = 3;
        } else {
            ctx.strokeStyle = `blue`;
            ctx.lineWidth = 2;
        }
        ctx.strokeRect(slotX, slotY, grid * 2, grid * 2);


        const centerX = slotX + grid;
        const centerY = slotY + grid;
        if(player.backpack.quickUse[i] !== undefined){
            designFn = player.backpack.quickUse[i].invdesign;
            designFn(centerX, centerY, 2);
            ctx.textAlign = "start";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "white";
            ctx.font = `20px arial`;
            const item0 = player.backpack.quickUse[i];
            const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
            const item = player.backpack.inventory[item1];

            if(item.amount > 1){
                const quantityText = item.amount;
                const textWidth = ctx.measureText(quantityText).width;
                ctx.fillText(quantityText, centerX + 45 - textWidth, centerY + 35);
            }
        }

    }


    ctx.font = "30px Arial";
    const gemText = player.gems;
    const textWidth = ctx.measureText(gemText).width;

    ctx.fillStyle = 'blue';

    ctx.imageSmoothingEnabled = false;
    ctx.fillText(gemText, x + grid * 16 - textWidth - grid + 10, y + grid);
    ctx.drawImage(gem1, x + grid * 15 + 10, y + grid - 20, 35, 35);
    const experienceText = player.experience + '🍊';
    const textWidth2 = ctx.measureText(experienceText).width;

    ctx.fillStyle = 'yellow';
    ctx.fillText(experienceText, x + grid * 16 - textWidth2, y + grid * 2);

    const levelText = `${player.level}➕`;
    const textWidth3 = ctx.measureText(levelText).width;

    ctx.fillText(levelText, x + grid * 16 - textWidth3, y + grid * 3);




    let i = 0;
    btns.forEach(btn => {
        const idx = i + currentpage * itemsPerPage;
        const item = player.backpack.inventory[idx];
        const designFn5 = item?.name.invdesign;
        ctx.fillStyle = 'rgba(150, 150, 200, 0.6)';
        ctx.fillRect(btn.x, btn.y, btn.width, btn.height);

        if (designFn5) {
            const centerX = btn.x + btn.width / 2;
            const centerY = btn.y + btn.height / 2;
            designFn5(centerX, centerY, 2);
                ctx.textAlign = "start";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "white";
                ctx.font = `20px arial`;
                if(item.amount > 1){
                    const quantityText = item.amount;
                    const textWidth = ctx.measureText(quantityText).width;
                    ctx.fillText(quantityText, centerX + 45 - textWidth, centerY + 35);
                }
        }

        if (i < player.backpack.inventory.length) {
            i++;
        }
    });


    /*

    // Inventory item buttons
    let i = 0;
    btns.forEach(btn => {
        const designFn5 = player.backpack.inventory[i]?.name.invdesign;
        ctx.fillStyle = `rgba(150, 150, 200, 0.6)`;
        ctx.fillRect(btn.x, btn.y, btn.width, btn.height);

        if (designFn5) {
            const centerX = btn.x + btn.width / 2;
            const centerY = btn.y + btn.height / 2;
            designFn5(centerX, centerY, 2);
        }

        if (i < player.backpack.inventory.length) {
            i++;
        }
    });

    */
    

    if (activeBubble) {
        bubbleText(activeBubble.x, activeBubble.y, activeBubble.text);
        activeBubble.timer--;


        if (activeBubble.timer <= 0) activeBubble = null;


    }

    ctx.textAlign = "start";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "white";
    ctx.font = `40px arial`
    
    ctx.fillText(`Current Page: ${currentpage + 1} / ${player.pages}`, 370, 580);
    ctx.fillStyle = `blue`;
    ctx.fillRect(100, 550, 50, 50);
    ctx.fillRect(850, 550, 50, 50);
}


const storeBtns = [                                 // ALL PAGES WILL HAVE THE SAME UI CUZ IM LAZY
    new InventoryBtn(0, grid * 3, grid * 2, grid * 4, grid * 1),
    new InventoryBtn(1, grid * 8, grid * 2, grid * 4, grid * 1),
    new InventoryBtn(2, grid * 13, grid * 2, grid * 4, grid * 1),
    new InventoryBtn(3, grid * 3, grid * 4, grid * 9.5, grid * 2),
    new InventoryBtn(4, grid * 3, grid * 6.5, grid * 9.5, grid * 2),
    new InventoryBtn(5, grid * 3, grid * 9, grid * 9.5, grid * 2),
    new InventoryBtn(6, grid * 13.5, grid * 9.5, grid * 1.5, grid * 1),         // Purchase-BTN
    new InventoryBtn(7, grid * 15.5, grid * 9.5, grid * 1.5, grid * 1),         // Discard-BTN
]

let storepage = 1;
let storeCard = false;
let cardContent = {
    name: "",
    value: 0,
    description: "",
    purchaseBtn: storeBtns[7],
    discardBtn: storeBtns[8]
}
let pBtnColor = 'rgba(50, 200, 50, 0.8)';
let dBtnColor = 'rgba(200, 50, 50, 0.8)';

function wrapText(text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';

    for(let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;

        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        }
        else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}


function storeUi(x, y){


    ctx.lineWidth = 10;


    ctx.fillStyle = `rgba(150, 150, 255, 0.6)`;
    ctx.fillRect(x, y, grid * 16, grid * 10);


    ctx.strokeStyle = `rgba(100, 100, 200, 0.8)`;
    ctx.strokeRect(x, y, grid * 16, grid * 10);


    ctx.font = "30px Arial";
    const gemText = player.gems;
    const textWidth = ctx.measureText(gemText).width;
    ctx.fillStyle = 'blue';
    ctx.imageSmoothingEnabled = false;
    ctx.fillText(gemText, x + grid * 15.9 - textWidth - grid + 10, y + grid * 9.5);
    ctx.drawImage(gem1, x + grid * 15 + 10, y + grid * 9.5 - 25, 35, 35);


    storeBtns.forEach(btn => {
        ctx.fillStyle = 'rgba(150, 150, 200, 0.6)';
        ctx.fillRect(btn.x, btn.y, btn.width, btn.height);

        if(btn.id === 0){
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = "middle";
            ctx.font = '30px serif';
            ctx.fillText("Farming", btn.x + btn.width / 2, btn.y + btn.height / 2);

            
        }
        else if(btn.id === 1){
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = "middle";
            ctx.font = '30px serif';
            ctx.fillText("Cosmetic", btn.x + btn.width / 2, btn.y + btn.height / 2);

            
        }
        else if(btn.id === 2){
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.textBaseline = "middle";
            ctx.font = '30px serif';
            ctx.fillText("World Items", btn.x + btn.width / 2, btn.y + btn.height / 2);

            
        }
        if(storepage === 1){
            if(btn.id === 3){
                const text = 'Basic Seed Pack: 50';
                ctx.font = '30px serif';
                const textWidth = ctx.measureText(text).width;

                ctx.fillStyle = 'white';
                ctx.textAlign = 'center';
                ctx.textBaseline = "middle";


                const centerX = btn.x + btn.width / 2;
                const centerY = btn.y + btn.height / 2;


                ctx.fillText(text, centerX, centerY);


                const textStartX = centerX - textWidth / 2;


                ctx.drawImage(gem1, textStartX + textWidth + 10, centerY - 17.5, 35, 35);


            }
            else if(btn.id === 4){
                const text = 'Rare Seed Pack: 500';
                ctx.font = '30px serif';
                const textWidth = ctx.measureText(text).width;

                ctx.fillStyle = 'white';
                ctx.textAlign = 'center';
                ctx.textBaseline = "middle";


                const centerX = btn.x + btn.width / 2;
                const centerY = btn.y + btn.height / 2;


                ctx.fillText(text, centerX, centerY);


                const textStartX = centerX - textWidth / 2;


                ctx.drawImage(gem1, textStartX + textWidth + 10, centerY - 17.5, 35, 35);


            }
            else if(btn.id === 5){
                const text = 'Farmer Seed Pack: 500';
                ctx.font = '30px serif';
                const textWidth = ctx.measureText(text).width;

                ctx.fillStyle = 'white';
                ctx.textAlign = 'center';
                ctx.textBaseline = "middle";


                const centerX = btn.x + btn.width / 2;
                const centerY = btn.y + btn.height / 2;


                ctx.fillText(text, centerX, centerY);


                const textStartX = centerX - textWidth / 2;


                ctx.drawImage(gem1, textStartX + textWidth + 10, centerY - 17.5, 35, 35);


            }

                
        }

        const card = new InventoryBtn(8, grid * 13, grid * 3.5, grid * 4.5, grid * 7.4);
        const purchaseBtn = storeBtns[6];
        const discardBtn = storeBtns[7];
    
        // === Card Background (Pattern) ===
        ctx.fillStyle = `#1e1e2f`;
        ctx.fillRect(card.x, card.y, card.width, card.height);
    
    
        // Dot Pattern
        ctx.fillStyle = '#2d2d4a';
        let spacing = grid / 2;
        for (let y = card.y + spacing / 2; y < card.y + card.height; y += spacing) {
            for (let x = card.x + spacing / 2; x < card.x + card.width; x += spacing) {
                ctx.beginPath();
                ctx.arc(x, y, 1.2, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // === Card Border ===
        ctx.strokeStyle = 'RGB(100, 100, 200)';
        ctx.lineWidth = 4;
        ctx.strokeRect(card.x, card.y, card.width, card.height);
        ctx.lineWidth = 2;
        // === Card Text ===
        ctx.fillStyle = 'white';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.font = '16px Arial';
        ctx.fillText(`Item: ${cardContent.name}`, card.x + 15, card.y + 15);
        ctx.fillText(`Price: ${cardContent.value}`, card.x + 15, card.y + 50);
    
        wrapText(`Description: ${cardContent.description}`, card.x + 15, card.y + 90, card.width - 30, 22);
    
        // === Purchase Button ===
        ctx.fillStyle = pBtnColor;
        ctx.fillRect(purchaseBtn.x, purchaseBtn.y, purchaseBtn.width, purchaseBtn.height);
        ctx.strokeStyle = '#383857';
        ctx.strokeRect(purchaseBtn.x, purchaseBtn.y, purchaseBtn.width, purchaseBtn.height);
    
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = '14px Serif';
        ctx.fillText("Purchase", purchaseBtn.x + purchaseBtn.width / 2, purchaseBtn.y + purchaseBtn.height / 2);
    
        // === Discard Button ===
        ctx.fillStyle = dBtnColor;
        ctx.fillRect(discardBtn.x, discardBtn.y, discardBtn.width, discardBtn.height);
        ctx.strokeStyle = '#383857';
        ctx.strokeRect(discardBtn.x, discardBtn.y, discardBtn.width, discardBtn.height);
    
        ctx.fillStyle = 'white';
        ctx.fillText("discard", discardBtn.x + discardBtn.width / 2, discardBtn.y + discardBtn.height / 2);
    
    })
}


let wHeld = false;
let jumpInterval = null;
let gravityInterval = null;

let wPressed = false;

document.addEventListener('keydown', e => {
  if ((e.code === 'KeyW' || e.code === 'Space') && !wPressed) {
    wPressed = true;
    startJump();
  }
});
document.addEventListener('keyup', e => {
  if (e.code === 'KeyW' || e.code === 'Space') {
    wPressed = false;
  }
});


const keys = { a: false, d: false };

window.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    if (keys.hasOwnProperty(key)) keys[key] = false;
});

window.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (keys.hasOwnProperty(key)) keys[key] = true;
    if(!player.hasMoved){
        player.hasMoved = true;
    }
});


window.addEventListener('keyup', (e) => {
    if(e.key.toLowerCase() === 'r'){
        if(!player.isGhost){
            death();
        }
        
    } 
});

window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'x') {
        const quickItem = player.backpack.quickUse[itemIndex];
        if (itemIndex === 0) {
            activeBubble = { x: 500, y: 350, text: "I wouldn't drop my fist if i were you...", timer: 90 };
            return;
        }
        if(!player.canMove || player.frozen) return;
        if(!quickItem){
            activeBubble = { x: 500, y: 350, text: "You can't drop something that doesn't exist, like your father...", timer: 90 };
            return;
        }

        const roundedX = Math.floor(player.x / 50) * 50;
        const roundedX2 = Math.round(player.x / 50) * 50;
        const roundedY = Math.floor(player.y / 50) * 50;

        const block = gameblocks.find(b => b.x === roundedX2 + grid && b.y === roundedY);
        const block2 = gameblocks.find(b => b.x === roundedX - grid && b.y === roundedY);
        const nameToFind = quickItem.name; 


        const indexInItemsClass = itemsClass.findIndex(i => i.name === nameToFind);

        console.log("Item Index:", itemIndex);
        console.log("Quick Item:", quickItem);


        console.log(indexInItemsClass)
        if (indexInItemsClass === -1) {
            console.warn(`'${nameToFind}' not found in itemsClass`);
            return;
        }

        const item = itemsClass[indexInItemsClass].design;


        const item0 = player.backpack.quickUse[itemIndex];
        const item1 = player.backpack.inventory.findIndex(invItem => invItem.name === item0);
        const item2 = player.backpack.inventory[item1];

        if(item2.amount <= 1){
            if(player.facing === 1 && !block){
                dropItem(player.x + grid, player.y, indexInItemsClass);
                player.backpack.inventory.splice(item1, 1);
                player.backpack.quickUse.splice(itemIndex, 1);
                player.backpack.quickUse.push(undefined);
                itemIndex = 0;
            }
            else if(player.facing === 0 && !block2){
                dropItem(player.x - grid, player.y, indexInItemsClass);
                player.backpack.inventory.splice(item1, 1);
                player.backpack.quickUse.splice(itemIndex, 1);
                player.backpack.quickUse.push(undefined);
                itemIndex = 0;
            }
            else{
                activeBubble = { x: 500, y: 350, text: "The item bounced back into your hand", timer: 90 };
            }
           
        }
        else{
            
            if(player.facing === 1 && !block){
                dropItem(player.x + grid, player.y, indexInItemsClass);
                item2.amount--;
            }
            else if(player.facing === 0 && !block2){
                dropItem(player.x - grid, player.y, indexInItemsClass);
                item2.amount--;
            }
            else{
                activeBubble = { x: 500, y: 350, text: "The item bounced back into your hand", timer: 90 };
            }
        }

        
        
        


        
        
    }
});






function startJump() {
  if (player.jumps <= 0) return;


  if (wingsanimating) wingsanimating = false;


  if (jumpInterval) {
    clearInterval(jumpInterval);
    jumpInterval = null;
  }


  if (gravityInterval) {
    clearInterval(gravityInterval);
    gravityInterval = null;
  }

  player.jumps--;
  player.canMove = false;

  let a = 0;
  const maxSteps = 21;

  jumpInterval = setInterval(() => {
    const futureY = player.y - grid / 5;
    const isBlockedAbove = gameblocks.some(block =>
      block.isBlock &&
      player.x < block.x + grid &&
      player.x + player.width > block.x &&
      futureY < block.y + grid &&
      player.y > block.y
    );

    const canContinueJump = a < maxSteps && wPressed && (player.canNoClip || !isBlockedAbove);
    if (canContinueJump) {
      player.y = futureY;
      a++;
      if(!player.hasMoved){
        player.hasMoved = true;
      }
    } else {
      clearInterval(jumpInterval);
      jumpInterval = null;

      if (player.canDoubleJump && player.jumps === 1) {
        wingsanimating = true;
      }

      moveDown().then(() => {
        wingsanimating = false;
        player.canMove = true;
        player.jumps = player.canDoubleJump ? 2 : 1;
      });
    }
  }, 35);
}








function moveDown() {
  return new Promise((resolve) => {

    if (gravityInterval) {
      clearInterval(gravityInterval);
      gravityInterval = null;
    }

    gravityInterval = setInterval(() => {
      const landed = gameblocks.some(block => 
        block.y === Math.floor(player.y + grid) &&
        block.x < player.x + player.width &&
        block.x + grid > player.x &&
        block.isBlock
      );

      if (!landed) {
        player.y += grid / 5;
      } else {

        player.y = Math.floor(player.y / grid) * grid;

        clearInterval(gravityInterval);
        gravityInterval = null;
        resolve();
      }
    }, 35);
  });
}


function modDown(){
    player.y += grid / 10;
}

window.addEventListener('keydown', (e) => {
    if(e.key === `ArrowDown`) {
        if(player.canNoClip){
            modDown();
        }
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        e.preventDefault();
        if(itemIndex < 3){
            itemIndex++;
        }

    }
    else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if(itemIndex > 0){
            itemIndex--;
        }


    }
});

function isColliding(ax, ay, aw, ah, bx, by, bw, bh) {
    return ax < bx + bw && ax + aw > bx &&
           ay < by + bh && ay + ah > by;
}

function isBlockedAt(x, y) {
    return gameblocks.some(block =>
        block.isBlock &&
        isColliding(
            x, y, player.width, player.height,
            block.x, block.y, grid, grid
        )
    );
}

function isFloatingItem(x, y) {
    return floatingItems.some(item =>
        item &&
        isColliding(
            x, y, player.width, player.height,
            item.rx, item.ry, 20, 20
        )
    );
}

let died = false;

function update() {
    const nextX = player.x + (keys.d ? player.speed : keys.a ? -player.speed : 0);
    const movingLeft = keys.a;
    const movingRight = keys.d;

    if (!player.frozen) {
        

        
            if ((movingLeft || movingRight)) {
        
            player.isMoving = true;
        
            if(!isBlockedAt(nextX, player.y)){
        
                player.x = nextX;
        
                player.facing = movingLeft ? 0 : 1;
        
            }
        
            else if(player.canNoClip){
        
                player.x = nextX;
        
                player.facing = movingLeft ? 0 : 1;
        
            }
        
            
        
            
        

        
            if (!isBlockedAt(player.x, player.y + grid) && player.canMove) {
        
                player.canMove = false;
        
                player.jumps--;
        
                moveDown().then(() => {
        
                    player.canMove = true;
        
                    if (player.jumps < 2) {
        
                        player.jumps = player.canDoubleJump ? 2 : 1;
        
                    }
        
                });
        
            }
        
        }
        
        else{
        
            player.isMoving = false;
        
        }
    
        
        

        
        if (!isBlockedAt(player.x, player.y + grid) && player.canMove) {
        
            player.canMove = false;
        
            player.jumps--;
        
            moveDown().then(() => {
        
                player.canMove = true;
        
                if (player.jumps < 2) {
        
            player.jumps = player.canDoubleJump ? 2 : 1;
        
        }
        
        });
        
        }
    
        
        

        
        player.x = Math.max(0, Math.min(WORLD_WIDTH  - player.width,  player.x));
        
        player.y = Math.max(0, Math.min(WORLD_HEIGHT - player.height, player.y));
    

    }



    if(player.experience >= player.level * 10){
        player.level++;
        player.experience = 0;

        activeBubble = { x: 500, y: 350, text: `Leveled up, current level: ${player.level}`, timer: 90 };



    }

    if(isFloatingItem(player.x, player.y)){

        removeDroppedItem(player.x, player.y);



    }

    class SpecialObjectCollision {
        

        static knockBack(blocks){
            for (const block of blocks) {
                
                if (
                    player.x === block.x + grid &&
                    player.y <= block.y &&
                    player.y >= block.y - (grid - 1)
                ) {
                    knockBack("R");
                    continue;
                }
            
            
                if (
                    player.x === block.x - grid + 10 &&
                    player.y <= block.y &&
                    player.y >= block.y - (grid - 1)
                ) {
                    knockBack("L");
                    continue;
                }
            
            
            
                const touchingBottom = 
                    player.x + player.width > block.x &&
                    player.x < block.x + grid &&
                    player.y + player.height <= block.y &&
                    player.y + player.height + 5 > block.y;
            
                if (touchingBottom) {
                    knockBack("U");
                    console.log("U");
                    continue;
                }
            
                const touchingTop = 
                    player.x + player.width > block.x &&
                    player.x < block.x + grid &&
                    player.y <= block.y + grid &&
                    player.y > block.y;
            
                if (touchingTop) {
                    knockBack("D");
                    console.log("D");
                    continue;
                }
            }
        }

        static kill(blocks){
            
            for (const block of blocks) {
                if(died) continue;
                
                if (
                    player.x === block.x + grid &&
                    player.y <= block.y &&
                    player.y >= block.y - (grid - 1)
                ) {
                    death();
                    died = true;
                    continue;
                }
            
            
                if (
                    player.x === block.x - grid + 10 &&
                    player.y <= block.y &&
                    player.y >= block.y - (grid - 1)
                ) {
                    death();
                    died = true;
                    continue;
                }
            
            
            
                const touchingBottom = 
                    player.x + player.width > block.x &&
                    player.x < block.x + grid &&
                    player.y + player.height <= block.y &&
                    player.y + player.height + 5 > block.y;
            
                if (touchingBottom) {
                    death();
                    died = true;
                    continue;
                }
            
                const touchingTop = 
                    player.x + player.width > block.x &&
                    player.x < block.x + grid &&
                    player.y <= block.y + grid &&
                    player.y > block.y;
            
                if (touchingTop) {
                    death();
                    died = true;
                    continue;
                }
            }
        }
    }

    const lavaBlocks = gameblocks.filter(b => b.custom === "lava");
    const sandBlocks = gameblocks.filter(b => b.custom === "sand");
    
    if(player.hasMoved){
        SpecialObjectCollision.knockBack(lavaBlocks);
        SpecialObjectCollision.kill(sandBlocks);
    }
    
    



    

}



function drawGhost(x, y) {
  ctx.save();
  ctx.globalAlpha = 0.5;
  blocks[itemIndex].isBlock
    ? grassDesign(x, y)
    : ctx.fillRect(x, y, grid, grid);
  ctx.restore();
}


function knockBack(dir) {
    let i = 1;

    let j = setInterval(() => {


        if(dir == "L"){
            if (i === 20  || isBlockedAt(player.x - 5, player.y)) {
                clearInterval(j);
            }
            else{
                player.x -= 5;
                i++;
            }
        }
        else if(dir == "R"){
            if (i === 20  || isBlockedAt(player.x + 5, player.y)) {
                clearInterval(j);
            }
            else{
                player.x += 5;
                i++;
            }
        }
        else if(dir == "U"){
            const isBlockedAbove = gameblocks.some(block =>
                block.isBlock &&
                player.x < block.x + grid &&
                player.x + player.width > block.x &&
                player.y - 5 < block.y + grid &&
                player.y > block.y
            );
            if (i === 21  || isBlockedAbove) {
                clearInterval(j);
            }
            else{
                player.y -= 5;
                i++;
            }
        }
        else if (dir == "D") {
            const isBlockedBelow = gameblocks.some(block =>
                block.isBlock &&
                player.x < block.x + grid &&
                player.x + player.width > block.x &&
                player.y + player.height + 5 > block.y &&
                player.y + player.height < block.y + grid
            );
        
            if (i === 20 || isBlockedBelow) {
                clearInterval(j);
                player.y = Math.round(player.y / grid) * grid;
            } else {
                player.y += 5;
                i++;
                wPressed = false;
            }
        }



    }, 10);
}




function death() {

    player.frozen = true;
    player.speed = 0;
    player.jumps = 0;
    player.canPunch = false;
    player.isGhost = true;
    

    let i = setInterval(() => {
        player.y--;
    }, 10)


    setTimeout(() => {
        player.x = randomX;
        player.y = 2950;
        player.speed = 5;
        player.jumps = player.canDoubleJump ? 2 : 1;
        player.canPunch = true;
        player.frozen = false;
        player.isGhost = false;
        died = false;
        player.hasMoved = false;
        clearInterval(i);
    }, 1200);
}




canvas.addEventListener('wheel', (e) => {
    e.preventDefault();

    const modZoomFactor = 0.2;
    const zoomFactor = 0.1;
    if (e.deltaY < 0) {
        // Zoom in

        if(!player.canNoClip){
            if(zoom < 3){
                zoom += zoomFactor;
            }
        }
        else{
            if(zoom < 10){
                zoom += zoomFactor;
            }
        }


    }
    else {
        if(zoom > 1){
        // Zoom out
        if(player.canNoClip){
            zoom = Math.max(0.02, zoom - modZoomFactor);
        }
        else{
            zoom = Math.max(0.2, zoom - zoomFactor);
        }
        
        }

    }

});


const pointers = new Map();
let lastDistance = null;

canvas.addEventListener("pointerdown", e => {
    pointers.set(e.pointerId, {x: e.clientX, y: e.clientY});
});

canvas.addEventListener("pointermove", e => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, {x: e.clientX, y: e.clientY});

    if (pointers.size === 2) {
        const [p1, p2] = Array.from(pointers.values());
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.hypot(dx, dy);

        if (lastDistance != null) {
            const delta = distance - lastDistance;
            const zoomSpeed = 0.005; // tweak as needed
            zoom += delta * zoomSpeed;

            // clamp zoom
            if (!player.canNoClip) zoom = Math.min(Math.max(zoom, 1), 3);
            else zoom = Math.min(Math.max(zoom, 0.02), 10);
        }

        lastDistance = distance;
    }
});

canvas.addEventListener("pointerup", e => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) lastDistance = null;
});

canvas.addEventListener("pointercancel", e => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) lastDistance = null;
});



let camX = 0
let camY = 0


function isInView(x, y, w, h, camX, camY, viewW, viewH) {
  return (
    x + w >= camX &&
    x <= camX + viewW &&
    y + h >= camY &&
    y <= camY + viewH
  );
}

function hasCooldownElapsed(obj, key, duration) {
  return obj[key] && Date.now() - obj[key] > duration;
}



function animate() {
    update();
    

    zoom = Math.max(1, Math.min(zoom, 3));
    
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.save();
    

    ctx.scale(zoom, zoom);
    

    const halfW   = canvas.width  / (2 * zoom);
    const halfH   = canvas.height / (2 * zoom);
    

    const maxCamX = WORLD_WIDTH  - canvas.width  / zoom;
    const maxCamY = WORLD_HEIGHT - canvas.height / zoom;

    camX = player.x - halfW + 20;
    camY = player.y - halfH;


    camX = Math.max(0, Math.min(camX, maxCamX));
    camY = Math.max(0, Math.min(camY, maxCamY));


    ctx.translate(-camX, -camY);


    ctx.fillStyle = "darkBlue";
    ctx.fillRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);



    const viewW = canvas.width  / zoom;
    const viewH = canvas.height / zoom;

    //ctx.imageSmoothingEnabled = false;
    ctx.drawImage(BG, camX, camY, viewW, viewH);

    gameBackgrounds.forEach(bg => {
    
        const def = blocks[bg.blockIndex] || { width: 64, height: 64, color: "#000", hp: 1 };


        if (!isInView(bg.x, bg.y, def.width, def.height, camX, camY, viewW, viewH))
            return;

            const now = Date.now();


            if (typeof bg.lasthit === 'number' && now - bg.lasthit > 5000) {
                if (bg.durability < bg.hp) {
                bg.durability = bg.hp;
                console.log('   ✔️ Background healed');
                }
                bg.lasthit = undefined;
            }


            const designFn = blockIndexToDesign[bg.blockIndex];
            if (designFn) {
            designFn(bg.x, bg.y);
        } 
        else {
            ctx.fillStyle = def.color;
            ctx.fillRect(bg.x, bg.y, def.width, def.height);
        }
    });












    gameblocks.forEach(block => {
        const def = blocks[block.blockIndex];


        if (!isInView(block.x, block.y, def.width, def.height, camX, camY, viewW, viewH))
        return;

        const now = Date.now();


        if (typeof block.lasthit === 'number' && now - block.lasthit > 5000) {

            if (block.durability < block.hp) {
                block.durability = block.hp;
                console.log('   ✔️ healed');
            }

            block.lasthit = undefined;
        }


        const designFn = blockIndexToDesign[block.blockIndex];
        if (designFn) {
            designFn(block.x, block.y);
        }
        else {
            ctx.fillStyle = def.color;
            ctx.fillRect(block.x, block.y, def.width, def.height);
        }
    });



    floatingItems.forEach(item => {

        //const def = item[item.itemIndex];
        //if(!isInView(item.x, item.y, def.width, def.height, camX, camY, viewW, viewH))
        //    return;
        const designFn = floatingItemsDesign[item.itemIndex];
        designFn(item.rx, item.ry);
    })







    drawPlayer();
    
    
    gameProps.forEach(prop => {
    
        const def = blocks[prop.blockIndex] || { width: 64, height: 64, color: "#000", hp: 1 };


        if (!isInView(prop.x, prop.y, def.width, def.height, camX, camY, viewW, viewH))
            return;

        const now = Date.now();


        if (typeof prop.lasthit === 'number' && now - prop.lasthit > 5000) {
            if (prop.durability < prop.hp) {
            prop.durability = prop.hp;
            console.log('   ✔️ prop healed');
            }
            prop.lasthit = undefined;
        }


        const designFn = blockIndexToDesign[prop.blockIndex];
        if (designFn) {
            if(prop.custom.endsWith("tree")){
                if(prop.ready == 2){
                    if(prop.custom == 'still adding later'){
                        designFn(prop.x, prop.y, 128);
                    }
                    else{
                        designFn(prop.x, prop.y, 64);
                    }
                    
                }
                else if(prop.ready == 1){
                    if(prop.custom == 'still adding later'){
                        designFn(prop.x, prop.y, 64);
                    }
                    else{
                        designFn(prop.x, prop.y, 32);
                    }
                    
                }
                else{
                    designFn(prop.x, prop.y, 0);
                }
                
            }
            designFn(prop.x, prop.y);
        } 
        else {
            ctx.fillStyle = def.color;
            ctx.fillRect(prop.x, prop.y, def.width, def.height);
        }
    });


    ctx.resetTransform();
    inventoryBtn(10, grid * 5);
    shopBtn(10, grid * 7);
    if(player.atBackpack){
        inventoryUi(grid * 2, grid * 2)
    }
    else if(player.atStore){
        storeUi(grid * 2, grid * 2)
    }
  
    if (activeBubble) {
        bubbleText(activeBubble.x, activeBubble.y, activeBubble.text);
        activeBubble.timer--;


        if (activeBubble.timer <= 0) activeBubble = null;
    }

    drawTouchScreen();

    ctx.restore();
    requestAnimationFrame(animate);
}

animate();

