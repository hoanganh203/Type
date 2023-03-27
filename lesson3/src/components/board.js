import { useState, useEffect } from "react"

import Square from './square'

const Board = ({ children }) => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)

    const handlePlay = (position) => {
        if (winner || game[position]) return;

        console.log(position);
        const newGame = game.map((i, index) => {
            if (index === position) {
                return player ? "X" : "O"
            }
            return i
        })
        setGame(newGame)
        setPlayer(!player)
    }

    const winList = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]



    const checkWinner = () => {
        for (let i = 0; i < winList.length; i++) {
            const [a, b, c] = winList[i];
            if (game[a] && game[a] === game[b] && game[a] === game[c]) {
                return game[a];
            }
        }
        return null
    }
    const winner = checkWinner(game);
    let status;

    if (winner) {
    }
    else {
        status = 'Người chơi tiếp theo: ' + (!player ? 'O' : 'X');
    }

    const [isGameOver, setIsGameOver] = useState(false);

    function checkGameOver() {
        if (winner || !game.includes(null)) {
            setIsGameOver(true);
        }
    }

    useEffect(() => {
        checkGameOver();
    }, [game]);

    function resetGame() {
        setGame([null, null, null, null, null, null, null, null, null]);
        setPlayer(true);
    }



    return <>
        <div className="grid grid-cols-3 gap-3">
            <Square value={game[0]} position={0} handlePlay={handlePlay} />
            <Square value={game[1]} position={1} handlePlay={handlePlay} />
            <Square value={game[2]} position={2} handlePlay={handlePlay} />
            <Square value={game[3]} position={3} handlePlay={handlePlay} />
            <Square value={game[4]} position={4} handlePlay={handlePlay} />
            <Square value={game[5]} position={5} handlePlay={handlePlay} />
            <Square value={game[6]} position={6} handlePlay={handlePlay} />
            <Square value={game[7]} position={7} handlePlay={handlePlay} />
            <Square value={game[8]} position={8} handlePlay={handlePlay} />
        </div>
        <button onClick={resetGame} disabled={!winner && game.every(game => game)}>{winner || game.every(game => game) ? "Chơi lại" : "Reset"}</button>

        {isGameOver && (
            <div>
                {winner ? `Người chiến thắng là: ${winner}` : 'Trò chơi hòa!'}
            </div >
        )}
        <div className="mt-[230px] ml-[-170px]"><h2 >{status}</h2 ></div>


    </>
}

export default Board;