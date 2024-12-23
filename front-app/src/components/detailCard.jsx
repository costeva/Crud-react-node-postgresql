import { DetailCard } from "./detailCard";

export const cardDetail = () => {
  return (
    <div>
      <h1>Details</h1>

      {details.map((detail) => (
        <DetailCard
          key={detail?.id}
          id={detail?.id}
          title={detail.title}
          description={detail.description}
        />
      ))}
    </div>
  );
};
