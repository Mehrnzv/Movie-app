import "./style.scss";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";

const NotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page Not Found!</span>
      </ContentWrapper>
    </div>
  );
};

export default NotFound;
