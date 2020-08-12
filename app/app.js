var app = new Vue({
    el: '#app',
    mixins: [Vue2Filters.mixin],
    data() {
        return{
            aviso: false,
            g0: false,
            g1: false,
            g2: false,
            g3: false,
            g4: false,
            g5: false,
            g6: false,
            g7: false,
            g8: false,
            g9: false,
            g10: false,
            g11: false,
            diagnosticosFilter: '',
            diagnosticos: ["Dolor", "Infecciones agudas y crónicas", "Sordera y estudios de audición", "Prurito (Comezón)", "Mareo, vértigo y problemas de equilibrio", "Tapones de cerumen", "Zumbido", "Curaciones de oído", "Oídos tapados", "Traumatismos", "Perforación de la membrana", "Otitis del nadador", "Otitis", "Adaptación de auxiliares auditivos", "Tubos de ventilación", "Cuerpos extraños", "Obstrucciones", "Desviación de tabique nasal", "Alergias", "Cuadros gripales e infecciones", "Influenza", "Sangrados", "Sinusitis", "Traumatismos y fracturas", "Problemas estéticos", "Alteraciones del olfato", "Prurito (Comezón)", "Resequedad", "Pólipos nasales y otras tumoraciones", "Escurrimiento nasal", "Cuerpos extraños", "Estornudos", "Pruebas alérgicas", "Inmunoterapia (vacunas)", "Cauterización", "Crecimiento de cornetes", "Crecimiento de cornetes", "Defensas respiratorias", "Endoscopia diagnóstica", "Ronquido", "Infecciones recurrentes", "Infecciones", "Amigdalas (Anginas) y adenoides", "Alergias", "Ronquido", "Tumoraciones en paladar y anginas", "Halitosis (mal aliento)", "Asma", "Bronquitis aguda y crónica", "Halitosis (mal aliento)", "Asma", "Bronquitis", "Neumonías", "Refuerzo de sistema de defensa", "Endoscopia flexible de laringe y cuerdas vocales", "Laringitis y faringitis", "Problemas de campanilla y paladar"],
            cirugias: ["Amigdalectomía con o sin adenoindectomía (anginas)", "Septoplastia con/sin turbinoplastia (tabique nasal y cornetes)", "Rinoseptoplastia con turbinoplastia (Estética con o sin cornetes)", "Cirugía endoscópica de nariz y senos paranasales (Sinusitis)"],
            alergias: ["Diagnostico de alergias", "Ambientales", "Alimentarias", "Mediante pruebas", "En piel", "Sangre (RAST)", "Tratamiento con Inmunoterapia:", "Vacuna subcutánea", "Vacuna sublingual", "Neutralización"],
            audicion: ["Logo-Audiometría/Audiometria","Timpanometría","Adaptación de auxiliares auditivos"],
            social: [
                { link: 'https://www.facebook.com/otorrinosantafe/',  icon: 'fab fa-facebook-f'},
                { link: 'https://www.youtube.com/channel/UCdK7GCx5Ts0-Rpx7n1G5KrQ?view_as=subscriber', icon: 'fab fa-youtube' },
                { link: 'https://www.instagram.com/otorrinossantafe/', icon: 'fab fa-instagram' },
                { link: 'https://twitter.com/FeOtorrinos', icon: 'fab fa-twitter' },
                { link: 'https://wa.me/5215554028656?textHola%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios', icon: 'fab fa-whatsapp' },
            ]
        }
    },
    computed: {

    },
    methods: {
        visibleModal: function (val) {
            return this['g'+val]
        },
        opengal(val){
            this['g'+val] = true
        },
        closegal(val){
            console.log('close')
            this['g'+val] = false
            console.log(this['g'+val])
        }
    }
})