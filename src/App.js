import {  useEffect, useState } from 'react';
import { perso } from './components/data/perso';
import {Form} from './components/form/Form';

const App = () => {

	const [hero, setHero] = useState(perso[2])

	useEffect(() => {

		if(hero.name !== undefined){
			setHero({...hero, hero});
		}

	}, [hero]);

  	return (
      	<>
			<h1>King of Naheulbeuk</h1>
	  		<Form hero={hero} setHero={setHero} />
	  	</>
  	);
}

export default App;
