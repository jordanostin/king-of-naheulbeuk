import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Form} from './components/form/Form';
import { Start } from "./pages/start";
import './App.css';

const App = () => {

  	return (
      	<>
			<h1>King of Naheulbeuk</h1>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Form />}/>
					<Route path='/start' element={<Start />}/>
				</Routes>
    		</BrowserRouter>
	  	</>
  	);
}

export default App;
