var app = new Vue (
    {
        el: '#root',
        data: {
            //1a. aggiungo la chiave
            api_key: '7256d088cd76b30a936046b2d338fc9d',
            //1b. aggiungo seachInput per la ricerca dell' utente nella imput
            searchInput: '',
            //1g. creao l'array per i film che viene popolato dalla chiamata all'API
            resultMovie: [],
            //2d. creao l'array per le serie che viene popolato dalla chiamata all'API
            resultSerie: [],

            //2a. creo l'array di link delle bandiere
            flagsImages: {
                en: 'https://lipis.github.io/flag-icon-css/flags/4x3/gb.svg',
                it: 'https://lipis.github.io/flag-icon-css/flags/4x3/it.svg',
                fr: 'https://lipis.github.io/flag-icon-css/flags/4x3/fr.svg',  
                de: 'https://lipis.github.io/flag-icon-css/flags/4x3/de.svg',
                es: 'https://lipis.github.io/flag-icon-css/flags/4x3/es.svg', 
                ja: 'https://lipis.github.io/flag-icon-css/flags/4x3/jp.svg',
                da: 'https://lipis.github.io/flag-icon-css/flags/4x3/dk.svg',
                pl: 'https://lipis.github.io/flag-icon-css/flags/4x3/pl.svg',
                sv: 'https://lipis.github.io/flag-icon-css/flags/4x3/se.svg',
                tr: 'https://lipis.github.io/flag-icon-css/flags/4x3/tr.svg'                           
            }            
            
        },
        methods: {
            //1d. creo la funzione per popolare l'array resultMovie quando l'utente clicca la lente o preme enter
            //2c. creao la funzione sia per i film che per le serie 
            searchFilm: function() {

                ////FILM
                axios
                //1e. aggiungo l' apposita API 
                .get("https://api.themoviedb.org/3/search/movie", {
                    params: {
                        api_key: this.api_key,
                        query: this.searchInput,
                        language: "it-IT"
                    }
                })
                //1f. risposta del server
                .then((response) => {
                    //const result = response.data;
                    //console.log(result);
                    this.resultMovie = response.data.results;
                });

                ////SERIE
                axios
                .get("https://api.themoviedb.org/3/search/tv", {
                    params: {
                        api_key: this.api_key,
                        query: this.searchInput,
                        language: "it-IT"
                    }
                })
                .then((response) => {
                    this.resultSerie = response.data.results;
                });
            },

            //3b. creo una funzione per approssimare al numero intero piu vicino (da 1 a 5)
            starsVote: function (vote) {
                return Math.round(vote / 2)
            }
        },

        mounted () {

        }
    }
);