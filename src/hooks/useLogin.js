// import { useState, useEffect } from 'react';
// import url  from '../keys/backend_keys';
// const useLogin = (body ) => {
// 	const [data, setData] = useState(null);
// 	const [loading, setLoading] = useState(true);
// 	useEffect(() => {
// 		fetch(`${url}/api/auth`, {
// 			method: 'POST',
// 			body
// 		})
// 			.then((resp) => resp.json())
// 			.then((datos) => {
// 				setData(datos);
// 				setLoading(false);
// 			});
// 	}, [body]);
// 	return [data, loading];
// };

// export default useLogin;
