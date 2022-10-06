import Company from "./components/Company";
import Copyright from "./components/Footer";

function App() {
    return(
        // props : 데이터 전달 -> 받는 쪽에서는 매개변수로 props 또는 {변수명}
        <main>
          <Company title = {'NodeJS'} contents = {'ServerSide/FrontEnd'} />
          <Copyright company = {'Seoul it Academy'} />
        </main>
    );
}

export default App;