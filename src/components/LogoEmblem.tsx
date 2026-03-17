const LogoEmblem = ({ size = 40, className = "" }: { size?: number; className?: string }) => {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/ksksi_logo.png"
        alt="KEN-BU-KAI Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default LogoEmblem;
