import React, { useState, useEffect } from "react";

function App() {
  // const [initData, setBackData] = useState({});
  // async function fetchData() {
  // 	const res = await fetch("http://localhost:3000/nft");
  // 	// const res = await fetch('https://randomuser.me/api');
  // 	res
  // 		.json()
  // 		.then(res => setBackData(res))
  // 		console.log(initData);
  // }
  // useEffect(()=>{
  // 	fetchData();
  // })




	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const [term, setTerm] = useState(false);

	const [inputFields, setInputFields] = useState({
		email: '',
		password: '',
		term: false
	});

	const handleChange = e => {
		const { target } = e;
		const { name } = target;
		const value = name === 'term' ? target.checked : target.value

		setInputFields({
			...inputFields,
			[name]: value
		})
	}

	const onSubmit = (e) => {
		e.preventDefault();

		console.log('submit payload', inputFields)
		// const payload = {
		// 	email,
		// 	password,
		// 	term
		// }
		// console.log('submit payload', payload)

		fetch('http://localhost:3000/auth/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(inputFields)
			// body: JSON.stringify(payload)
		})

	}

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
				  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
				  onChange={handleChange}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
				  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
				  onChange={handleChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
				  name="term"
                  className="form-check-input"
                  id="exampleCheck1"
				  onChange={handleChange}
                />
                <label className="form-check-label" for="exampleCheck1">
                  Accept Terms & Condition
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div>
      <span>{JSON.stringify(initData)}</span>
    </div> */}
    </>
  );
}

export default App;
