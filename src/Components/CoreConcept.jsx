export default function CoreConcept({ image, title, description }) {
    //alternatif lain pada parameter props diganti dengan tanda object {}
    //membuat component dan dipakai berkali2 tapi dengan data yang berbeda
    return (
      <li>
        <img src={image} alt={title} />
        {/*props diambil dari parameter function, image diambil dari edited component pada function app. pada props title mengambil components edited pada dalam function app */}
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
  