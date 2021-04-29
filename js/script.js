var app = new Vue (
    {
        el: '#root',
        data: {
            //1a. aggiungo la chiave
            api_key: '7256d088cd76b30a936046b2d338fc9d',
            //1b. aggiungo seachInput per la ricerca dell' utente nella imput
            searchInput: '',
            //1g. creao l'Array che viene popolato dalla chiamata all'API
            resultMovie: []
            
        },
        methods: {
            //1d. creo la funzione che manda una chiamata all'API quando l'utente preme il button o preme enter
            searchFilm() {
                axios
                ////1e. aggiungo l' apposita API 
                .get("https://api.themoviedb.org/3/search/movie", {
                    params: {
                        api_key: this.api_key,
                        query: this.searchInput,
                        language: "it-IT"
                    }
                })
                //1f. risposta del server
                .then((response) => {
                    const result = response.data;
                    //console.log(result);
                    this.resultMovie = result.results;
                });
            }
        },
        mounted () {

        }
    }
);