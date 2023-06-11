import style from "./map.module.scss";

type MapInput = {
  search: string;
};

export default function Map({ search }: MapInput) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${search}`;

  return (
    <iframe
      className={style.map}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      src={mapSrc}
    ></iframe>
  );
}
