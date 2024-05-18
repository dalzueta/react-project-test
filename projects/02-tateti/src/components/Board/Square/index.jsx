const Square = ({ children, index, board, updateBoardFundtion, isActive }) => {
  const className = isActive ? "square active" : "square";

  return (
    <div
      className={className}
      onClick={(index) => {
        updateBoardFundtion(index);
      }}
    >
      {children}
    </div>
  );
};

export default Square;
