const apli1 = {
    data() {
        return {
        mostrar: true,
        gusta: null,
        años: '',
        experiencia: '',
        lenguaje: '',
        lenguajes: []
    };
},
methods:{
    cambiar(){
        this.mostrar = this.gusta === 'sí';
        if (!this.mostrar){
        this.años = '';
        this.experiencia = '';
        this.lenguaje = '';
        this.lenguajes = [];
        }
    },
    agregar(){
        if (this.lenguaje){
        this.lenguajes.push(this.lenguaje);
        this.lenguaje = '';
        }
    }
    }
};
const apli2 = Vue.createApp(apli1).mount('#seccion');
