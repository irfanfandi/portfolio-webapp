type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="dot-flashing"></div>
    </div>
  );
};

export default Loading;
