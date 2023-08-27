const url = 'https://fakestoreapi.com/';

export const getAll = async () => {
    try {
      const res = await fetch(`${url}products`, {
        headers: {
          "Content-type": "application/json"
        },
      })
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
      return res
    } catch (e) {
      console.log(e.message);
    }
  };

  export const getOne = async (id) => {
    try {
      const res = await fetch(`${url}products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          return data;
        });
      return res
    } catch (e) {
      console.log(e.message);
    }
  };