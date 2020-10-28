controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Sebastian_Hansen_Longato.vy == 0) {
        Sebastian_Hansen_Longato.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.fire, 100)
    } else {
        game.over(false, effects.dissolve)
    }
})
let Sebastian_Hansen_Longato: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`c80010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000007000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040404000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000404040404040404040400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000404000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000404040000000000000000040404000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004040404040400000000000000040000000404000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000304040404040404040000000000000000000000000404040404040404000000000000000404040404000000000000000000000404040404000000000000000000000000000000000000000000000000000000000000000000000000040000000000040400000000040400000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003030000000000000000000000000000000000000000000000000000000404000000000004040000000400040404000000000404000000000004040400000000000000000000000000000000000000000000000000000000000000000004000000000000040404040400000000000000000004040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030303000000000000000000000000000000000000000000000000000000000404040404040400000000000000000404040404040000000000000000000404040404040000000000000000000000000000000404040404040000000404040400000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040400000000000000000000040404000000000004000000040000000000000000000000000000000000000000000000000000040404040400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000303030303000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000404040000000000040400000000000000000000000000000000000000000000000000000000000000000000000000000000000000040400000000000000000000000404040000000004000000000000000000010101010000000000000000000000000000000000000000000003000000000000000000030003030003030303030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040404040400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000404040400000000000004040004040404040005000000000200000100000001010101020200000303000303030303030303030303030303030303030000000300000000030300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000404040404040000000000000000000400000101010101000000000000000000020203000303030000000000000000000000000000000003030303030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101000000000000000000000000000000000000000000000000000000000000000000000000000000030300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    ........................................................................................................................................................................................................
    ........................................................................................................................................................................................................
    ......................................................................................................................................................................222...............................
    .....................................................................2222222222.......................................................................................2.22..............................
    ...................................................................222........222.......................................................................2222222....2.2...22.............................
    ...........................................................22222222222.........222222222......222222........22222222...................................2.....22...222......2............................
    ..........................................................22...........................22.....222222.2222...22.....222.................................2......222222.......222..........................
    .........................................................222............................2222222........2222222......222222222..............2222222..2222...........22.........2.........................
    ........................................................222..................................22........22...................22..........222222..22..2..........................22222...........22.......
    ..............................................2.......22222...................................................................222.....222.......................................222222..........22222..2
    .........2222......................2........22222.22222..........................................................................22222...............................................22222.....222222222
    .....2..2...222222..22.222222222222222222..222...22......................................................................................................................................222222....22222
    ...2.2...........2.2.22.22....22........22222.............................................................................................................................................22222.........
    222.......................................22............................................................................................................................................................
    ........................................................................................................................................................................................................
    .....2..................................................................................................................................................................................................
    `, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.rock0,sprites.builtin.brick,sprites.dungeon.darkGroundNorthWest0,myTiles.tile1,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed], TileScale.Sixteen))
Sebastian_Hansen_Longato = sprites.create(img`
    ........................
    ....ffffff..............
    ..ffeeeef2f.............
    .ffeeeef222f............
    .feeeffeeeef...cc.......
    .ffffee2222ef.cdc.......
    .fe222ffffe2fcddc.......
    fffffffeeeffcddc........
    ffe44ebf44ecddc.........
    fee4d41fddecdc..........
    .feee4dddedccc..........
    ..ffee44e4dde...........
    ...f222244ee............
    ...f2222e2f.............
    ...f444455f.............
    ....ffffff..............
    .....fff................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(Sebastian_Hansen_Longato, 100, 0)
Sebastian_Hansen_Longato.ay = 300
tiles.placeOnRandomTile(Sebastian_Hansen_Longato, myTiles.tile1)
scene.cameraFollowSprite(Sebastian_Hansen_Longato)
let bat = sprites.create(img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f c 3 b c 3 b c f b b c c c . 
    f c b b b b b b c f b c b c c . 
    c c 1 b b b 1 b c b b c b b c . 
    c b b b b b b b b b c c c b c . 
    c b 1 f f 1 c b b c c c c c . . 
    c f 1 f f 1 f b b b b f c . . . 
    f f f f f f f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 2 b b b c f . . . . 
    . . f 2 2 2 b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(bat, sprites.dungeon.collectibleInsignia)
bat.x += 14
game.onUpdate(function () {
    if (Sebastian_Hansen_Longato.y > 250) {
        game.over(false, effects.dissolve)
    }
    if (bat.tileKindAt(TileDirection.Left, sprites.dungeon.collectibleInsignia)) {
        bat.vx = 50
    } else if (bat.tileKindAt(TileDirection.Right, sprites.dungeon.chestClosed)) {
        bat.vx = -50
    }
})
