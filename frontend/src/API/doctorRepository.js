import axios from 'axios'

export class DoctorRepository {
    
    url = 'http://localhost:8000'

    // config = {
    //     headers: {
    //         Authorization: ''
    //     }
    // };

    getInventory() {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:8000/getInventory')
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x); // handle error
                    reject(x);
                });
        });
    }

    getOrders() {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:8000/manufacturerorders')
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x); // handle error
                    reject(x);
                });
        });
    }
}