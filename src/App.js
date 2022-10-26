import React, {useState, useEffect} from 'react'

function App() {
  
	const [initData, setBackData] = useState({});
	async function fetchData() {
		const res = await fetch("http://localhost:3000/nft");
		// const res = await fetch('https://randomuser.me/api');
		res
			.json()
			.then(res => setBackData(res))
			console.log(initData);
	}
    useEffect(()=>{
		fetchData();
    })
    
  return (
    <div>
      <span>{JSON.stringify(initData)}</span>
    </div>
  );
}

export default App;
