class Player {
    constructor(){

    }
    getplayercount (){
        var playerref=database.ref('playerCount')
        playerref.on("value", function(data){
            playerCount=data.val()
        })
    }
    updateplayercount(count){
        var playerref=database.ref('/')
        playerref.update({
            playerCount:count
        })
    }
    updateplayername (name){
    var playin="player"+playerCount
    var ref=database.ref (playin)
    ref.set ({
    name:name
                                            })

    }
}