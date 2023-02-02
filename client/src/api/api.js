import axios from 'axios';


const getAllPosts = async () => {
  return await axios.get('http://localhost:5000/api/post').then((response) => response.data);
};

const getAllUsers = async () => {
  return await axios.get('http://localhost:5000/api/user').then((response) => response.data);
};

const getMyProfile = async (id) => {
  return await axios.get(`http://localhost:5000/api/user/${id}`).then((response) => response.data);
};

const updateBio = async (id, bio) => {
  return await axios.put(`http://localhost:5000/api/user/${id}`, { bio: bio }).then((response) => response.data);
}


export default { getAllPosts, getAllUsers, getMyProfile, updateBio };