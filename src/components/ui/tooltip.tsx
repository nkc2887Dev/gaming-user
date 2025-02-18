const ToolTip = ({
  text,
  value,
  className,
}: {
  text: string;
  value: string | number;
  className?: string | undefined;
}) => {
  return (
    <>
      <span className={`${className} cursor-pointer`}> {value}</span>
      <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 hidden group-hover:inline-block bg-black text-white text-xs p-2 rounded-md z-50 whitespace-nowrap before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-black">
        {text}
      </span>
    </>
  );
};

export default ToolTip;
