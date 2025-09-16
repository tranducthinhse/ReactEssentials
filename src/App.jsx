import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    //pengganti div pada isi code element tag jsx/html adalah Fragment yaitu component dari react untuk pengganti div dan mengimport react
    // <div>
    // <Fragment>  cara lain selain Fragment dengan menggunakan react component yaitu
    //menggunakaan cara modern dengan tutup kurunng biasa
    <>
      <Header /> {/*component disambungkan didalan app.js */}
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      {/* // </div> */}
      {/* // </Fragment> */}
    </>
  );
}

export default App;
