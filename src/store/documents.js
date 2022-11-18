import { defineStore } from 'pinia'
import getDocumentsApi from '@/api/documents'

export const useStore = defineStore('documentsStore', {
    state: () => {
        return {
            documents: [],
            idDocument: null,
            showCard: false,
            urlApi: 'https://agile-sands-40710.herokuapp.com/user/docs?search=',
            loading: true,
            messageError: null
        }
    },
    actions: {
        async fetchDocuments() {
            try {
                this.documents = await getDocumentsApi.getDocuments(`${this.urlApi}${this.idDocument}`);
                this.loading = false;
            } catch (error) {
                this.messageError = error.message
                this.loading = false;
                console.log(error)
            }
        },
    },
})
