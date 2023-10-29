import { defineStore } from 'pinia';
import getUsersApi from '../api/index';
import { IUser } from '../helpers/helper';
  
export const useStore = defineStore('documentsStore', {
    state: () => {
        return {
            users: [] as IUser[],
            search: '' as string,
            searchMessage: null  as string | null,
            loading: false as Boolean,
            showCard: false as Boolean,
            messageError: '' as unknown
        }
    },
    actions: {
        async fetchUsers() {
            try {
                this.searchMessage = null;
                if (!this.search.trim()) return;

                let nameList = this.search.split(',')
                    .map(name => `name=${name.toString().trim()}`);
                const url = `https://jsonplaceholder.typicode.com/users?${nameList.join('&')}`;

                this.loading = true;
                await getUsersApi.getUsers(url)
                    .then((data) => {
                        this.users = data;
                        if (data.length === 0) {
                            this.searchMessage = 'Ничего не найдено';
                        }
                        this.loading = false;
                    })
            } catch (error: unknown) {
                this.messageError = error
                this.loading = false;
                console.log(error)
            }
        },
    },
})
