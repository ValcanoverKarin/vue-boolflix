var app = new Vue (
    {
        el: '#root',
        data: {
            //1a. aggiungo la chiave
            api_key: '7256d088cd76b30a936046b2d338fc9d',
            //1b. aggiungo seachInput per la ricerca dell' utente nella imput
            searchInput: '',
            //1g. creao l'array che viene popolato dalla chiamata all'API
            resultMovie: [],
            //2a. creo l'array di link delle bandiere
            flagsImages: {
                en: 'https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg',
                it: 'https://lipis.github.io/flag-icon-css/flags/4x3/it.svg',
                fr: 'https://lipis.github.io/flag-icon-css/flags/4x3/fr.svg',  
                de: 'https://lipis.github.io/flag-icon-css/flags/4x3/de.svg',
                es: 'https://lipis.github.io/flag-icon-css/flags/4x3/es.svg', 
                da: 'https://lipis.github.io/flag-icon-css/flags/4x3/dk.svg',
                pl: 'https://lipis.github.io/flag-icon-css/flags/4x3/pl.svg',
                sv: 'https://lipis.github.io/flag-icon-css/flags/4x3/se.svg',
                tr: 'https://lipis.github.io/flag-icon-css/flags/4x3/tr.svg'                           
            }            
            
        },
        methods: {
            //1d. creo la funzione per popolare l'array resultMovie quando l'utente clicca la lente o preme enter
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