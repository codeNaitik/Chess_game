import React from "react";
import "./ChessBoard.css";

const HorizontalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
const VerticalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const chessBoard = () => {
  let board = [];

  
  for (let j = VerticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < HorizontalAxis.length; i++) {
      
      const num = i+j;
      if(num%2==0){
        board.push(

          <div className="tile white-tile">
            [{HorizontalAxis[i]}
            {VerticalAxis[j]} ]
          </div>
        );
      }else{
        board.push(

          <div className="tile black-tile">
            [{HorizontalAxis[i]}
            {VerticalAxis[j]} ]
          </div>
        );

      }

      
    }
  }

  return <div id="ChessBoard">{board}</div>;
};

export default chessBoard;
