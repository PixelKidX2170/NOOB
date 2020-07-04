class Form {
    constructor(){

    }
    display(){
        var title=createElement('h1')
        title.html("SAD CARS GO VOOOOOOOOOOM")
        title.position (140,0)

        var ib=createInput("PUT YO NAME IN SO WE CAN GET ALL YOU INFORMATION MWAHAHAHAHA")
        ib.position(150,160)

        var pb=createButton("VOOOOOOOOOOOOOOOOOOOOOOOOOOOM")
        pb.position(260,190)

        var GO=createElement ('h4')
        pb.mousePressed(function(){
            ib.hide()
            pb.hide()
            var name=ib.value()
            playerCount=playerCount+1
            player.updateplayername(name)
            player.updateplayercount(playerCount)

            GO.html("HELLO NOOB GET READY")
            GO.position(130,160)
        })
    }
}