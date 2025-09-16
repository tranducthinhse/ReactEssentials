export default function TabButton({ children, onSelect, isSelected }) {
    //menambahkan props onSelect
    //membuat component button dan memasukan parameter props dengan menggunakan props.children atau menggantikan parameter pada props dengan object children, property object pada children diganti menjadi label
    //document.querySelector("button").addEventListener("click", ()=>{  }) pada cara tersebut biasanya digunakan untuk pure js
    console.log("TABBUTTON EXECUTING RENDERING "); //untuk mengetahui compponent berfungsi
    // function handleClick(){  menghapus function handleClick karena untuk mengecek button tersebut ketika diklick berfungsi, dan dipindahkan ke file app.jsx
    //   console.log('Hello World!');
    // }
    return (
      //mengubah onClick pada props menjadi onselecet
      <li>
         <button className={isSelected ? 'active' : undefined} onClick={onSelect}>  {/*apabila menu button selected true/dipilih maka aktif apabila tidak dipilih maka undefined atau tidak akitf. bisa dipilih dgn string kosong " "/undefined */}
          {children}
        </button>
        {/*dalam cara react untuk mengklick button menambahkan onclick, pada props ada banyak dalam keyword yg bisa digunakan seperti onDrag, onClick dlL, pada onclick memasukan function dan membuat function dibawah function tabButton, onClick dimasuukan parameter onSelect */}
      </li>
    );
  }
  