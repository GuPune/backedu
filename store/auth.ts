import { defineStore } from 'pinia';

interface UserPayloadInterface {
  username: string;
  password: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    count:11
  }),
  getters: {
    load(state) {
      return state.loading;
    },
  },
  
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      const { error, data }: any = await useFetch('https://dummyjson.com/auth/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          username,
          password,
        },
      });

//       console.log(error.value.data);

  //  alert(JSON.stringify(data.value));
// // Might be interesting as well:
// console.log(error.value.name, error.value.message);
// alert(JSON.stringify(error.value.message));

  

  
      if (data.value) {
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        token.value = data?.value?.token; // set token to cookie
        this.authenticated = true; // set authenticated  state value to true
      }
      if (!data.value) {
        this.loading = true;

      }
      // if(error.value.message){
      //   alert('message');

      // }
 

    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
    ab() {
      this.loading = true;
     },
  },
});

// {"__v_isShallow":false,"__v_isRef":true,"_rawValue":null,"_value":null}