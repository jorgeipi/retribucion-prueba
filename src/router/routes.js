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
                path: 'nota-estancias',
                name: 'Nota Estancias',
                // component: Inicio,
                component: () => import('@/pages/NotaEstancias.vue'),
            },
            {
                path: 'nota-contemos',
                name: 'Nota Contemos',
                // component: Inicio,
                component: () => import('@/pages/NotaContemos.vue'),
            },
            {
                path: 'retribucion-prueba/nota-ens',
                name: 'Nota ENS',
                // component: Inicio,
                component: () => import('@/pages/NotaENS.vue'),
            },
            {
                path: 'nota-ciencias',
                name: 'Nota Ciencias',
                // component: Inicio,
                component: () => import('@/pages/NotaCiencias.vue'),
            },
            {
                path: 'nota-reforestacion',
                name: 'Nota Reforestación',
                // component: Inicio,
                component: () => import('@/pages/NotaReforestacion.vue'),
            },
            {
                path: 'nota-eneceb',
                name: 'Nota ENECEB',
                // component: Inicio,
                component: () => import('@/pages/NotaENECEB.vue'),
            },
        ],
    },
];

export default routes;
