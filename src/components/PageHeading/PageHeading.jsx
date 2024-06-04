import "./PageHeading.css";

export const PageHeading = ({ title, subtitle }) => {
  return (
    <div className={`background-gradient page-heading`}>
      <h1 className={`page-heading-title`}>{title}</h1>
      {subtitle && (
        <p className={`page-heading-subtitle subtitle lg`}>{subtitle}</p>
      )}
    </div>
  );
};
