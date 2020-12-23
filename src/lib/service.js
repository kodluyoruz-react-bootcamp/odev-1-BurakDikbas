

import axios from "axios";

const ENDPOINT = "https://jsonplaceholder.typicode.com";




async function getData() {
	try {
        const { number: userid } = await axios.get(`${ENDPOINT}/users/1`);
        const { data: posts } = await axios.get(`${ENDPOINT}/posts/1`)
		console.log(userid,posts);
	} catch (e) {
		console.log(e);
	}
}

getData();