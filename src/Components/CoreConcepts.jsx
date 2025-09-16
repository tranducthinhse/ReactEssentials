import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      {/* {["Hello", "World"]}{" "}
    {/*cara react adalah menggunakan string dan array */}
      {/* {[<p>Hello</p>, <p>World</p>]} */}
      {/*menggunakan cara jsx element yaitu array didalam element tag */}
      <ul>
        {/* cara lainnya adalah dengan cara mengimport data tetapi trs upttodate tanpa mengalami error pada gambar dan tidak mengalami error walaupun data tersebut ilang  */}
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}{" "}
        {/* membuat array baru dengan cara membuat function arrow menggunakan metode map, dengan cara berikut tidak perlu membuat step by step seperti cara dibawah
        pada arrow function didalamnya mereturn atau menjalankan perintah dari data coreconcept, walaupun data tersebut hilang atau bertambah tidak mengalami error pada image tersebut
        lalu ditambah key, karena pada console mengalami uniqe pada key props. pada key ditambkan cooreconceept function pada title karena title berbeda2 dgn satu sama lain */}
        {/* memmasukan component dengan data yang berbeda tetapi pada satu komponen dipakai untuk berkali2 */}
        {/* <CoreConcept
        {...CORE_CONCEPTS[0]}
        // title={CORE_CONCEPTS[0].title} //data yang diambil yaitu dari data.js dan variable tersebut berisi didalamnya array dalam object.
        // description={CORE_CONCEPTS[0].description} //metode yang digunakan adalah array dalam object
        // img={CORE_CONCEPTS[0].image}
        // title="Components" : berikut adalah cara manual, ada cara cepatnya yaitu menyambungkan danmengidet dari data.js dalam komponent
        // description="The core UI building block."
        // img={componentsImg}
      />
      {/* components dicustom atributes pada diatas dibikin otomatis oleh react menjadi singgle object dan pada object tersebut disambungkan ke props components, props as a argument by react  */}
        {/* dalam mengedit component bisa memasukan array, object atau data yang ingin dimasukan, apabila string menggunakan"" apabila array atau object diawali dengan {[]}/{{}}/int{12} */}
        {/*memasukan props pada component untuk mengedit data yang berbeda */}
        {/* <CoreConcept
       {/*  {...CORE_CONCEPTS[1]}
        // title={CORE_CONCEPTS[1].title}
        // description={CORE_CONCEPTS[1].description}
        // img={CORE_CONCEPTS[1].image}
      />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      {/* cara lainnya adalah selain cara diatas yaitu lebih singkat */}
        {/*  <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}
