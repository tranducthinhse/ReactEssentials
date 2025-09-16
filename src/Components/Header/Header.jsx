import reactImg from "../../assets/react-core-concepts.png"; //untuk src img agar lebih rapij
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
  //math.floor membalikan bilangan bulat math random dan mengambil angka random antara 0 dan 1, pada function tersebut mathrandom dikali (max+1) lalu di mathfloor kan pada hasilnya
}

export default function Header() {
  //component header
  // cara selain pada tanda kurung {} yaitu membuat variable baru dan memasukan array dan function diatas
  const description = reactDescriptions[genRandomInt(2)]; //dinamic value
  // lalu pada variable {description} dimasukan ke yang dituju dengan tanda kurung

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      {/*untuk memasukan value pada import masukan tanda kurung */}
      <h1>React Essentials</h1>
      <p>
        {/*dalam tanda kurung tersebut dimasukan dari array diatas dan disambungkan pada function get getRandomInt. dari value array diatas akan teracak pada function getRandomInt dan output yang dihasilkan akan random sesuai hasil function dan pada max/parameter yang ingin saya masukan adalah sesuai max array yaitu 2 length */}
        {/*pada react tanda kurung bisa digambungkan antara array dan function seperti cara berikut*/}
        {/* {reactDescriptions[genRandomInt(2)]}  */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
