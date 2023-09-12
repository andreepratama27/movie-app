import { useFetchImage } from "../../hooks/useFetchImage";

export default function CompanyList({
  company,
}: {
  company?: ProductionCompany;
}) {
  const { loading, currentImage } = useFetchImage({
    path: company?.logo_path as string,
  });

  return (
    <div className="production--data flex gap-4 mb-4" key={company?.id}>
      <div className="production-data__image w-20 h-20 bg-white rounded flex justify-center items-center">
        <img
          src={currentImage}
          alt={company?.logo_path}
          className={`
            w-full h-full object-contain rounded flex justify-center items-center
              rounded-t sm:object-cover duration-700 ease-in-out group-hover:opacity-75
              ${
                loading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
        />
      </div>
      <div className="production-data__title">
        <p className="text-white">{company?.name}</p>
        <p className="text-sm text-white">{company?.origin_country}</p>
      </div>
    </div>
  );
}
