import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Solar Stars Power",
  descriptions: "Best in Selling Solar Products",
  keywords: "Buy Solar, Buy Solar Products Cheap",
};

export default Meta;
