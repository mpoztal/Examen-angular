import { Post } from "../interfaces/post.interface";

export const POSTS: Post[] = [
    {
        id: 1,
        title: 'Playa de Sicilia',
        text: 'Sicilia cuenta con 1000 kilómetros de costa: desde las de San Vito Lo Capo hasta la Scala dei Turchi (Escalera de los Turcos), desde las de Cefalú hasta la de Portopalo di Capo Passero. En Sicilia podrás encontrar algunas de las las playas más famosas de Italia. Por si fuera poco, Sicilia está rodeada por algunas de las islas más bellas de Italia, a su vez embellecidas con legendarias bahías y calas. ¿Cómo no mencionar, por ejemplo, la famosa Cala Rossa, en la isla de Favignana? Es sólo una de las joyas que brillan bajo el sol de las Islas Egadas, un archipiélago que puebla los sueños de los amantes de la navegación, el buceo y el mar.',
        author: 'Isaac Garcés',
        img: 'https://images.pexels.com/photos/2111253/pexels-photo-2111253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        date: '13/07/2022',
        categoryId: 1
    },
    {
        id: 2,
        title: 'Playa de Madére, Portugal',
        text: 'Las playas de Madére son fieles a su condición de archipiélago volcánico, por lo que sus arenas son mayoritariamente negras y rocosas, aunque de aguas cristalinas y agradables temperaturas.',
        author: 'Cristina Ripoll',
        img: 'https://images.pexels.com/photos/14268524/pexels-photo-14268524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        date: '20/07/2021',
        categoryId: 1
    },  
    {
        id: 3,
        title: 'Montaña bajo cielo nublado',
        text: 'Algunas nubes se forman cuando el aire se encuentra con una cordillera de montañas u otro tipo de terreno similar. Cuando esto pasa, el aire subirá y se refrescará. El aire más fresco ya no puede sostener todo el vapor de agua que podía sostenerse cuando estaba caliente',
        author: 'Philip Ackermann',
        img: 'https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        date: '03/02/2020',
        categoryId: 2
    },
    {
        id: 4,
        title: 'Camino De La Calle Cerca De árboles Verdes Y Amarillos',
        text: 'Los árboles juegan un papel vital en la conformación de nuestro planeta tal y como lo conocemos y son responsables, en buena parte, de que muchos ecosistemas tengan el aspecto y el éxito que tienen. Son hogar para una gran cantidad de animales.',
        author: 'Tim Gouw',
        img: 'https://images.pexels.com/photos/67517/pexels-photo-67517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        date: '20/04/2019',
        categoryId: 2
    },
    {
        id: 5,
        title: 'Ciudad de Nueva York, homenaje en luces',
        text: 'Lorem ipsum dolor sit  <strong>amet consectetur</strong> adipisicing elit. Impedit doloribus, <em>explicabo voluptates</em> eaque officia ipsa! Officia accusamus, animi <span class="rojo"> excepturi</span>, incidunt enim exercitationem nobis corrupti magni fugiat porro laudantium quas itaque.',
        author: 'Jesus Cauteler',
        img: 'https://cdn.pixabay.com/photo/2013/02/05/20/59/new-york-city-78181_640.jpg 1x, https://cdn.pixabay.com/photo/2013/02/05/20/59/new-york-city-78181_1280.jpg',
        date: '17/08/2014',
        categoryId: 3
    },
    {
        id: 6,
        title: 'En la tranquilidad',
        text: 'Lorem ipsum dolor sit  <strong>amet consectetur</strong> adipisicing elit. Impedit doloribus, <em>explicabo voluptates</em> eaque officia ipsa! Officia accusamus, animi <span class="rojo"> excepturi</span>, incidunt enim exercitationem nobis corrupti magni fugiat porro laudantium quas itaque.',
        author: 'Juanjo Dianes',
        img: 'https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_640.jpg',
        date: '23/04/2016',
        categoryId: 4
    },
    {
        id: 7,
        title: 'Sobrevolando por el aire',
        text: 'Lorem ipsum dolor sit  <strong>amet consectetur</strong> adipisicing elit. Impedit doloribus, <em>explicabo voluptates</em> eaque officia ipsa! Officia accusamus, animi <span class="rojo"> excepturi</span>, incidunt enim exercitationem nobis corrupti magni fugiat porro laudantium quas itaque.',
        author: 'Carla Quevedo',
        img: 'https://cdn.pixabay.com/photo/2016/11/29/04/18/hot-air-balloons-1867279_640.jpg',
        date: '08/04/2020',
        categoryId: 5
    },
    {
        id: 8,
        title: 'Festival de Ramayana',
        text: 'Ramayana es la historia de místicos y tradiciones antiguas, grandes batallas con hazañas fantásticas, criaturas míticas y paisajes vívidos, lecciones doradas sobre moral, ética y el faro de una forma de vida ideal. Es la única epopeya que une a millones de personas y existe una necesidad urgente de crear productos que preserven y propaguen el conocimiento y la sabiduría preservados en nuestras preciosas escrituras antiguas que han sobrevivido.',
        author: 'Alexandra García',
        img: 'https://cdn.pixabay.com/photo/2016/11/08/05/15/ramayana-festival-1807516_960_720.jpg',
        date: '12/11/2011',
        categoryId: 5
    }
]