let players = [];
let judgeIndex = 0;
let room;
let deck = [];
let phases = [];



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

    socket.on('join-game', (playerId, gameRoom) => {
        socket.join(gameRoom);
        if (gameRoom === room) {

            players.push({
                name: playerId,
                id: socket.id,
            })

        }
        socket.nsp.to(room).emit('receive-players', players);
        socket.emit('receiveDeck', deck);
    })

    socket.on('updateWhiteDeck', whiteDeck => {
        socket.to(room).emit('receiveUpdatedWhiteDeck', whiteDeck);
    })

    socket.on('navigate', (navigation => {
        socket.to(room).emit('receive-navigation', navigation);
    }))

    socket.on('createHand', () => {
        if (deck[0]) {
            let hand = deck[0].white.splice(0, 7);
            socket.emit('receiveHand', hand);
            socket.nsp.to(room).emit('sendWhiteDeck', deck[0].white);
            console.log(deck[0].white.length);
        }
    })

    socket.on('updateBlackCards', (blackCard, blackDeck) => {
        socket.to(room).emit('receiveUpdatedBlackCards', blackCard, blackDeck)
    })

    socket.on('updateWhiteCards', (whiteCards) => {
        socket.to(room).emit('receiveUpdatedWhiteCards', whiteCards)
    })

    socket.on('setJudge', () => {
        socket.nsp.to(room).emit('sendJudge', players[judgeIndex]);
    })

    socket.on('setDeck', cards => {
        deck = cards;
        console.log(cards[0].white[0]);
        console.log(cards[0].black[0]);
    })

    socket.on('setPhase', phase => {
        socket.nsp.to(room).emit('receivePhase', phase);
    })

    socket.on('updatePhases', (draw, select) => {
        socket.to(room).emit('receivePhases', draw, select);
    })

    socket.on('checkPhase', phase => {
        phases.push(true);
        if (phases.length >= players.length) {
            socket.nsp.to(room).emit('receivePhase', phase);
            phases = [];
        }
    })

    socket.on('checkSelectPhase', phase => {
        phases.push(true);
        if (phases.length >= players.length - 1) {
            socket.nsp.to(room).emit('receivePhase', phase);
            phases = [];
        }
    })

    socket.on('updateScores', scores => {
        socket.to(room).emit('receiveScores', scores);
    })
    socket.on('updateJudge', () => {
        judgeIndex += 1;
        if (judgeIndex >= players.length) {
            judgeIndex = 0;
        }
        socket.nsp.to(room).emit('sendJudge', players[judgeIndex]);
    })

    socket.on('setWinner', winner => {
        socket.to(room).emit('sendWinner', winner);
    })
    socket.on('disconnect', () => {

        let tempIndex = players.findIndex(player => {
            return player.id === socket.id;
        })
        console.log(tempIndex);
        players.splice(tempIndex, 1);
        console.log('socket disconnected : ' + socket.id);
        socket.nsp.to(room).emit('receive-players', players);
    })




});