const routes = [
    {
        path: '/retribucion-prueba',
        component: () => import('@/layout/MainLayout.vue'),
        meta: { auth: false },
        children: [
            {
                path: '',
                name: 'Inicio',
                // component: Inicio,
                component: () => import('@/pages/Inicio.vue'),
            },
            {
                path: '/retribucion-prueba/nota-estancias',
                name: 'Nota Estancias',
                // component: Inicio,
                component: () => import('@/pages/NotaEstancias.vue'),
            },
            {
                path: '/retribucion-prueba/nota-contemos',
                name: 'Nota Contemos',
                // component: Inicio,
                component: () => import('@/pages/NotaContemos.vue'),
            },
            {
                path: '/retribucion-prueba/retribucion-prueba/nota-ens',
                name: 'Nota ENS',
                // component: Inicio,
                component: () => import('@/pages/NotaENS.vue'),
            },
            {
                path: '/retribucion-prueba/nota-ciencias',
                name: 'Nota Ciencias',
                // component: Inicio,
                component: () => import('@/pages/NotaCiencias.vue'),
            },
            {
                path: '/retribucion-prueba/nota-reforestacion',
                name: 'Nota Reforestación',
                // component: Inicio,
                component: () => import('@/pages/NotaReforestacion.vue'),
            },
            {
                path: '/retribucion-prueba/nota-eneceb',
                name: 'Nota ENECEB',
                // component: Inicio,
                component: () => import('@/pages/NotaENECEB.vue'),
            },
        ],
    },
];

export default routes;
