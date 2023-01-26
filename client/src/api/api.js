import axios from 'axios';


const getAllPosts = async () => {
  return await axios.get('http://localhost:5000/api/post').then((response) => response.data)
}


export default { getAllPosts };