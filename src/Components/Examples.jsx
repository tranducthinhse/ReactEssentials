import { useState } from "react"; // menggunakan state pada react component yang dinamakan react hook

import TabButton from "../components/TabButton";
import { EXAMPLES } from "../data"; //import variable EXAMPLES OBJECT pada <data className="js"></data>

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(); //menggunakan didalam function app tetapi tidak dalam function bersarang. atau ditaro top level pada component js. menggunakan usestate array memberi tahu react bahwasannya component tersebut digunakan berulang, dan bisa menggunakan let/const pada variable dan ini menggunakan array. dan ketika di refresh perintah please klick button berulang lagi. Please click a button diubah menjadi components atau import dari object didalam Examples
  //props pada usestate "components" dikosongkan atau diganti untuk memilih navbar menu dibawah agaSr ketika di refresh awal pilihan navbar tersebut kita berikan perintah seperti ('pilih navbar') dan lain2
  // let tabContent = "Please click a button"; //membuat variable baru untuk menyambungkan didalam function pada props (selectedButton). kekuragan dalam ini adalah tidak dapat update dalam UI komponen/tidak dapat digunakan component berulang dan harus menggunakan component dari react yaitu useState berkaitan juga pada component app

  function handleSelect(selectedButton) {
    //selecButton => "components", "jsx", "props", "State"
    //function ini dipindahkan dari tabButton untuk mengetest button onclick berfungsi dan diubah menjadi handleSelect
    //console diubah menjadi dibawah  console.log(selectedButton); // pada dalam () diganti props diatasnya dan ketika diubah props tersebut akan berkaitan pada arrow function di handleSelect bawah.
    // tabContent = selectedButton; // pada variable tabContent dimasukan ke function ke handleselect dan = dengan selectedButton, jadi variabel tersebut sama dengan props ini.
    setSelectedTopic(selectedButton); //pada array diatas disambungkan props
    // console.log(selectedButton);
  }
  console.log("APP RENDERING EXECUTING"); // untuk mengetahui app.jsx berfungsi

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  } //cara lain dari topic navbar menu membuat variable dan diiisi element tag jsx. dan import variable tersebut dibawah.

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {/* <TabButton label="Components" />
            cara lainnya dibanding yang dibawah, memasukan text dalam component dengan cara memasukan label tag react dan menamai components tetapi harus mengganti parameter pada component di function tersebut dengan label */}
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
        >
          {/* selectedTopic === "components  artinya adalah pada array selectedTopic useState === props pada selectedbutton. yang dimana props tersebut components,JSX,props,state*/}
          {/* memasukan props button yaitu isSelected untuk mengaktifkan tombol button pada menu navbar apabila tidak di click maka button tersebut tidak aktif, yaiitu apabila topic tersebut di select sama dengan true apabila tidak maka false.  */}
          Components
        </TabButton>
        {/*membuat arrow function didalam props pada handleSelect dan itu cara biasa pada javascript pada function tersebut */}
        {/*tadinya onclick yaitu props bawaan react dan diubah menjadi onSelect pada props buatan function parameter object pada component button */}
        {/* dari kedua cara antara children maupun label atau menggunakan function dgn cara tag html atau dengan cara diatas, bebas saja
            {/* pada tabbutton component bisa digunakan seperti html tag dan menulis text sesuai kebutuhan atau dalam component tersebut juga bisa dimasukan html tag didalamnya sesuai kebutuhan */}
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {/* cara dibawah ini memasukan variable pada tabcontent yg berisi navbar */}
      {tabContent}

      {/* outputnya adalah dibawah navbar terdapat string dari value variable tabContent */}
      {/* {selectedTopic}  */}

      {/* {!selectedTopic ? <p>Please select a topic.</p> : null}  sblm memilih topic navbar terdapat text mengarahkan navbar tersebut. */}
      {/* ketika tidak memilih topic navbar maka yang keluar adalah paragraf text diatas. ! artinya tidak, ? callback paragraf apabila selectedtopic tidak di click, : null adalah sesuatu yg dapat anda keluarkan dalam code jsx apabila tidak merender paragraf tersebut dan melanjutkan ke topic navbar */}

      {/* didalam element tag jsx didalam div adalah element tag untuk mengimport data.js */}
      {/* {selectedTopic ?  (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
          ) : null} */}

      {/* cara diatas adalah satu persatu membuatny sedangkan dibawah render null diubah dan langsung dimasukan element divnya  */}

      {/*  cara ini lebih simpel dibanding yang diatas
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

      {/* cara dibawah pada logic operator ? diubah menjadi && yang dimana tidak diperlukan null dan cara tersebut adalah menggunakan cara js
          {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
    </section>
  );
}
