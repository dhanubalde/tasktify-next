const ClerkLayout = ({ children }: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center justify-center my-[100px]">
      {children}
    </div>
  );
};

export default ClerkLayout;
