/**
 * Este archivo es parte de la web PIPE.
 * 
 * @author    Juan Felipe Valencia Murillo  <juanfe0245@gmail.com>
 * @copyright 2018 - presente  Juan Felipe Valencia Murillo
 */

Vue.component('menu-izquierdo', {
  data: () => ({
    href: location.href,
    host: DOMINIO,
    menu: []
  }),
  mounted() {
    this.asignarMenu('v4.x');
  },
  methods: {
    asignarMenu(version) {
      this.menu = [
        { href: this.host, texto: 'Acerca de' },
        { href: `${this.host}proyectos/`, texto: 'Proyectos' },
        { href: `${this.host}estudios/`, texto: 'Estudios' },
        { href: `${this.host}conocimientos/`, texto: 'Conocimientos' },
        { href: `${this.host}redes-sociales/`, texto: 'Redes Sociales' },
      ];
    }
  },
  template: `
    <aside class="menu-izquierdo">
    <div class="hr"></div>
    <template v-for="(item, index) in menu">
      <a :href="item.href" class="menu_link" :style="href==item.href ? 'color:#5BC800; font-weight:bold;' : ''">{{item.texto}}</a>
      <div class="hr"></div>
    </template>
    </aside>
    `
});