import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        authorization:'Bearer tRJBH8B0X7_E_yUGOskEWpSeMnLqaBWwqrCU5ROvXKRxbnnuJF_MpWpHxiER1FbF6--6uEsShWRX3_F2dLfEgR6PJNkRNEcnu4fxgkQvyIFDCkjtnJ0e7lBQiQdMX3Yx'
    }
});