function RenderingData({ data }) {
  // props is always an object

  //   const { data }  = props;

  return (
    <div>
      <h1>Creator : {data.creator}</h1>
      <h2>Title : {data.title}</h2>
      <h3>full_description : {data.full_description}</h3>
    </div>
  );
}

export default RenderingData;
