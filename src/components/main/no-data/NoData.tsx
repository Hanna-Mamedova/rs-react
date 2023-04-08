import './NoData.css';

interface NoDataProps {
  data: {
    title: string;
    imgUrl: string;
  };
}

function NoData(props: NoDataProps) {
  return (
    <div className="content">
      <h2 className="content-title">{props.data.title}</h2>
      <div className="content-image">
        <img src={props.data.imgUrl} alt="Rick and Morty" />
      </div>
    </div>
  );
}

export default NoData;
