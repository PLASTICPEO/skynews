const Description: React.FC<{ style?: string; text?: string }> = ({
  style,
  text,
}) => {
  return (
    <div>
      <p className={`${style} mt-1`}>{text}</p>
    </div>
  );
};

export default Description;
