import axios from 'axios'

const CONTACTS_API_URL = 'http://private-05627-frontendnewhire.apiary-mock.com/contact_list';

export const getAll = () => {
    return new Promise((resolve, reject) => {
        axios.get(CONTACTS_API_URL)
          .then(
            response => {
                if(response.status !== 200){
                    reject(response);
                    return
                }
                resolve(response.data);
            }
          )
          .catch(
              err => reject(err)
          )
    })
}