import { axiosConfig } from '../axios/axiosConfig';

export async function fetchCartItems(setCounter) {
  try {
    const { data } = await axiosConfig({
      url: '/cart'
    });
    setCounter(data.length);
  } catch (error) {
    console.error('Error fetching cart items:', error);
  }
}