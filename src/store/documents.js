import { defineStore } from 'pinia'
import getDocumentsApi from '@/api/documents'
export const useStore = defineStore('documentsStore', {
    state: () => {
        return {
            users: [],
            search: '',
            searchMessage: null,
            loading: false,
            messageError: null
        }
    },
    actions: {
        async fetchDocuments() {
            try {
                this.searchMessage = null;
                if (!this.search.trim()) return;

                let nameList = this.search.split(',')
                    .map(name => `name=${name.toString().trim()}`);
                const url = `https://jsonplaceholder.typicode.com/users?${nameList.join('&')}`;

                this.loading = true;
                await getDocumentsApi.getUsers(url)
                    .then((data) => {
                        this.users = data;
                        if (data.length === 0) {
                            this.searchMessage = 'Ничего не найдено';
                        }
                        this.loading = false;
                    })
            } catch (error) {
                this.messageError = error.message
                this.loading = false;
                console.log(error)
            }
        },
    },
})
