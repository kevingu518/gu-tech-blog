import { useParams } from "react-router-dom";

const Docs = () => {
  const { id } = useParams();

  return (
    <div className="page-container">
      <h1>📄 技術文件</h1>
      <p>當前文件 ID：<strong>{id}</strong></p>
    </div>
  );
};

export default Docs;
