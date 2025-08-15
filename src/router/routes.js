const routes = [
    {
        path: '/',
        component: () => import('@/layout/MainLayout.vue'),
        meta: { auth: false },
        children: [
            {
                path: '/nota-estancias',
                name: 'Nota Estancias',
                // component: Inicio,
                component: () => import('@/pages/NotaEstancias.vue'),
            },
            {
                path: '/nota-contemos',
                name: 'Nota Contemos',
                // component: Inicio,
                component: () => import('@/pages/NotaContemos.vue'),
            },
            {
                path: '/nota-ens',
                name: 'Nota ENS',
                // component: Inicio,
                component: () => import('@/pages/NotaENS.vue'),
            },
            {
                path: '/nota-ciencias',
                name: 'Nota Ciencias',
                // component: Inicio,
                component: () => import('@/pages/NotaCiencias.vue'),
            },
            {
                path: '/nota-reforestacion',
                name: 'Nota Reforestación',
                // component: Inicio,
                component: () => import('@/pages/NotaReforestacion.vue'),
            },
            {
                path: '/nota-eneceb',
                name: 'Nota ENECEB',
                // component: Inicio,
                component: () => import('@/notes/ENECEB1/index.vue'),
            },
        ],
    },
];

export default routes;
