const MobileContainer = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center bg-[#f5f5f5]">
      <div className="w-full max-w-[375px] min-h-screen bg-[#F7F8F9]">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;