const axios = require("axios");

const ENDPOINT = "https://jsonplaceholder.typicode.com";

async function getData(userId) {
	try {
        const { data: user } = await axios.get(`${ENDPOINT}/users/${userId}`);
        const { data: posts } = await axios.get(`${ENDPOINT}/posts/?userId=${user.id}`)
		user["posts"]=posts;
		return user;
	} catch (e) {
		console.log(e);
	}
}

module.exports=getData;