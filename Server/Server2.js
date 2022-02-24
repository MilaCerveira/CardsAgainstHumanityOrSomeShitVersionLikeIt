let players = [];
judge = players[0];
let room;
let deck = [];

const io = require('socket.io')(3002, {
    cors: {
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST'],
    },
});

io.on('connection', socket => {
    
    console.log(`id: ${socket.id}`);

    socket.on('set-room', (gameRoom => {
            room = gameRoom;
        
    }))

    socket.on('join-game', (playerId,gameRoom) => {
        socket.join(gameRoom);
        if(gameRoom===room) {
        players.push({
            name: playerId,
            id: socket.id,
        })
       
    }
    socket.nsp.to(room).emit('receive-players',players);
    socket.nsp.to(room).emit('receiveDeck',deck);
    })

    socket.on('updateWhiteDeck', whiteDeck => {
        socket.to(room).emit('receiveUpdatedWhiteDeck', whiteDeck);
    })

    socket.on('navigate', (navigation => {
        socket.to(room).emit('receive-navigation',navigation);
    }))

    socket.on('createHand', () => {
        let hand = deck[0].white.splice(0, 7);
        socket.emit('receiveHand', hand);
        socket.nsp.to(room).emit('sendWhiteDeck',deck[0].white);
        console.log(deck[0].white.length);
    })

    socket.on('updateBlackCards',(blackCard,blackDeck) => {
        socket.to(room).emit('receiveUpdatedBlackCards', blackCard,blackDeck)
    })

    socket.on('updateWhiteCards',(whiteCards) => {
        socket.to(room).emit('receiveUpdatedWhiteCards', whiteCards)
    })

    // socket.on('updateDeck',(cards) => {

    //    socket.to(room).emit('receiveDeck', cards)
    // })


    socket.on('setDeck', cards => {
        deck = cards;
    })


    socket.on('disconnect', function () {
  
        let tempIndex = players.findIndex(player => {
            return player.id === socket.id;
        })
        console.log(tempIndex);
        players.splice(tempIndex, 1);
        console.log('socket disconnected : ' + socket.id);
        socket.nsp.to(room).emit('receive-players',players);
    })

   

    
});