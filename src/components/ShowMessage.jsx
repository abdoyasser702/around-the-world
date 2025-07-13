function ShowMessage(props) {
  const { message } = props;
  return (
    <div className="text-center">
      <p className="text-2xl font-bold">{message}</p>
    </div>
  );
}

export default ShowMessage;
