let players = [];
let room;

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
    })


    socket.on('navigate', (navigation => {
        socket.to(room).emit('receive-navigation',navigation);
    }))



    socket.on('updateBlackCards',(blackCard,blackDeck) => {
        socket.to(room).emit('receiveUpdatedBlackCards', blackCard,blackDeck)
    })


    socket.on('disconnect', function () {
        console.log(socket.nsp)
        if (socket.room ===room)
        {
            console.log('true');
        }
        let tempIndex = players.findIndex(player => {
            return player.id === socket.id;
        })
        console.log(tempIndex);
        players.splice(tempIndex, 1);
        console.log('socket disconnected : ' + socket.id);
        socket.nsp.to(room).emit('receive-players',players);
    })

   

    
});